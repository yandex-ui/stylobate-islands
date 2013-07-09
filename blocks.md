---

layout: default

page_type: blocks

---

# Дисклеймер {#disclaymer}

**Важно:** всё это дело находится в активной разработке, всё может поменяться, поломаться, исправиться.

Это только вершина айсберга, пример вёрстки островного дизайна на основе [новой концепции](index.html). Другие реализации: [дизайнерский прототип](http://islands.yandex-team.ru/pages/blocks.xml), [островные библиотеки](http://clubs.at.yandex-team.ru/lego-dev/replies.xml?item_no=4095).


# Текст {#text}

## Основной текст

>     p
>        skin: para reset
>
> <p>Arial 15px, высота строки — 22px</p>

>     p.secondary
>       skin: para2
>
> <p class="secondary">Arial 13px, высота строки — 18px</p>

## Заголовки

>     h1
>       skin: h1 reset
>
> <h1>Заголовок</h1>

>     h2
>       skin: h2 reset
>
> <h2>Заголовок</h2>

>     h3
>       skin: h3 reset
>
> <h3>Заголовок</h3>

>     h4
>       skin: h4 reset
>
> <h4>Заголовок</h4>

>     h5
>       skin: h5 reset
>
> <h5>Заголовок</h5>

>     h6
>       skin: h6 reset
>
> <h6>Заголовок</h6>


# Острова {#isle}

Наш герой, белый блок с тенью. Остров можно приземлить, а можно оставить парящим (модификатор `fly`).

>     .isle
>       kind: block
>       skin: isle
>
> <div class="isle" style="width: 200px; height: 100px;"></div>

Летающий блок создан для модальных окон, выпадающих списков и прочих элементов верхнего слоя, в остальных случаях следует обходиться обычным островом.

>     .flying-isle
>       kind: block
>       skin: isle fly
>
> <div class="flying-isle" style="width: 200px; height: 100px;"></div>


# Ссылки {#link}

>     .link
>       skin: link
>
> <a class="link" href="#x">In CTR we trust</a>

И внешняя ссылка

>     .outer-link
>       skin: link outer
>
> <a class="outer-link" href="#x">We don't care</a>

<!-- И потом ещё будет с иконкой -->


# Кнопки {#button}

>     .button
>       kind: button
>       skin: button
>
> <a class="button" href="#x">
>     <span class="button-content">Кнопка ссылкой</span>
> </a>

>     .small-button
>       kind: button
>       skin: button small
>
> <div>
>     <button class="small-button" type="button">
>         <span class="button-content">Маленькая кнопка кнопкой</span>
>     </button>
> </div>

>     .action-button
>       kind: button
>       skin: action-button
>
> <a class="action-button" href="#x">
>   <span class="button-content">Кнопка ссылкой</span>
> </a>

>     .small-action-button
>       kind: button
>       skin: action-button small
>
> <div>
>     <button class="small-action-button" type="button">
>         <span class="button-content">Маленькая кнопка кнопкой</span>
>     </button>
> </div>

>     .pseudo-button
>       kind: button
>       skin: pseudo-button
>
> <a class="pseudo-button" href="#x">Псевдокнопка ссылкой</a>

>     .small-pseudo-button
>       kind: button
>       skin: pseudo-button small
>
> <div>
>     <button class="small-pseudo-button" type="button">Маленькая псевдокнопка кнопкой</button>
> </div>

>     .fly-button
>       kind: button
>       skin: button fly
>
> <div>
>     <button class="fly-button" type="button">
>         <span class="button-content">Летающая кнопка</span>
>     </button>
> </div>

>     .is-disabled
>
> <div>
>     <a class="button is-disabled">
>         <span class="button-content">Кнопка ссылкой</span>
>     </a>
>
>     <button class="small-action-button is-disabled" type="button" disabled="disabled">
>         <span class="button-content">Маленькая кнопка кнопкой</span>
>     </button>
>
>     <a class="pseudo-button is-disabled">Псевдокнопка ссылкой</a>
> </div>

Ещё раз: не нужно в html выплёвывать все модификации. Если нужна маленькая летающая кнопка, то, конечно, можно наплодить классов вида `small-fly-action-button`, но на самом деле стоит к каждому элементу интерфейса подходить индивидуальнее, и для подобной кнопки прописать всё соответствующим образом в CSS:

>     .super-button
>       kind: button
>       skin: action-button fly small
>
> <div>
>     <button class="super-button" type="button">
>         <span class="button-content">Супер кнопка</span>
>     </button>
> </div>

## Кнопки-переключатели

Поведение нажатой кнопки можно сделать, например, через микс:

>     .toggle-button
>       &.is-checked,
>       &.is-checked:hover
>         skin: button_checked
>
> <div>
>     <button class="button toggle-button" type="button">
>         <span class="button-content">Раз</span>
>     </button>
>     <button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Два</span>
>     </button>
>     <button class="button toggle-button is-checked" type="button">
>         <span class="button-content">Три</span>
>     </button>
> </div>

Причём, работать оно будет для любых типов кнопок (не всегда идеально, конечно)

> <div>
>     <button class="super-button toggle-button is-checked" type="button">
>         <span class="button-content">Супер</span>
>     </button>
>     <button class="button toggle-button is-checked is-disabled" type="button" disabled="disabled">
>         <span class="button-content">Не отключишь</span>
>     </button>
>     <button class="pseudo-button toggle-button" type="button">
>         <span class="button-content">Псевдо</span>
>     </button>
> </div>

Или можно это сделать без js, используя реальные инпуты + микс с любой кнопкой

>     .toggler
>       kind: block inline
>
>       &-controller
>         kind: hidden visually
>
>       &-controller:checked + &-view
>         skin: button_checked
>
>       &-controller:focus + &-view
>         skin: button_focus
>
> <label class="toggler">
>     <input class="toggler-controller" type="checkbox">
>     <span class="button toggler-view">
>         <span class="button-content">Раз</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="checkbox" checked="checked">
>     <span class="button toggler-view">
>         <span class="button-content">Два</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="checkbox" checked="checked">
>     <span class="button toggler-view">
>         <span class="button-content">Три</span>
>     </span>
> </label>

Или не чекбоксы, а псевдо-радиокнопки

> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1" checked="checked">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Раз</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Два</span>
>     </span>
> </label>
> <label class="toggler">
>     <input class="toggler-controller" type="radio" name="toggler1">
>     <span class="pseudo-button toggler-view">
>         <span class="button-content">Три</span>
>     </span>
> </label>


# Модальные окна {#popup}

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


# Группы {#groups}

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


# Чекбоксы {#checkboxes}

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
>       width: gap_m
>       height: gap_m
>
>     .small-radio
>       kind: icon
>       skin: radio sizeless
>
>       width: gap_m - 0.2*rem
>       height: gap_m - 0.2*rem
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
