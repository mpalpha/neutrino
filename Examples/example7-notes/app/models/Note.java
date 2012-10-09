// Note.java

// PACKAGE

package models;

// IMPORTS

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.subatomicsystems.neutrino.server.Database;
import com.subatomicsystems.neutrino.server.Record;

// CLASS

/*
	Note
	
	represents a Note record in the database
	
	note there are no getters or setters for columns,
	as Record inherits from Map<String, Object>
	to get a value for a column, use get (columnName)
	
*/

public class Note
extends Record
{
	// PUBLIC STATIC METHODS
	
	// PUBLIC CONSTRUCTOR
	
	public
	Note ()
	{
	}
	
	// RECORD IMPLEMENTATION
	
	public Map<String, String>
	getColumnNames ()
	{
		return sColumnNames;
	}
	
	public String
	getTableName ()
	{
		return "notes";
	}
	
	// RECORD OVERRIDES
	
	public void
	adorn (ResultSet inResultSet)
	{
	}

	// called pre-insert to validate the record
	// throw an exception if validation fails
	protected void
	validatePreInsert (Connection inConnection)
	// throws Exception
	{
	}
	
	// called pre-update to validate the record
	// throw an exception if validation fails
	protected void
	validatePreUpdate (Connection inConnection)
	// throws Exception
	{
	}
	
	
	// STATIC PRIVATE DATA
	
	static Map<String, String>
	sColumnNames = null;
	
	// STATIC 
	
	// this has to come after the declarations of static variables it uses
	static
	{
		sColumnNames = new HashMap<String, String> ();
		sColumnNames.put ("id", "id");
		sColumnNames.put ("note", "note");
	}
	
}

