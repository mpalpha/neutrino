// Application.js

neutrino.require ("neutrino.Application");
neutrino.provide ("Application");

var	Application = function ()
{
	neutrino.Application.call (this);
};
neutrino.inherits (Application, neutrino.Application);

Application.prototype.addNote = function ()
{
	console.log ("Application.addNote()");
	
	var	noteElement = document.getElementById ("note-text");
	var	note = noteElement.value;
	
	console.log (note);
	
	if (note && note.length)
	{
		neutrino.Utils.getURLContents
		({
			url: "/notes/create",
			data: "note=" + note,
			type: "POST",
			async: true,
			success: function ()
			{
				gApplication.showView ("notes");
			},
			error: function ()
			{
				alert ("failure");
			}
		});
	}
};



neutrino.provide ("HomePage");
neutrino.require ("neutrino.Page");

HomePage = function ()
{
  neutrino.Page.call (this);
}

neutrino.inherits (HomePage, neutrino.Page);


// Implementation Methods

HomePage.prototype.onLoaded = function() {

  // call our superclass
  neutrino.Page.prototype.onLoaded.call (this);

};

HomePage.prototype.onDOMReady = function() {

  // call our superclass
  neutrino.Page.prototype.onDOMReady.call (this);

};


HomePage.prototype.onBeforeVisible = function(inRunDynamics) {

  // call our superclass
  neutrino.Page.prototype.onBeforeVisible.call (this, inRunDynamics);

};

HomePage.prototype.onVisible = function() {

  // call our superclass
  neutrino.Page.prototype.onVisible.call (this);

};

HomePage.prototype.onBeforeInvisible = function() {

  // call our superclass
  neutrino.Page.prototype.onBeforeInvisible.call (this);

};

HomePage.prototype.onInvisible = function() {

  // call our superclass
  neutrino.Page.prototype.onInvisible.call (this);

};

// Custom Methods Below

