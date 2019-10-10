# temabit-lections-2019

## most used git commands

[`git help`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-help.html)
display help information about git commands\
`git help <command>`describes specific command

[`git init`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-init.html)
create an empty git repository or reinitialize an existing one

[`git config`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-config.html)
get and set repository or global options\
`git config [--global] user.email <user email>`\
`git config [--global] user.name <user name>`

[`git clone`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-clone.html)
clones a repository into a newly created directory\
`git clone <repository>` the (possibly remote) repository to clone from

[`git checkout`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-checkout.html)
switches branches or restores working tree files\
`git checkout -b <new_branch>` create a new branch 

[`git branch`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-branch.html)
list, create, or delete branches\
`git branch -a` list both remote-tracking branches and local branches

[`git status`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-status.html)
displays paths in the working tree that are not tracked by git

[`git add`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-add.html)
updates the index to prepare the content staged for the next commit\
`git add .` add all files from current directory and subdirectories\
`git add *` add all files

[`git commit`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-commit.html)
record changes to the repository\
`git commit -m <log message>` with log message describing the changes

[`git push`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-push.html)
updates remote refs using local refs\
`git push origin HEAD` push the current branch to the same name on the remote

[`git fetch`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-fetch.html)
download objects and refs from another repository\
`git fetch origin`download from remote repository

[`git pull`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-pull.html)
fetch from and integrate with a local branch\
`git pull origin` merge into the current branch the remote branch

[`git merge`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-merge.html)
incorporates changes from the named commits into the current branch\
`git merge <branch name>` join development history from named branch

[`git tag`](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/git-tag.html)
сreate, list, delete or verify a tag object

## books

- [https://git-scm.com/book/ru/v1/](https://git-scm.com/book/ru/v1/)

## user manuals

- [https://git-scm.com/doc](https://git-scm.com/doc)
- [https://mirrors.edge.kernel.org/pub/software/scm/git/docs/user-manual.html](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/user-manual.html)
- [https://mirrors.edge.kernel.org/pub/software/scm/git/docs/](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/)

## git help in bash `$ git --help`

### usage

git [--version] [--help] [-C \<path\>] [-c \<name\>=\<value\>] \
    [--exec-path[=\<path\>]] [--html-path] [--man-path] [--info-path] \
    [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare] \
    [--git-dir=\<path\>] [--work-tree=\<path\>] [--namespace=\<name\>] \
    \<command\> [\<args\>]

### These are common Git commands used in various situations

#### start a working area (see also: `git help tutorial`)
**<a name='clone'>`clone`**     [Clone a repository into a new directory](https://git-scm.com/docs/git-clone) \
**<a name='init'>`init`**      [Create an empty Git repository or reinitialize an existing one](https://git-scm.com/docs/git-init)

#### work on the current change (see also: `git help everyday`)
**<a name='add'>`add`**       [Add file contents to the index](https://git-scm.com/docs/git-add) \
   `mv`        Move or rename a file, a directory, or a symlink \
   `restore`   Restore working tree files \
   `rm`        Remove files from the working tree and from the index

#### examine the history and state (see also: `git help revisions`)
   `bisect`    Use binary search to find the commit that introduced a bug \
   `diff`      Show changes between commits, commit and working tree, etc \
   `grep`      Print lines matching a pattern \
   `log`       Show commit logs \
   `show`      Show various types of objects \
**<a name='status'>`status`**    [Show the working tree status](https://git-scm.com/docs/git-status)

#### grow, mark and tweak your common history
**<a name='branch'>`branch`**    [List, create, or delete branches](https://git-scm.com/docs/git-branch) \
**<a name='commit'>`commit`**    [Record changes to the repository](https://git-scm.com/docs/git-commit) \
**<a name='merge'>`merge`**     [Join two or more development histories together](https://git-scm.com/docs/git-merge) \
   `rebase`    Reapply commits on top of another base tip \
   `reset`     Reset current HEAD to the specified state \
   `switch`    Switch branches \
**<a name='tag'>`tag`**       [Create, list, delete or verify a tag object signed with GPG](https://git-scm.com/docs/git-tag)

#### collaborate (see also: `git help workflows`)
**<a name='fetch'>`fetch`**     [Download objects and refs from another repository](https://git-scm.com/docs/git-fetch) \
**<a name='pull'>`pull`**      [Fetch from and integrate with another repository or a local branch](https://git-scm.com/docs/git-pull) \
**<a name='push'>`push`**      [Update remote refs along with associated objects](https://git-scm.com/docs/git-push)

**<a name='help'>`git help -a and git help -g`** [list available subcommands](https://git-scm.com/docs/git-help) \
and some concept guides. See `git help <command>` or `git help <concept>` \
to read about a specific subcommand or concept. \
See `git help git` for an overview of the system.