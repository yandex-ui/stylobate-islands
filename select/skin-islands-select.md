---
---

## Селект

    skin: select

Если хочется сделать CSS-only селект, это возможно, однако код такого селекта будет не особо оптимальным: приходится городить много хардкода для правильных отступов в Опере и ФФ.

HTML селекта это, по сути, микс с кнопкой:

> <span class="button select-wrap">
>     <select class="select">
>         <option>Select</option>
>         <option>Bar</option>
>         <option>Baz long long</option>
>     </select>
>     <span class="select-focus"></span>
> </span>
>
>     .select
>       kind: block
>       skin: select
>
>     .select-wrap
>       skin: select-wrap
>
>     .select-focus
>       skin: select_focus
> {:.styl}

И маленький селект (для маленькой кнопки)

    skin: select small

> <span class="small-button select-wrap">
>     <select class="small-select">
>         <option>Select</option>
>         <option>Bar</option>
>         <option>Baz long long</option>
>     </select>
>     <span class="select-focus"></span>
> </span>
>
>     .small-select
>       kind: block
>       skin: select small
> {:.styl}

С изменённой шириной

> <span class="button select-wrap" style="width: 50%">
>     <select class="select">
>         <option>Select</option>
>         <option>Bar</option>
>         <option>Baz long long</option>
>     </select>
>     <span class="select-focus"></span>
> </span>

Но, на самом деле, всё это дикий хардкод, будет работать только для двух этих конкретных размеров, если получится сделать селекты полностью на JS, на основе обычных кнопок и попапов, это будет предпочтительнее.
