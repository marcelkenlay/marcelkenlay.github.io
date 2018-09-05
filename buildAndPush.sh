#!/bin/sh

echo ">git pull"
git pull | sed 's/^/    /'

echo ">yarn build"
yarn build | sed 's/^/    /'

echo ">mv ./build/index.html ./build/tmp.txt"
mv ./build/index.html ./build/tmp.txt | sed 's/^/    /'

echo ">sed -n 's/"\//".\//gpw ./build/index.html' ./build/tmp.txt"
sed -n 's/"\//".\//gpw ./build/index.html' ./build/tmp.txt | sed 's/^/    /'

echo ">rm ./build/tmp.txt"
rm ./build/tmp.txt | sed 's/^/    /'

echo ">cp ./build/* ."
cp -r ./build/* . | sed 's/^/    /'

if [ "$1" != "" ];
then
  echo ">git add . && git commit -am \"$1\" && git push"
  git add . | sed 's/^/    /' && git commit -am "$1" | sed 's/^/    /' && git push | sed 's/^/    /'
else
  echo ">Not pushed as no message was given"
fi
