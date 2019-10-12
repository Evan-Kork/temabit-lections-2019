# Basisc GIT Commands

### Базовые операции с репозиторием

```bash
git init
```
Инициализировать репозиторий

```bash
git clone URL
```
Клонировать репозиторий с сервера

### Статус
```bash
git status
```
Просмотр статуса файлов. Показать какие файлы еще не были добавлены репозиторий, а какие были изменены

### Добавляем и исключаем файлы
```bash
git add file.js
```
Добавить файл file.js

```bash
git add .
```
Добавляем все файлы

```bash
git reset file.js
```
Отменить изменения файла file.js

```bash
git reset .
```
Резет для всех файлов

### Изменения
```bash
git diff
```
Смотрим изменения

```bash
git diff file.js
```
Смотрим изменения в file.js

### Делаем коммиты
```bash
git commit -m 'commit message'
```
Делаем коммит

```bash
git commit -a -m 'commit message'
```
Делаем коммит, сразу добавив все файлы

```bash
git commit --amend -m 'new commit message'
```
Перезаписываем последний коммит

```bash
git reset --soft HEAD^
```
Ресет последнего коммита

```bash
git reset --hard d8578edf8458ce06fbc5bb76a58c5ca4a58c5ca4
```
Откатиться к конкретному коммиту (хэш смотрим в «git log»):

### Управляем ветками
```bash
git branch
```
Смотрим локальные ветки

```bash
git branch -a
```
Смотрим локальные и удаленные ветки

```bash
git checkout master
```
Переключаемся на мастер

```bash
git checkout -b new_branch
```
Создаем новую ветку и переключаемся на нее

```bash
git checkout -b new_branch origin/new_branch
```
Создаем локальную ветку как копию с удаленного сервера

```bash
git branch -d new_branch
```
Удаляем локальную ветку (пустую или влитую в мастер)

```bash
git branch -D new branch
```
Просто удаляем локальную ветку

```bash
git push origin :new_branch
```
Удаляем ветку с сервера

```bash 
git pull --rebase origin master
```
Подтягиваем изменения ветки мастер

### Подтягиваем изменения с сервера

```bash 
git fetch
```
Подтягиваем все изменения с сервера, не вливая их

```bash 
git push origin new_branch
```
Пушим ветку

```bash 
git push -f origin new_branch
```
Пушим ветку с перезаписью истории коммитов (только когда хорошо понимаете, что делаете)





