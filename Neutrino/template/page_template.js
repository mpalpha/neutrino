neutrino.provide ("{TEMPLATE}Page");
neutrino.require ("neutrino.Page");

{TEMPLATE}Page = function ()
{
	neutrino.Page.call (this);
}

neutrino.inherits ({TEMPLATE}Page, neutrino.Page);


// Implementation Methods

{TEMPLATE}Page.prototype.onLoaded = function() {

  // call our superclass
	neutrino.Page.prototype.onLoaded.call (this);

};

{TEMPLATE}Page.prototype.onDOMReady = function() {

  // call our superclass
	neutrino.Page.prototype.onDOMReady.call (this);

};


{TEMPLATE}Page.prototype.onBeforeVisible = function(inRunDynamics) {

  // call our superclass
	neutrino.Page.prototype.onBeforeVisible.call (this, inRunDynamics);

};

{TEMPLATE}Page.prototype.onVisible = function() {

  // call our superclass
  neutrino.Page.prototype.onVisible.call (this);

};

{TEMPLATE}Page.prototype.onBeforeInvisible = function() {

  // call our superclass
  neutrino.Page.prototype.onBeforeInvisible.call (this);

};

{TEMPLATE}Page.prototype.onInvisible = function() {

  // call our superclass
	neutrino.Page.prototype.onInvisible.call (this);

};


// Custom Methods Below