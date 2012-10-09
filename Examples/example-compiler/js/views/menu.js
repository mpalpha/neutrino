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

