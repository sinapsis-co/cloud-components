BRANCH=dev

package=$1
# git pull origin $BRANCH
# git add .
cd $package
version=$(cat package.json | jq .version | cut -d'"' -f2)
inm=$(echo $version | cut -d'.' -f1 -f2)
pre=$(echo $version | cut -d'.' -f3)
current=$((pre + 1))
# git add . && npx lint-staged || exit 1
yarn build
cp package.json .dist/package.json
cd .dist
yarn publish --new-version $inm.$current --no-git-tag-version
cp package.json ../package.json
cd ..
# git add . && git commit -m "$package-$inm.$current" && git push origin $BRANCH
cd ..
