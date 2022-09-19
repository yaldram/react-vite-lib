echo "==============Yarn install from lock file=============="
yarn install --frozen-lockfile

echo "==============Increment version=============="
npm version prerelease --preid $1


echo "==============Yarn build==============" 
yarn build

echo "==============Yarn build=============="
npm publish --tag $1