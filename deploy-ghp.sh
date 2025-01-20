#! /bin/bash

git push origin --delete gh-pages
git branch -D gh-pages

git checkout --orphan gh-pages

git rm --cached -rf .

git add deploy-ghp.bat
git commit -m "Add deploy script"

# git clean -n
git clean -f

echo .gitignore >.gitignore
echo .vscode >>.gitignore
echo node_modules >>.gitignore
echo public >>.gitignore
echo src >>.gitignore
echo dist >>.gitignore
echo deploy-ghp.sh >>.gitignore

cp -r ./dist/* ./
cp index.html 404.html

git add .
git commit -m "Deploy"
git push --set-upstream origin gh-pages

git checkout main
