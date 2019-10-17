# temabit-lections-2019
## lesson 1
git init - start working with git
git clone - clone a repository

ctrl inert - copy in git bash

git checkout -b "branch" - create a new branch

git branch -m old-name new-name - change branch name

git status - get status

git push - push commits to servers


git add (. - додається усе відносно вибраної директорії)

git commit -m "change readme file" - commit changes

git config --global user.name - set user name


git pull - Fetch from and integrate with another repository or a local branch
git fetch - get all the information from server 

git merge - Incorporate from lower branch to higher branch by hierarchy

git remote -v - chack available servers to push/fetch

## Lesson 2
	
	### git flow

code rewiew - is a software quality assurance activity in which one
 or several humans check a program mainly by viewing and reading 
 parts of its source code, and they do so after implementation 
 or as an interruption of implementation. 
 At least one of the humans must not be the code's author. 
 The humans performing the checking, excluding the author, are called "reviewers"

pull request - open 1 time

snake case - is the practice of writing compound words or phrases in which the elements are separated
 with one underscore character (_) and no space
camel case
kibab case - the-kebab-case-converter-converts-text-to-kebab-case

git pull origin/master - pull changes to an excect server

git add -a - stage this hunk and all later hunks in the file

git checkout - get all branches from server
git commit --ammend - add file to the previous commit in the tree
git push -f - push forcibly. if you have some conflic when it's pushed

	### git merge

git checkout app/file.js - file on server change the same file localy
git reset --hard HEAD~1 - return commit by story, 1 - points ofcommits in tree for reseting 
git merge --abort -  you can return to the state before you started the merge at any time. 
This should give you the confidence that you can't break anything
git cherry-pick abccbad - used to take the changes made by any commit 
and try to apply them again in the form of a new commit at the top of the current branch

	### hide not commited chosen area of code 
	
git stash - add stash 
git stash drop - delete the last stash
git stash - apply changes and delete stash
git stash list - show stash list

git tag -a v0.01 -m 'comment' - create a tag
git push origin --tags - push all the tags
git show v0.0.1 - show an excect tag
git tag - d v.0.0.1 - delete tag
git push origin :refs/tags/v0.0.1 - push all the tags
