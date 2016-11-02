---
---

## Стрелка

Фирменная стрелка Яндекса, по умолчанию может использоваться для названия сервиса:

    skin: islands-arrow

> <div>
>     <div class="service-arrow">
>         Фотки
>     </div>
> </div>
>
> <div class="example:service-arrow"></div>

Если необходимо сделать стрелку-ссылку, это легко сделать, используя [скин ссылки](#skin-islands-link):

> <div>
>     <a class="link-arrow" href="#x">
>         Фотки
>     </a>
> </div>
>
> <div class="example:link-arrow"></div> 

Если же нужна поисковая стрелка, нужно использовать параметр `search` для правильных отступов (+ нужно поправить выравнивание поля внутри):

    skin: islands-arrow search

> <div>
>     <div class="search-arrow">
>         <label class="field">
>             <a class="field-label" href="#x">
>                 Маркет
>             </a>
>             <span class="field-content">
>                 <input class="input-controller" type="text" value="Окна">
>                 <span class="input-view">&nbsp;</span>
>             </span>
>         </label>
>         <button class="button" type="button">
>             <span class="button-content">Найти</span>
>         </button>
>     </div>
> </div>
>
> <div class="example:search-arrow"></div>

Такая стрелка не тянется, так как там внутри просто обычные инлайн-блоки, ну а если надо сделать её тянущейся, нужно использовать `kind: shrink` с дополнительным враппером:

[Пример](tests/search.html)

По умолчанию хвостик делается с помощью псевдоэлемента, если же нужно его отделить, можно обнулить соответствующий параметр на «теле» и вызвать `tail` на хвостике (и в этом случае хвостик будет отображаться и в IE).

    skin: islands-arrow (__helper '')

    skin: islands-arrow tail

Либо можно использовать специальный параметр-элемент, создав хвостик из вызова скина:

    skin: islands-arrow red 110px (__helper '& > .arrow-tail')

Кроме того, можно настраивать как цвет, так и высоту стрелки, передавая параметры соответствующих типов:

> <div>
>     <div class="custom-arrow">
>         <div class="arrow-tail"></div>
>         Компания
>     </div>
> </div>
>
> <div class="example:custom-arrow"></div>
