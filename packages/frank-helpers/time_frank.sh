#!/bin/bash

# Read input from stdin
while read line; do
	# Replace | with ,
	input=$(echo "$line" | sed 's/|/,/g')

	# Grab the 3rd column and echo it out
	time_a=$(echo "$input" | cut -d',' -f3 | cut -d' ' -f5)

	# Grab the 4th column and echo it out
	time_b=$(echo "$input" | cut -d',' -f4 | cut -d' ' -f5)

	# Create variables for time a. Saves hour, minute, second in variables
	IFS=':' read -r time_a_hour time_a_minute time_a_second <<<$(echo "$time_a" | tr -d '[:space:]')

	# Create variables for time b. Saves hour, minute, second in variables
	IFS=':' read -r time_b_hour time_b_minute time_b_second <<<$(echo "$time_b" | tr -d '[:space:]')

	# Calculate total passed time
	# Remove leading zeros from hours
	time_a_hour=$((10#${time_a_hour}))
	time_b_hour=$((10#${time_b_hour}))

	total_passed_hours=$((time_b_hour - time_a_hour))
	total_passed_minutes=$((time_b_minute - time_a_minute))

	# Handle negative minutes
	if [ $total_passed_minutes -lt 0 ]; then
		total_passed_hours=$((total_passed_hours - 1))
		total_passed_minutes=$((60 + total_passed_minutes))
	fi

	# Replace all , with pipe character (|) and echo it out
	echo "$input$total_passed_hours:$total_passed_minutes" | sed 's/,/|/g'
done
