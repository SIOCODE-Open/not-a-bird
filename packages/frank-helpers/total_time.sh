#!/bin/bash

# Read from stdin
md_table=$(cat)

num_rows=$(echo "$md_table" | awk 'END{print NR}')

total_hour=0
total_minute=0

# Loop for all available rows
#for ((i = 2; i <= num_rows; i++)); do
for ((i = 1; i <= num_rows; i++)); do # Skip headers after testing with real data.
	time_raw=$(echo "$md_table" | sed 's/|/,/g' | awk -F ',' -v i=$i 'NR==i {print $5}' | xargs)
	hour_tmp=$(echo "$time_raw" | awk -F ":" '{print $1}')
	minute_tmp=$(echo "$time_raw" | awk -F ":" '{print $2}')
	total_hour=$((total_hour + hour_tmp))
	total_minute=$((total_minute + minute_tmp))
done

# Divide total minutes by 60 to get additional hours
additional_hour=$((total_minute / 60))

# Use modulus operator to get the remaining minutes
remainder_minutes=$((total_minute % 60))

# Add additional hours to total hours
total_hour=$((total_hour + additional_hour))

echo "Total Hours: $total_hour"
echo "Total Minutes: $remainder_minutes"
