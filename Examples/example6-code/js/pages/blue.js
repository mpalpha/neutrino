// BluePage.js

var BluePage = function ()
{
  neutrino.Page.call (this);
};
neutrino.inherits (BluePage, neutrino.Page);

// page/view lifecycle methods

BluePage.prototype.onLoaded = function ()
{
  neutrino.View.prototype.onLoaded.call (this);
  
  console.log ("BluePage has been loaded");
}

BluePage.prototype.onBeforeVisible = function (inRunDynamics)
{
  neutrino.View.prototype.onBeforeVisible.call (this, inRunDynamics);

  console.log ("BluePage is about to become visible");
}

BluePage.prototype.onVisible = function ()
{
  neutrino.View.prototype.onVisible.call (this);

  console.log ("BluePage is now visible");
}

BluePage.prototype.onDOMReady = function ()
{
  neutrino.View.prototype.onDOMReady.call (this);

  console.log ("BluePage's markup is now final");
}

BluePage.prototype.onBeforeInvisible = function ()
{
  neutrino.View.prototype.onBeforeInvisible.call (this);

  console.log ("BluePage's markup is about to become invisible");
}

BluePage.prototype.onInvisible = function ()
{
  neutrino.View.prototype.onInvisible.call (this);

  console.log ("BluePage's markup is now invisible");
}

BluePage.prototype.clickSquare = function ()
{
  console.log ("BluePage.clickSquare() called");

  gApplication.setPage ("red", "slide-out-to-right", "slide-in-from-left");
}

