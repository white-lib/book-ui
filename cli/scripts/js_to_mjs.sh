#!/bin/bash

#find "$(dirname "$0")/../dist" -maxdepth 1 -type f -name "*.js" | while read -r file; do
find "$(dirname "$0")/../dist" -type f -name "*.js" | while read -r file; do
  mv "$file" "${file%.js}.cjs"
done

