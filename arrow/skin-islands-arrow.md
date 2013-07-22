---
---

## Стрелка

С названием сервиса

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


С поисковым полем и кнопкой

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
> {:.styl}

С дополнительным элементом для хвостика

> <div>
>   <div class="arrow-body">
>     <div class="arrow-tail">&nbsp;</div>
>       Компания
>   </div>
> </div>
>
>     .arrow-body
>       kind: block inline
>       skin: arrow no-elements red
>
>     .arrow-tail
>       skin: arrow tail red
> {:.styl}
