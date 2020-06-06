# ToDo List

## О приложении

Приложение написано на JS без использоания фреймворков.  
В качестве системы хранения данных используется `localStorage` браузера.

## Структура localStorage

`localStorage` содержит массив `toDoList`

`toDoList[0]` - число, исходно устанавливаемое в 0, увеличивается инкрементально  
 используется для генерации `id` и `order` новых элементов.

`toDoList[1]`...`toDoList[n]` - объекты, хранящие состояние каждого элемента списка:  
```JavaScript
{
    id: number,
    order: number,
    color: 'red' | 'yellow '| 'green' | 'blue' | 'none',
    content: 'string up to 100 chars',
    checked: boolean,
    target: boolean
}
```

## Модули

### main.js

Центральный JS файл. Подключен в html.  
При запуске осуществляет инициализацию `localStorage`, навешивание event listener'ов на все элементы интерфейса, а также генерацию и добавление в html-разметку элементов списка в соответствии с сохраненными данными из массива `toDoList`, полученного из `localStorage`.

### localStorage.js

Модуль для работы с `localStorage`.
Предоставляет следующие функции:  
**initializeLocalStorage** - если в `localStorage` массив `toDoList` не существует, то он создается и инициализуется значение [0].  
**clearLocalStorage** - массив `toDoList` очищается, принудительно получая значение [0].
**putToLocalStorage** - массив, переданный в качестве аргумента этой функции помещается в  `localStorage` с ключом `toDoList`.
**getFromLocalStorage** - возвращает массив, полученный из `localStorage` из ключа `toDoList`.

### createElement.js

***todo***

### addEventListeners.js

***todo***

https://paulradzkov.com/2014/markdown_cheatsheet/