# temabit-lections-2019
git stdz-1 Githab command
=====================
### Работа с локальным репозиторием
* git init         - создание подкаталога .git, инициализация репозитория.
* git clone remote - копирование репозитория.
* git status       - проверка состояния локального репозитория
* git add          - добавить индексацию файлов
    1. .           - папки и файлы на одном уровне и глубже
    2. '*'         - все папки и файлы на всех уровнях
* git commit
    1. -m 'message' - фиксируем файлы локально
    2. --amend -m   - изменить последний commit
* git push 
    1. -u origin master             - пуш в удаленный origin в ветку master
    2. --set-upstream origin master - устанавливает удаленную ветвь по умолчанию
* git pull                  - стягиваем последние изменения в репозиторий
* git fetch origin          - оновлевает информацию о последних изменениях
    1. --all --prune        - полностью обновляет информацию о репозитории
* git merge branch          - слияния ветки
    1. --abort              - отмена слияния
* git stash                 - скрыть cimmit
    1. list                 - список скрытых commit
    2. apply                - восстановить крайний stash
    3. apply @{%h}          - восстановить stash по %h
    4. pop @{%h}            - восстановить stash по %h и удалить stash

### Информация о config и log
* git config       
    1. --global user.name  - глобально указываем имя юзера
    2. --global user.email - глобально указываем email.user
    3. --list              - вывод настроек config
* git log
    1. --pretty=oneline:                      - вывод в одну строку
    2. --pretty=format:"%h - %s | [%ad][%an]" - форматированный вывод
* git remote 
    1. show origin - информация про удаленный репозиторий
    2. -v          - сокращенная запись
* git tag          - просмотр имеющихся меток
    1. -l 'v1.4.2.*'               - выборка (*)
    2. -a v1.4 -m 'my version 1.4' - создание метки с сообщением
    3. show v1.4                   - просмотр вместе с commit
    4. git push origin --tags      - push меток на remote

### Работа с ветками
* git checkout 'name_branch' - переключиться на ветку name_branch
    1. -B 'name_branch'      - создание ветки и переключиться на ветку name_branch
    2. app/file.js           - добавить файл
* git branch                 - список доступных веток
    1. 'name-branch'         - создание ветки
    2. -D                    - удалить ветку (полное удаление)
* git reset                  - откат изменений
    1. @~                    - преведущий commit
    2. %h                    - хеш commit для перехода
    3. --hard                - полная замена
* git reflog --hard branch   - вывод последних действий
* git cherry-pick %h         - копирует commit