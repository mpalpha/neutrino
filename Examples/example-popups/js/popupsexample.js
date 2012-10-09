var PopupsExample = function ()
{
	neutrino.Application.call (this);
}
neutrino.inherits (PopupsExample, neutrino.Application);

PopupsExample.prototype.clickMakerPopup = function (inEvent)
{
	console.log ("PopupsExample.clickMakerPopup()");

	var	options = inEvent.target.querySelectorAll ("option");
	var	option = options [inEvent.target.selectedIndex];
	
	var	params = new Object ();
	params.maker_id = option.getAttribute ("value");
	
	gApplication.showView ("models", params);
}
