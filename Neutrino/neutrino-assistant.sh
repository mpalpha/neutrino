#!/bin/bash

DIR=`dirname $0`

if test -z "$DIR"
then
	DIR=.
else
	cd "$DIR"
fi

echo exec java -jar "$DIR/neutrino-assistant.jar" "$DIR"

exec java -jar "$DIR/neutrino-assistant.jar" "$DIR"



