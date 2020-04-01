#!/bin/bash

git add .
git commit -m"Release - $1"
git push origin master