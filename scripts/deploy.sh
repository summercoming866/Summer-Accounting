#!/usr/bin/env bash

yarn build &&
cd build &&
git init && 
git add . &&
git commit -m "deploy" &&
git remote add origin &&
git remote add origin git@github.com:summercoming866/SummerAccounting-website.git &&
git push -u origin main -f 
cd ..