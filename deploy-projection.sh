#!/bin/bash

projName=$1
projPath=@/etc/eventstore/${projName}.js

curl -H 'Content-Type: application/json' -u admin:changeit --data ${projPath} "http://localhost:2113/projections/continuous?name=${projName}&type=JS&emit=1"