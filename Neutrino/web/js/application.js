// Application.js

neutrino.require ("neutrino.Application");
neutrino.provide ("Application");

var	Application = function ()
{
	neutrino.Application.call (this);
};
neutrino.inherits (Application, neutrino.Application);

Application.prototype.addNote = function ()
{
	console.log ("Application.addNote()");
	
	var	noteElement = document.getElementById ("note-text");
	var	note = noteElement.value;
	
	console.log (note);
	
	if (note && note.length)
	{
		neutrino.Utils.getURLContents
		({
			url: "/notes/create",
			data: "note=" + note,
			type: "POST",
			async: true,
			success: function ()
			{
				gApplication.showView ("notes");
			},
			error: function ()
			{
				alert ("failure");
			}
		});
	}
};

