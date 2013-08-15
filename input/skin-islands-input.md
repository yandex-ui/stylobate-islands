---
---

## Инпуты

Простейший инпут можно сделать на одном элементе:

    skin: input

> <input class="input" type="text" value="Буквы" />
>
>     .input
>       kind: input
>       skin: input
> {:.styl}

Он может быть маленьким — с параметром `small`

    skin: input small

> <input class="small-input" type="text" value="Буквы" />
>
>     .small-input
>       kind: input
>       skin: input small
> {:.styl}

Текстария — визуально тот же инпут, так что можно использовать те же скины и классы:

> <textarea class="small-input" rows="8" cols="20">
> Some text inside
> </textarea>


### Сложные инпуты {#fields}

Если же нужно что-то сложнее (нужно вставлять сущности внутрь, типа крестика и подобных штук) лучше использовать «составной» инпут.

Обычный скин инпута, на самом деле, составной: это объединение двух подскинов — `skin-islands-input-box` и `skin-islands-input-view`. Ну и ещё есть один подскин — для фокуса, чтобы можно было его перенести на нужный блок — `skin-islands-input_focus`.

    skin: input-box

    skin: input-view no-focus

    skin: input-focus

В минимальном обрамлении он выглядит аналогично обычному инпуту, но html-структура у него должна быть посложнее:

> <label class="field">
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
>     .field
>       kind: field 0.5*$s $s
>       skin: input-box
>
>     .input-controller
>       kind: input
>       z-index: 9
>       width: 100%
>       height: 100%
>
>     .input-view
>       kind: fill -1px
>       skin: input-view no-focus
>
>       .input-controller:not(.is-disabled):focus + &
>         skin: input_focus
> {:.styl}

Но если нужно будет добавить любые контролы внутрь, это становится очень легко сделать:

> <label class="field">
>     <span class="field-left">
>         Prefix:
>     </span>
>     <span class="field-right">
>         …postfix
>     </span>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>

Конечно же, и у сложного инпута есть параметр `small`:

> <label class="small-field">
>     <span class="field-left">
>         Prefix:
>     </span>
>     <span class="field-right">
>         …postfix
>     </span>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
>     .small-field
>       kind: field no-elements
>       skin: input-box small
> {:.styl}

Такой инпут легко растягивать на всю ширину:

> <div>
>     <label class="field" style="width:100%">
>         <span class="field-left">
>             Prefix:
>         </span>
>         <span class="field-right">
>             …postfix
>         </span>
>         <span class="field-content">
>             <input class="input-controller" type="text" value="Буквы" />
>             <span class="input-view"> </span>
>         </span>
>     </label>
> </div>

#### Группировка {#field-group}

Для такого инпута хорошо работает группировка с кнопками:

> <div class="group">
>     <button class="button group-item" type="button">
>         <span class="button-content">–</span>
>     </button
>     ><input class="input group-item" type="text" style="width:100px"
>     /><button class="button group-item" type="button">
>         <span class="button-content">⟷</span>
>     </button
>     ><input class="input group-item" type="text" style="width:100px"
>     /><button class="button group-item" type="button">
>         <span class="button-content">+</span>
>     </button>
> </div>

#### Имя сервиса внутри инпута {#field-label}

Специально для использования внутри инпута есть скин для «меток», обычно они используются для имени сервиса внутри инпута:

    skin: input-label

> <label class="field">
>     <a class="field-label" href="#x">
>         Маркет
>     </a>
>     <span class="field-content">
>         <input class="input-controller" type="text" value="Буквы" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
>     .field-label
>       kind: field-left 0.5*$s $s
>       skin: input-label
> {:.styl}

#### Сложная текстария {#complex-textarea}

Если использовать сложный инпут + текстарию, то довольно просто сделать автоувеличивающуюся по контенту текстарию с дополнительными внутренними элементами вроде иконки очистки:

> <label class="field">
>     <span class="field-reset"></span>
>     <span class="field-content">
>         <textarea class="input-controller js-autosize" cols="20" rows="8" />
>         <span class="input-view"> </span>
>     </span>
> </label>
>
>     .field-reset
>       kind: field-right 0.5*$s
>       skin: icon remove with-hover
>       margin-right: $s * -1
> {:.styl}