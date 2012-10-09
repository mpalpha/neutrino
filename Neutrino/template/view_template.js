neutrino.provide ("{TEMPLATE}View");
neutrino.require ("neutrino.View");

{TEMPLATE}View = function ()
{
	neutrino.View.call (this);
}

neutrino.inherits ({TEMPLATE}View, neutrino.View);


// Implementation Methods

{TEMPLATE}View.prototype.onLoaded = function() {

  // call our superclass
	neutrino.View.prototype.onLoaded.call (this);

};

{TEMPLATE}View.prototype.onDOMReady = function() {

  // call our superclass
	neutrino.View.prototype.onDOMReady.call (this);

};


{TEMPLATE}View.prototype.onBeforeVisible = function(inRunDynamics) {

  // call our superclass
	neutrino.View.prototype.onBeforeVisible.call (this, inRunDynamics);

};

{TEMPLATE}View.prototype.onVisible = function() {

  // call our superclass
	neutrino.View.prototype.onVisible.call (this);

};

{TEMPLATE}View.prototype.onBeforeInvisible = function() {

  // call our superclass
	neutrino.View.prototype.onBeforeInvisible.call (this);

};

{TEMPLATE}View.prototype.onInvisible = function() {

  // call our superclass
	neutrino.View.prototype.onInvisible.call (this);

};


// Custom Methods Below
