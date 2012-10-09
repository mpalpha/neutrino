#!/bin/bash

# figure out where we are
DIR=`dirname $0`

if [ -z "$DIR" ]
then
	DIR=.
fi

OUTPUT=$DIR/compiled.js

cp /dev/null $OUTPUT

if test -d $DIR/js/components
then
	if test `ls $DIR/js/components/ | wc -l` -ne 0
	then
		cat $DIR/js/components/*.js >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

if test -d $DIR/js/
then
	if test `ls $DIR/js/ | wc -l` -ne 0
	then
		cat $DIR/js/*.js >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

if test -d $DIR/js/pages
then
	if test `ls $DIR/js/pages/ | wc -l` -ne 0
	then
		cat $DIR/js/pages/*.js >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

if test -d $DIR/js/views
then
	if test `ls $DIR/js/views/ | wc -l` -ne 0
	then
		cat $DIR/js/views/*.js >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi


if test -d $DIR/js/taglets
then
	if test `ls $DIR/js/taglets/ | wc -l` -ne 0
	then
		cat $DIR/js/taglets/*.js >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi


