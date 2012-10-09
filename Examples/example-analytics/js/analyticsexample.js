var AnalyticsExample = function ()
{
	neutrino.Application.call (this);
}
neutrino.inherits (AnalyticsExample, neutrino.Application);

AnalyticsExample.prototype.showParameters = function ()
{
	console.log ("AnalyticsExample.showParameters()");
	console.log (this.params);
	
	if (this.params)
	{
		for (var key in this.params)
		{
			var	value = this.params [key];
			console.log (key + " = " + value);
		}
	}
	else
	{
		console.log ("no parameters in application");
	}
}
