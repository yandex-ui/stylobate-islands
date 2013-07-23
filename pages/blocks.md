---

layout: default

page_type: blocks

permalink: /blocks/

---

# Блоки

**Важно:** Это уже устаревшая документация, так как основной смысл этой документации — скины, то документация будет перенесена на [соответствующую страницу](../skins/). Эта же страница постепенно растеряет всё, что на ней есть, и станет документацией по изготовлению блоков на основе скинов.

## Модальные окна {#popup}

> <div class="modal" style="width: 300px;">
>     <div class="modal-content text">
>         <h3>Подарок</h3>
>         <p>Большое мороженное с орехами и карамелью в вафельном рожке</p>
>     </div>
>     <div class="modal-close"></div>
> </div>

> <div>
>     <button class="small-button" type="button" data-modal="Popup1">
>         <span class="button-content">Что там?</span>
>     </button>
> </div>

> <div>
>     <button class="small-button" type="button" data-modal="Popup2">
>         <span class="button-content">А теперь что?</span>
>     </button>
> </div>

<div class="modal-wrap is-hidden" id="Popup1">
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Подарок</h3>
            <p>Большое мороженное с орехами и карамелью в вафельном рожке</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>
<div class="modal-wrap is-hidden" id="Popup2">
    <div class="modal-paranja"></div>
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Вам письмо:</h3>
            <p>Дорогой друг, спешу тебе напомнить, что ты занимал у меня много денег и до сих пор не отдал. Даю тебе еще неделю, твои дети у меня.</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>


## Группы {#groups}

JS-Чекбоксы в группе. Из-за особенностей вёрстки нужно таргетить не только сами элементы, но и псевдоэлементы внутри, плюс нужно визуально подправлять стыки (возможно, стоит отнести к кнопкам?)

>     .group
>       kind: group
>
>     .group > .toggle-button
>       kind: group-item '&,&:before'
>
>     .group > .toggle-button:not(:last-child):before
>       right: 0
>
> <div class="group">
>     <button class="button toggle-button" type="button">
>         <span class="button-content">Раз</span>
>     </button
>     ><button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Два</span>
>     </button
>     ><button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Три</span>
>     </button>
> </div>

Радиогрупа на инпутах. Нужно таргетить не сами элементы, а внутренности.

>     .group
>       kind: group
>
>     .group > .toggler
>       kind: group-item '& > .toggler-view, & > .toggler-view:before'
>
>     .group > .toggler:not(:last-child) > .toggler-view:before
>       right: 0
>
> <div class="group">
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="toggler2" checked="checked">
>         <span class="button toggler-view">
>             <span class="button-content">Раз</span>
>         </span>
>     </label
>     ><label class="toggler">
>         <input class="toggler-controller" type="radio" name="toggler2">
>         <span class="button toggler-view">
>             <span class="button-content">Два</span>
>         </span>
>     </label
>     ><label class="toggler">
>         <input class="toggler-controller" type="radio" name="toggler2">
>         <span class="button toggler-view">
>             <span class="button-content">Три</span>
>         </span>
>     </label>
> </div>

Маленькие псевдо-чекбоксы на инпутах

> <div class="group">
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="small-pseudo-button toggler-view">
>             <span class="button-content">Раз</span>
>         </span>
>     </label
>     ><label class="toggler">
>         <input class="toggler-controller" type="checkbox">
>         <span class="small-pseudo-button toggler-view">
>             <span class="button-content">Два</span>
>         </span>
>     </label
>     ><label class="toggler">
>         <input class="toggler-controller" type="checkbox">
>         <span class="small-pseudo-button toggler-view">
>             <span class="button-content">Три</span>
>         </span>
>     </label>
> </div>


## Чекбоксы {#checkboxes}

И чекбоксы, и радиокнопки по умолчанию масштабируются под размер шрифта

>     .checkbox
>       kind: icon
>       skin: checkbox
>
> <div>
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Чекбокс
>     </label>
> </div>
> <div class="secondary">
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox">
>         <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Чекбокс
>     </label>
> </div>

>     .radio
>       kind: icon
>       skin: radio
>
> <div>
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="radio1" checked="checked">
>         <span class="radio toggler-view"><span class="radio-icon"> </span></span
>         >Радиобатон
>     </label>
> </div>
> <div class="secondary">
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="radio1">
>         <span class="radio toggler-view"><span class="radio-icon"> </span></span
>         >Радиобатон
>     </label>
> </div>

Если же надо сделать чекбокс определённого (не зависимого от размера шрифта) размера, вне контекста, можно сделать так:

>     .normal-checkbox
>       kind: icon
>       skin: checkbox sizeless
>
>       width: $m
>       height: $m
>
>     .small-radio
>       kind: icon
>       skin: radio sizeless
>
>       width: $m - 0.2*rem
>       height: $m - 0.2*rem
>
> <h2>
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="normal-checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Обычный чекбокс
>     </label>
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="radio2">
>         <span class="small-radio toggler-view"><span class="radio-icon"> </span></span
>         >маленький радиобатон
>     </label>
> </h2>
