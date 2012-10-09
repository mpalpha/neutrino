// NotesController.java

// PACKAGE

package controllers;

// IMPORTS

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.subatomicsystems.neutrino.server.Record;
import com.subatomicsystems.neutrino.server.NeutrinoController;
import com.subatomicsystems.neutrino.server.NeutrinoUtilities;
import com.subatomicsystems.neutrino.server.XNeutrinoServer;

import models.*;

// CLASS

/*
	NotesController
	
	responds to actions off the "notes" key, eg host.com/notes/create
	
	actions are found via reflection, so there is no need to configure them.
	just adding public methods with no arguments that return Object is enough to
	get them recognised.
	
	the object returned by an action method is converted to JSON by the framework.
	to disable this, for those situations where the action is (for example)
	sending a binary asset back to the browser, set this.renderResponse to false.
	
	within a controller, the following properties are always available
	
	this.controllerKey - the REST URL key that got you here, eg "notes"
	this.action - the REST URL action that got you here, eg "create"
	this.request - the HTTP request
	this.parameters - any HTTP parameters
	this.session - the HTTP session, if any
	this.server - URL of the server, scheme + name + port
	this.response - the HTTP response
	this.uploads - any HTTP file uploads (list of objects including temp file references)
	this.connection - connection to database, note commit/rollback are done automatically

*/

public class NotesController
extends
	NeutrinoController
{
	// NEUTRINOCONTROLLER RECORDFACTORY OVERRIDES
	
	public Record
	createRecord (String inRecordType)
	{
		Record	record = null;
		
		if (inRecordType.equals ("note"))
		{
			record = new Note ();
		}
		else
		{
			record = super.createRecord (inRecordType);
		}
		
		return record;
	}
	
	// PUBLIC METHODS
	
	public Object
	all ()
	throws Exception
	{
		return Note.getAll (this.connection, this, "note");
	}
	
	public Object
	create ()
	throws Exception
	{
		Note	note = new Note ();
		note.put ("note", this.parameters.get ("note"));
	
		note.insert (this.connection);
		
		return note;
	}

	public Object
	get ()
	throws Exception
	{
		String	idString = this.parameters.get ("id");

		Integer	id = null;
		
		try
		{
			id = Integer.parseInt (idString);
		}
		catch (Exception inException)
		{
		}
		
		Note	note = null;
		
		if (id != null)
		{
			note = (Note) Record.getByID (this.connection, id, this, "note");
		}
		
		if (note == null)
		{
			this.response.sendError (404);
		}
		
		return note;
	}
}

