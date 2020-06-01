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
    color: 'string',
    content: 'string',
    checked: boolean,
    target: boolean
}
```

## Модули

### main.js

***todo***

### localStorage.js

***todo***

### createElement.js

***todo***

### addEventListeners.js

***todo***

https://paulradzkov.com/2014/markdown_cheatsheet/