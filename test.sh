#!/bin/bash

if true ; then
    cat <<- EOF > /tmp/yourfilehere
    The leading tab is ignored.
    EOF
fi

re='^[0-9]+$'
if ! [[ $yournumber =~ $re ]] ; then
   echo "error: Not a number" >&2; exit 1
fi
