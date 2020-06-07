# ToDo List

## О приложении

Приложение написано на JS без использоания фреймворков.  
В качестве системы хранения данных используется `localStorage` браузера.

## Структура localStorage

`localStorage` содержит массив `toDoList`.

`toDoList[0]` - счетчик. Число, исходно устанавливаемое в 0, увеличивается инкрементально, используется для генерации `id` и `order` новых элементов.

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

***

### localStorage.js

Модуль для работы с `localStorage`. Предоставляет следующие функции:

**initializeLocalStorage()** - если в `localStorage` массив `toDoList` не существует, то он создается и инициализуется значением [0].

**clearLocalStorage()** - массив `toDoList` очищается, принудительно получая значение [0].

**putToLocalStorage(arr)** - массив, переданный в качестве аргумента этой функции помещается в  `localStorage` с ключом `toDoList`.

**getFromLocalStorage()** - возвращает массив, полученный из `localStorage` из ключа `toDoList`.

***

### createItem.js

Модуль для создание в DOM элемента списка.

На вход получает объект с параметрами элемента:  
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

На основании полученных параметров создает в html внутри тега `div#list` следующий элемент:  
```html
<div id="item-N" class="item" style="order: N;">
    <div id="check_area-N" class="check-area check-area--COLOR">
        <div id="check_target-N" class="check-target"></div>
        <div id="check_box-N" class="check-box"></div>
    </div>

    <textarea id="text_area-N" class="text-area" spellcheck="false" maxlength="100"></textarea>

    <div id="menu_btn-N" class="menu-btn"></div>

    <div id="context_menu-N" class="context-menu context-menu--hidden">
        <div id="context_btn_del-N" class="context-btn context-btn--del"></div>
        <div id="context_btn_target-N" class="context-btn context-btn--target"></div>
        <div id="context_btn_down-N" class="context-btn context-btn--down"></div>
        <div id="context_btn_up-N" class="context-btn context-btn--up"></div>
        <div id="context_btn_color-N" class="context-btn context-btn--color"></div>
    </div>

    <div id="color_menu-N" class="color-menu color-menu--hidden">
        <div id="color_btn_red-N" class="color-btn color-btn--red"></div>
        <div id="color_btn_yellow-N" class="color-btn color-btn--yellow"></div>
        <div id="color_btn_green-N" class="color-btn color-btn--green"></div>
        <div id="color_btn_none-N" class="color-btn color-btn--blue"></div>
    </div>
</div>
```

***

### addEventListeners.js

***todo***

***

https://paulradzkov.com/2014/markdown_cheatsheet/