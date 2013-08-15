---
---

## Чекбоксы

    skin: checkbox


И чекбоксы, и радиокнопки по умолчанию масштабируются под размер шрифта.

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
>
>     .checkbox
>       kind: icon
>       skin: checkbox
> {:.styl}

Если же надо сделать чекбокс определённого (не зависимого от размера шрифта) размера, вне контекста, можно сделать так:

> <h2>
>     <label class="toggler">
>         <input class="toggler-controller" type="checkbox" checked="checked">
>         <span class="normal-checkbox toggler-view"><span class="checkbox-icon"> </span></span
>         >Обычный чекбокс
>     </label><br/>
>     <label class="toggler">
>         <input class="toggler-controller" type="radio" name="radio2">
>         <span class="small-radio toggler-view"><span class="radio-icon"> </span></span
>         >маленький радиобатон
>     </label>
> </h2>
>
>     .normal-checkbox
>       kind: icon (size $m $m)
>       skin: checkbox sizeless
>
>     .small-radio
>       kind: icon (size ($m - 0.2*rem) ($m - 0.2*rem))
>       skin: radio sizeless
> {:.styl}
