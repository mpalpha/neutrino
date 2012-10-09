var EventsExample = function ()
{
	neutrino.Application.call (this);
}
neutrino.inherits (EventsExample, neutrino.Application);

EventsExample.prototype.onMouseDown = function (inEvent)
{
	console.log ("EventsExample.onMouseDown()");
};

EventsExample.prototype.onTextBlur = function (inEvent)
{
	console.log ("EventsExample.onTextBlur()");
};

EventsExample.prototype.onTextChange = function (inEvent)
{
	console.log ("EventsExample.onTextChange()");
};

EventsExample.prototype.onTextClick = function (inEvent)
{
	console.log ("EventsExample.onTextClick()");
};

EventsExample.prototype.onKeyUp = function (inEvent)
{
	console.log ("EventsExample.onKeyUp()");
	console.log ("keycode is " + inEvent.keyCode);
};
