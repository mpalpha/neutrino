// RedPage.js

var RedPage = function ()
{
  neutrino.Page.call (this);
  
}
neutrino.inherits (RedPage, neutrino.Page);

// page/view lifecycle methods

RedPage.prototype.onLoaded = function ()
{
  neutrino.View.prototype.onLoaded.call (this);
  
  console.log ("RedPage has been loaded");
}

RedPage.prototype.onBeforeVisible = function (inRunDynamics)
{
  neutrino.View.prototype.onBeforeVisible.call (this, inRunDynamics);

  console.log ("RedPage is about to become visible");
}

RedPage.prototype.onVisible = function ()
{
  neutrino.View.prototype.onVisible.call (this);

  console.log ("RedPage is now visible");
}

RedPage.prototype.onDOMReady = function ()
{
  neutrino.View.prototype.onDOMReady.call (this);

  console.log ("RedPage's markup is now final");
}

RedPage.prototype.onBeforeInvisible = function ()
{
  neutrino.View.prototype.onBeforeInvisible.call (this);

  console.log ("RedPage's markup is about to become invisible");
}

RedPage.prototype.onInvisible = function ()
{
  neutrino.View.prototype.onInvisible.call (this);

  console.log ("RedPage's markup is now invisible");
}

RedPage.prototype.clickSquare = function ()
{
  console.log ("RedPage.clickSquare() called");

  gApplication.setPage ("blue", "slide-out-to-right", "slide-in-from-left");
}

