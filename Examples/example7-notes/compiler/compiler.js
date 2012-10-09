/**
*
* @license
* Copyright ©2011, 2012 Subatomic Systems, Inc.  All rights reserved.
*
**/

var	exec = require ("child_process").exec;
var	fs = require ("fs");
var	jsdom = require ("jsdom");
var	sys = require ("sys");

// check the args for a "project" directory to use as output flavour
// note that argv[0] = "node", and argv[1] = "compiler.js"

if (process.argv.length < 3)
{
console.log ("usage: node compiler.js appname");
  process.exit (1);
}

var application = process.argv [2];
var callback;

if (process.argv.length > 3)
{
  var file = process.argv [3]
  try {
    callback = require(file);
    if (!callback.call) {
      throw Error("doesn't export call()");
    }
  } catch (x) {
    console.log("couldn't load " + file + " - " + x);
    console.log("please provide a fully qualified path to the callback file");
    process.exit (1);
  }
}

console.log ("Neutrino compiler processing application: " + application);

// make the combined Js file
console.log ("making combined js file");

var	combinerPath = "./make-combined-js.command";

var	stats = null;

try
{
	stats = fs.statSync (combinerPath);
}
catch (inError)
{
	combinerPath = "./make-" + application + "-js.cmd";
	
	try
	{
		stats = fs.statSync (combinerPath);
	}
	catch (inError2)
	{
	}
}

if (stats && stats.isFile)
{
	exec
	(
		combinerPath,
		function (inError, inStdout, inStderr)
		{
			if (inError != null)
			{
				console.error (inError);
				process.exit (1);
			}
		}
	);
}
else
{
	console.log ("couldn't find make-combined-js.command or make-" + application + "-js.cmd");
	process.exit (1);
}

// make the combined Js file
console.log ("making combined css file");

combinerPath = "./make-combined-css.command";

try
{
	stats = fs.statSync (combinerPath);
}
catch (inError)
{
	combinerPath = "./make-" + application + "-css.cmd";
	
	try
	{
		stats = fs.statSync (combinerPath);
	}
	catch (inError2)
	{
	}
}


if (stats && stats.isFile)
{
	exec
	(
		combinerPath,
		function (inError, inStdout, inStderr)
		{
			if (inError != null)
			{
				console.error (inError);
				process.exit (1);
			}
		}
	);
}
else
{
	console.log ("couldn't find make-combined-css.command or make-" + application + "-css.cmd");
	process.exit (1);
}

// load the index file
console.log ("reading index.html");

var	index = fs.readFileSync ("index.html");

var $ = null;
var document = null;
var window = null;

jsdom.env
(
  {
    html: index.toString (),
    scripts:
    [
      "http://code.jquery.com/jquery-1.5.min.js"
    ]
  },
  function (inError, inWindow)
  {
    // turn everything off from this point on
    // update: this does nothing at all AFAICS
    jsdom.defaultDocumentFeatures =
    {
      FetchExternalResources   : false,
      ProcessExternalResources : false,
      MutationEvents           : false,
      QuerySelector            : false
    };
    
    $ = inWindow.jQuery;
    window = inWindow;
    document = inWindow.document;

    // remove the jquery <script> that jsdom.env() adds to <html>
    $("html").children ("script").remove ();
    
    compile ();
  }
);

function
compile ()
{
console.log ("compile()");

  try
  {
    makeContainers ();
    
    preloadPages ();
    
    // have to ensure that we recurse into dynamically loaded views
    // so keep preloading views until we don't load any...
    
    var inlinedCount = 0;
    
    do
    {
      inlinedCount = preloadViews ();

console.log ("inlined " + inlinedCount + " views");
    }
    while (inlinedCount > 0);
    
    // rewrite the include of the application-level CSS to include the combined file instead
console.log ("rewriting #application-css to point to " + application + ".css");
    
    // ensure it gets converted to browser specific CSS on loading
    $("#application-css").removeAttr ("href");
    $("#application-css").attr ("nu-href", application + ".css");
    $("#application-css").addClass ("nu-browser-neutral-css");

    // rewrite the include of the application-level JS to include the combined file instead
console.log ("rewriting #application-js to point to " + application + ".js");
    $("#application-js").attr ("src", application + ".js");
    
    // blow away any nu-compiler-remove includes
    $(".nu-compiler-remove").remove ();
    
    disableLoader ();

    if( callback && callback.call ) {
      callback.call($, $("html"));
    }
    
    writeDocument ();
  }
  catch (inError)
  {
    // in a desperate attempt to get better error reporting
    // than the $god-awful default in node.js
console.error (inError);
  }
}

// FUNCTIONAGE

// 
function
disableLoader ()
{
console.log ("disableLoader()");

  // jdom is too "live" and will process any <script>s added
  // which will blow up as the files won't exist here
  // so add xscripts, and text-replace later
  var	script = document.createElement ("xscript");
  $(script).attr ("type", "text/javascript");
  $(script).html ("neutrino.Loader.setEnabled(false);");
  
  $("head").append (script);
}

function
makeContainers ()
{
console.log ("makeContainers()");

	if ($("#nu-page-container").length == 0)
	{
console.log ("making #nu-page-container");

		$("body").append ("<div id=\"nu-page-container\"></div>");
	}
}

function
preloadPages ()
{
console.log ("preloadPages()");

  var files = fs.readdirSync ("html/pages");

  for (var i = 0; i < files.length; i++)
  {
    var file = "html/pages/" + files [i];

    // markup only
    var extensionIndex = file.indexOf (".html");
    
    if (extensionIndex > 0 && extensionIndex == (file.length - 5))
    {
      try
      {
        var contents = fs.readFileSync (file);
    
        var temp = document.createElement ("div");
        temp.innerHTML = contents.toString ();
        
        $(temp).children ().each
        (
          function ()
          {
            $(this).addClass ("nu-invisible");
            
            $("#nu-page-container").append (this);
          }
        );
      }
      catch (inError)
      {
console.error ("error dealing with " + file);
console.error (inError);
      }
    }
  }
}

function
preloadViews ()
{
console.log ("preloadViews()");

  var inlinedCount = 0;
  
  $("body").find ("[nu-view]").each
  (
    function ()
    {
      var viewKeyElements = $(this).attr ("nu-view").split (":");
      
      var viewKey = viewKeyElements [0];
      viewKey = viewKey.toLowerCase ();      

      // does the view already have children? ignore it, if so
      if ($(this).children ().length == 0)
      {
        console.log ("inlining view with key " + viewKey);

        var loadMarkup = true;
        
        if (viewKeyElements.length > 1)
        {
          loadMarkup = viewKeyElements [1].indexOf ("h") >= 0;
        }
        
        if (loadMarkup)
        {
          var path = "html/views/" + viewKey + ".html";
          console.log ("loading " + path);

          try
          {
            var content = fs.readFileSync (path);
            var	contentString = null;
            
            if (content)
            {
	            contentString = content.toString ().replace (/^\s+|\s+$/g, "");
	          }
	          
	          if (contentString && contentString.length)
	          {
							$(this).html (contentString);
							
							inlinedCount++;
						}
						else
						{
							// don't bump inlinedCount here
							// otherwise we will loop if a fragment is present but empty
						}
          }
          catch (inError)
          {
            console.error ("ERROR loading markup from " + path);
            
            // don't leave it empty as the loader will try to load it otherwise
            $(this).html ("(compiler preload error)");
          }
        }
      }
      else
      {
// console.log ("not inlining view with key " + viewKey);
      }
    }
  );
  
  return inlinedCount;
}

// give extra directories after "extension"
function
writeCombined (outPath, inExtension)
{
console.log ("writeCombined() to " + outPath);

  var fd = fs.openSync (outPath, "w", 0666);
  
  for (var i = 2; i < arguments.length; i++)
  {
    var dir = arguments [i];
    
    var files = fs.readdirSync (dir);
    
    for (var j = 0; j < files.length; j++)
    {
      var file = files [j];
      
      var extensionIndex = file.indexOf (inExtension);
      
      if (extensionIndex > 0 && extensionIndex == (file.length - inExtension.length))
      {
        file = dir + "/" + file;
        var contents = fs.readFileSync (file);
        var length = fs.writeSync (fd, contents, 0, contents.length);

// console.log ("wrote " + length + " bytes from " + file);
      }
    }
  }
  
  fs.closeSync (fd);
}

function
writeDocument ()
{
  var path = "index-compiled.html";

console.log ("writeDocument() to " + path);

	var	page = "";
	
	if (document.doctype)
	{
console.log ("adding doctype of " + document.doctype);

		page += document.doctype;
		page += "\n\n";
	}
	
	page += document.documentElement.outerHTML;

	// now replace the <xscripts> with <script>
	page = page.replace (/xscript/g, "script");
	
	fs.writeFileSync (path, page);
}

