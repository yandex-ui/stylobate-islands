---
---

## Юзерпик

Стандартный круглый (в нормальных браузерах) юзерпик.

    skin: userpic

Картинка задаётся через инлайновый стиль `style="background-image:url('foo.png')"`.

Для раскладки исопользуется тип `icon` с нужным размером, например, `(size 42px)`

> <div class="userpic" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')"></div>
>
>     .userpic
>       kind: icon (size 42px) 
>       skin: userpic
> {:.styl}

Можно применять и к ссылкам, есть дополнительный скин-модификатор для ховера, его можно применить через соответствующий параметр:

    skin: userpic_ (_hover '&:hover')

> <a class="userpic" href="#x" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')"></a>
>
>     .userpic:link,
>     .userpic:visited
>       skin: userpic_ (_hover '&:hover')
> {:.styl}

Ну и пример «из шапки» — с юзернеймом и иконкой нотификации

> <div>
>     <a class="user" href="#x">
>         <span class="user-pic" style="background-image: url('http://im3-tub-ru.yandex.net/i?id=37564715-37-72.gif')">
>             <span class="icon-notification">7</span>
>         </span>
>         <span class="user-name">Inky</span>
>     </a>
> </div>
>
>     .user
>       kind: block inline, centering
>       skin: link #000
>     
>       &-pic
>         kind: icon (size 42px), centering-item
>         skin: userpic (_hover '.user:hover > &')
>     
>         & > .icon-notification
>           position: absolute
>           top: -1px
>           right: -4px
>     
>       &-name
>         kind: centering-item
>         margin-left: $xs
> {:.styl}
