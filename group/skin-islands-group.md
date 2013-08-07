---
---

## Группы

Некоторые скины, по сути, чуть настроенные алиасы к типам, группы — один из них.

Так как в островных стилях кнопки используется псевдоэлемент, нужно прокидывать соответствующие стили и на него, поэтому для групп, состоящих из кнопок и инпутов нужно использовать не `kind: group`, а `skin: group`.

У группы должен быть враппер:

    skin: group

Если элементы группы лежат на одном уровне, можно использовать CSS3-селекторы и применить `group-item`:

    skin: group-item

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
>
>     .group
>       skin: group
>
>     .group > .toggle-button
>       skin: group-item
> {:.styl}

В случае если кнопка или другой блок, которому нужно задать соответствующий скин, может лежать внутри, можно воспользоваться специальным скином:

    skin: nested-group-item '.toggler-view'

Параметром к нему передаётся селектор элемента, к которому нужно применять соответствующий скин:


> Радиогрупа на инпутах. Нужно таргетить не сами элементы, а внутренности.
>
> <p class="group">
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
> </p>
>
> Или маленькие псевдо-чекбоксы на инпутах:
>
> <p class="group">
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
> </p>
>
>     .group
>       skin: group
>
>     .group > .toggler
>       skin: nested-group-item '.toggler-view'
> {:.styl}


В случаях когда элементы группы лежат в контейнере в неверном порядке (скажем, при использовании `float` и в некоторых иных случаях), можно задать соответствующим элементам групп нужные скины раздельно:

    skin: group-start

    skin: group-middle

    skin: group-end
