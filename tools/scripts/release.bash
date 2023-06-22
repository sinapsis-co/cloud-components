#!/bin/bash

set -e

package=$1

cd $package

# yarn verify

if [ "$package" = "core" ]; then
	yarn upgrade @sinapsis-co/cc-sdk --latest
fi

version=$(grep -n "version" package.json | cut -d':' -f3 | cut -d'"' -f2)
inm=$(echo $version | cut -d'.' -f1 -f2)
pre=$(echo $version | cut -d'.' -f3)
current=$((pre + 1))

yarn build
cp package.json .dist/package.json
cd .dist

yarn publish --new-version $inm.$current --no-git-tag-version
cp package.json ../package.json
cd ..

branch=$(git branch | grep \* | cut -d' ' -f2)
git add . && git commit -m "$package-$inm.$current" && git push origin $branch
cd ..
