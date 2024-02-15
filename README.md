# Отключение турбо-страниц из Яндекс Вебмастер

Скрипт для массового отключения турбо-страниц из Яндекс Вебмастер для поддоменов

## Настройка скрипта

1. Клонируйте репозиторий
2. Для выполнения скрипта на вашем компьютере должны быть установлены NodeJS и браузер Google Chrome
3. Выполните команду "npm install puppeteer"
4. В файле deleteTurboPages.js находится массив - в него нужно добавить список поддоменов, на которых нужно отключить турбо-страницы
5. Перед запуском скрипта в папке с файлом chrome.exe выполните команду "start chrome --remote-debugging-port=9223"
6. Запустите скрипт при помощи команды "node deleteTurbo"
7. В случае возникновения ошибки - перезагрузите компьютер и выполните команду из пункта 5
