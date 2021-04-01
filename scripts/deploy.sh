#!/usr/bin/env bash

yarn build &&
git init && 
git add . &&
git commit -m "deploy" &&
git remote add origin &&
git remote add origin git@github.com:summercoming866/-website.git &&
git push -u origin main -f 
cd ..