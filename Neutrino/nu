#!/bin/bash

# FUNCTION LIBRARY

function create
{
	if test $# -lt 2
	then
		echo "Usage: nu create view|page|application viewkey|pagekey|applicationpath"
		return 1
	fi
	
	if test ! -d template
	then
		echo "Cannot find template directory, bailing out"
		return 1
	fi
	
	key=`echo $2 | tr '[A-Z]' '[a-z]'`
	name=`echo $2 | awk ' { out = out" "toupper(substr($0,1,1))substr($0,2) } END{ print substr(out,2) } '`
	
	if test "$1" = "view"
	then
		htmlPath=web/html/views
		cssPath=web/css/views
		jsPath=web/js/views
		
		if test -f $htmlPath/$key.html -o -f $cssPath/$key.css -o -f $jsPath/$key.js
		then
			echo this project already has resources for view $key
		else
			# HTML
			echo making $htmlPath
			mkdir -p $htmlPath
			echo making $htmlPath/$key.html
			cat template/view_template.html | sed "s/{TEMPLATE}/$key/g" > $htmlPath/$key.html

			# CSS
			echo making $cssPath
			mkdir -p $cssPath
			echo making $cssPath/$key.css
			cat template/view_template.css | sed "s/{TEMPLATE}/$key/g" > $cssPath/$key.css

			# JS
			echo making $jsPath
			mkdir -p $jsPath
			echo making $jsPath/$key.js
			cat template/view_template.js | sed "s/{TEMPLATE}/$name/g" > $jsPath/$key.js
		fi
	elif test "$1" = "page"
	then
		htmlPath=web/html/pages
		cssPath=web/css/pages
		jsPath=web/js/pages
		
		if test -f $htmlPath/$key.html -o -f $cssPath/$key.css -o -f $jsPath/$key.js
		then
			echo this project already has resources for page $key
		else
			# HTML
			echo making $htmlPath
			mkdir -p $htmlPath
			echo making $htmlPath/$key.html
			cat template/page_template.html | sed "s/{TEMPLATE}/$key/g" > $htmlPath/$key.html

			# CSS
			echo making $cssPath
			mkdir -p $cssPath
			echo making $cssPath/$key.css
			cat template/page_template.css | sed "s/{TEMPLATE}/$key/g" > $cssPath/$key.css

			# JS
			echo making $jsPath
			mkdir -p $jsPath
			echo making $jsPath/$key.js
			cat template/page_template.js | sed "s/{TEMPLATE}/$name/g" > $jsPath/$key.js
		fi
	elif test "$1" = "application"
	then
		appPath=$2
		
		echo creating new application in $appPath
		
		# check our target directory doesn't already exist
		if test -d "$appPath"
		then
			# find out if anything's in it
			count=`ls "$appPath" | wc -l`
			
			if test $count -ne 0
			then
				echo target directory exists and is not empty, bailing out
				return 1
			fi
		else
			mkdir -p "$appPath"
			
			if test ! -d "$appPath"
			then
				echo could not create $appPath, bailing out
				return 1
			fi
		fi
		
		echo creating application in $appPath
		
		# prep the stage
		mkdir -p "$appPath/server/"
		
		# ok here we go
		find . -print | fgrep -v .svn | cpio -pdv "$appPath/server" >/dev/null 2>&1
		
		# remove any extant logs
		rm -f "$appPath/server/tomcat/logs/*"
		
		# remove any extant ROOT directory, expendable
		rm -rf "$appPath/server/tomcat/webapps/ROOT"
		
		# link tomcat/webapps/ROOT to web, so the server just works
		ln -s "$appPath/server/web/" "$appPath/server/tomcat/webapps/ROOT"
		
		echo application created in $appPath
	fi
}

function delete
{
	if test $# -lt 2
	then
		echo "Usage: nu delete view|page viewkey|pagekey"
		return 1
	fi
	
	key=`echo $2 | tr '[A-Z]' '[a-z]'`
	
	if test "$1" = "view"
	then
		htmlPath=web/html/views
		cssPath=web/css/views
		jsPath=web/js/views

		echo removing $htmlPath/$key.html
		rm -f $htmlPath/$key.html

		echo removing $cssPath/$key.css
		rm -f $cssPath/$key.css

		echo removing $jsPath/$key.js
		rm -f $jsPath/$key.js
	elif test "$1" = "page"
	then
		htmlPath=web/html/pages
		cssPath=web/css/pages
		jsPath=web/js/pages

		echo removing $htmlPath/$key.html
		rm -f $htmlPath/$key.html

		echo removing $cssPath/$key.css
		rm -f $cssPath/$key.css

		echo removing $jsPath/$key.js
		rm -f $jsPath/$key.js
	fi
}

function startServer
{
	server=tomcat/bin/startup.sh
	
	if test -x $server
	then
		$server
	else
		echo $server does not exist or is not executable
	fi
	
	return $?
}

function stopServer
{
	server=tomcat/bin/shutdown.sh
	
	if test -x $server
	then
		$server
	else
		echo $server does not exist or is not executable
	fi
	
	return $?
}

# this stops the server, waits for it to safely go away
# then starts it again
function restartServer
{
	oldnumjavas=`ps ax | fgrep java | wc -l`

	stopServer

	tries=0

	while true
	do
		sleep 1
		newnumjavas=`ps ax | fgrep java | wc -l`

		echo .

		# only one = fgrep, go ahead
		if test $newnumjavas -eq 1
		then
			break
		fi

		if test $newnumjavas -ne $oldnumjavas
		then
			break
		fi

		tries=`expr $tries + 1`

		if test $tries -eq 10
		then
			echo giving up on waiting for server to quit
			break
		fi
	done

	startServer
}

function log
{
	exec tail -100f tomcat/logs/catalina.out
}

function logonce
{
	exec tail -100 tomcat/logs/catalina.out
}

# MAINLINE

# figure out where we are
DIR=`dirname "$0"`

if [ -z "$DIR" ]
then
	DIR=.
else
	cd "$DIR"
fi

if test $# -lt 1
then	
	echo "usage: nu opcode [params]"
	echo "opcodes are --"
	echo "create application directory - clones this application into an empty directory"
	echo "create page pagekey - creates a new page"
	echo "create view viewkey - creates a new view"
	echo "start - starts the server"
	echo "stop - stops the server"
	echo "restart - stops then starts the server"
	echo "log - shows a rolling server log"
	echo "logonce - shows a static server log"
	exit 1
fi

opcode=$1
shift

if test $opcode = "create"
then
	create "$1" "$2" "$3"
	status=$?
elif test $opcode = "delete"
then
	delete "$1" "$2" "$3"
	status=$?
elif test $opcode = "start"
then
	startServer "$1" "$2" "$3"
	status=$?
elif test $opcode = "stop"
then
	stopServer "$1" "$2" "$3"
	status=$?
elif test $opcode = "restart"
then
	restartServer "$1" "$2" "$3"
elif test $opcode = "log"
then
	log $*
	status=$?
elif test $opcode = "logonce"
then
	logonce $*
	status=$?
else
	echo unknown opcode $opcode
	status=1
fi

exit $status

