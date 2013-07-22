---
---

## Стрелка

Фирменная стрелка Яндекса, по умолчанию может использоваться для названия сервиса:

    skin: arrow

> <div>
>   <div class="service-arrow">
>       Фотки
>   </div>
> </div>
>
>     .service-arrow
>       kind: block inline
>       skin: arrow
> {:.styl}

Если же нужна поисковая стрелка, нужно использовать параметр `search` для правильных отступов (+ нужно поправить выравнивание поля внутри):

    skin: arrow search

> <div>
>   <div class="search-arrow">
>     <label class="field">
>       <a class="field-label" href="#x">
>           Маркет
>       </a>
>       <span class="field-content">
>           <input class="input-controller" type="text" value="Окна">
>           <span class="input-view">&nbsp;</span>
>       </span>
>     </label>
>     <button class="button" type="button">
>         <span class="button-content">Найти</span>
>     </button>
>   </div>
> </div>
>
>     .search-arrow
>       kind: block inline
>       skin: arrow search
>
>       & > .field
>         vertical-align: top
> {:.styl}

По умолчанию хвостик делается с помощью всевдоэлемента, если же нужно его отделить, можно использовать параметр `no-elements` на «теле» и `tail` на хвостике.

    skin: arrow no-elements

    skin: arrow tail

Кроме того, можно настраивать как цвет, так и высоту стрелки, передавая параметры соответствующих типов:

> <div>
>   <div class="arrow-body">
>     <div class="arrow-tail">&nbsp;</div>
>       Компания
>   </div>
> </div>
>
>     .arrow-body
>       kind: block inline
>       skin: arrow no-elements red 11*rem
>
>     .arrow-tail
>       skin: arrow tail red 11*rem
> {:.styl}
