#!/bin/bash

# figure out where we are
DIR=`dirname $0`

if [ -z "$DIR" ]
then
	DIR=.
fi

OUTPUT=$DIR/compiled.css

cp /dev/null $OUTPUT

if test -f $DIR/base.css
then
	cat $DIR/base.css >> $OUTPUT
	echo >> $OUTPUT
	echo >> $OUTPUT
fi

if test -d $DIR/css/
then
	if test `ls $DIR/css/ | wc -l` -ne 0
	then
		cat $DIR/css/*.css >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

if test -d $DIR/css/pages
then
	if test `ls $DIR/css/pages/ | wc -l` -ne 0
	then
		cat $DIR/css/pages/*.css >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

if test -d $DIR/css/views
then
	if test `ls $DIR/css/views/ | wc -l` -ne 0
	then
		cat $DIR/css/views/*.css >> $OUTPUT
		echo >> $OUTPUT
		echo >> $OUTPUT
	fi
fi

