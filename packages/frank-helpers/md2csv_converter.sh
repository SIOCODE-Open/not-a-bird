#!/bin/bash

# Read the markdown table input from standard input
input_data=$(cat | tr -d ' ')

# Extract headers from the first row
headers=$(echo "$input_data" | head -n 1 | sed 's/|/,/g' | sed 's/^,//' | sed 's/,$//')

# Extract data rows excluding headers
data_rows=$(echo "$input_data" | tail -n +3 | sed 's/|/,/g' | sed 's/^,//' | sed 's/,$//')

# Print headers and data rows in CSV format
echo "$headers"
echo "$data_rows"
