var ParametersExample = function ()
{
	neutrino.Application.call (this);
}
neutrino.inherits (ParametersExample, neutrino.Application);

ParametersExample.prototype.showParameters = function (inEvent)
{
	console.log ("ParametersExample.showParameters()");
	console.log (inEvent);
	console.log (this.nuParams);
	
	if (this.nuParams)
	{
		for (var key in this.nuParams)
		{
			var	value = this.nuParams [key];
			console.log (key + " = " + value);
		}
	}
	else
	{
		console.log ("no parameters in application");
	}
}
