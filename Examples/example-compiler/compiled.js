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

// MenuView.js

var MenuView = function ()
{
  neutrino.View.call (this);
}
neutrino.inherits (MenuView, neutrino.View);

// page/view lifecycle methods

MenuView.prototype.onLoaded = function ()
{
  neutrino.View.prototype.onLoaded.call (this);
  
  console.log ("MenuView has been loaded");
}

MenuView.prototype.onBeforeVisible = function (inRunDynamics)
{
  neutrino.View.prototype.onBeforeVisible.call (this, inRunDynamics);

  console.log ("MenuView is about to become visible");
}

MenuView.prototype.onVisible = function ()
{
  neutrino.View.prototype.onVisible.call (this);

  console.log ("MenuView is now visible");
}

MenuView.prototype.onDOMReady = function ()
{
  neutrino.View.prototype.onDOMReady.call (this);

  console.log ("MenuView's markup is now final");
}

MenuView.prototype.onBeforeInvisible = function ()
{
  neutrino.View.prototype.onBeforeInvisible.call (this);

  console.log ("MenuView's markup is about to become invisible");
}

MenuView.prototype.onInvisible = function ()
{
  neutrino.View.prototype.onInvisible.call (this);

  console.log ("MenuView's markup is now invisible");
}

MenuView.prototype.clickMenuItem = function ()
{
  console.log ("MenuView.clickMenuItem() called");

  var item = this.nuParams.menu;
  
  if (item && item.length)
  {
    console.log ("item in parameters is " + item);
    
    gApplication.setPage (item, "slide-out-to-right", "slide-in-from-left");
  }
  else
  {
    console.error ("clickMenuItem() called without menu parameter");
  }
}

