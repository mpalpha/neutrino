// Routes.java

// PACKAGE

package config;

// IMPORTS

import com.subatomicsystems.neutrino.server.IRoutes;
import com.subatomicsystems.neutrino.server.NeutrinoDispatcher;
import com.subatomicsystems.neutrino.server.RouteManager;

// CLASS

/*
	Routes
*/

public class Routes
	implements IRoutes
{
	// PUBLIC CONSTRUCTOR
	
	public
	Routes ()
	{
	}
	
	// IROUTES
	
	public void
	addRoutes ()
	{
		RouteManager	rm = RouteManager.getInstance ();
		
		// add routes here with rm.addPreRoute()
		// rm.addPreRoute ("/users/", "users", "create");
	}
	
}

