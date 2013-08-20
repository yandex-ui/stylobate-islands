---
---

## Кнопки

Обычная кнопка:

    skin: button

> <a class="button" href="#x">
>     <span class="button-content">Кнопка ссылкой</span>
> </a>
>
>     .button
>       kind: button
>       skin: button
> {:.styl}

### Параметры кнопки

На данный момент скин кнопки переусложнён, в дальнейшем он будет упрощён, но основы API останутся теми же.

Почти все параметры можно комбинировать, как обычно, порядок параметров в коде не важен.

##### Размеры

У кнопки есть два основных размера: стандартный и `small`, который применяется довольно просто:

    skin: button small

> <div>
>     <button class="small-button" type="button">
>         <span class="button-content">Маленькая кнопка кнопкой</span>
>     </button>
> </div>
>
>     .small-button
>       kind: button
>       skin: button small
> {:.styl}

Кроме того, есть пара «служебных» размеров: адаптивный — `adaptive`, и отсутствие заданных размеров — `sizeless`:

    skin: button adaptive

    skin: button sizeless

Адаптивный размер используется для чекбоксов и радиокнопок — он зависит от размера шрифта. Безразмерный параметр можно использовать, если необходимо сверстать кнопку с определёнными размерами, дабы не возиться с переопределениями.

##### «Летающая» кнопка

Если кнопка находится на каком-то абстрактном фоне, можно сделать её летающий при помоши параметра `fly`:

    skin: button fly

При нажатии такая кнопка, в отличие от обычной, «приземляется», а не вдавливается.

> <div>
>     <button class="fly-button" type="button">
>         <span class="button-content">Летающая кнопка</span>
>     </button>
> </div>
>
>     .fly-button
>       kind: button
>       skin: button fly
> {:.styl}

##### «Отключённая кнопка»

Делается добавлением стандартного класса `.is-disabled`:

> <div>
>     <a class="button is-disabled">
>         <span class="button-content">Кнопка ссылкой</span>
>     </a>
> </div>

##### Кнопка на одном элементе

Как видно из примеров выше, у кнопки должен быть внутренний элемент, например, `.button-content` — это нужно для правильной вёрстки «нажимания» кнопки. Но есть и альтернативный вариан: использование параметра `one-element`.

      skin: button one-element

Такую кнопку рекомендуется делать только если нет возможности в коде добавить дополнительный элемент, так как к ней гораздо сложнее добавлять какие-то сложные внутренности (даже добавление простой иконки может быть переусложнено).

> <a class="simple-button" href="#x">Кнопка одним элементом</a>
>
>     .simple-button
>       kind: button
>       skin: button one-element
> {:.styl}

##### Отключение активности

По умолчанию кнопка «зажимается» по маусдауну. Но если нужно убрать подобное поведение, то можно использовать параметр `no-active` (это используется, например, для чекбоксов):

    skin: button no-active

Если же после отключения активного состояния захочется его использовать вручную — при навешивании какого-либо класса, есть скин-модификатор `skin-islands-button_pressed`:

    skin: button_pressed

### Кнопка-действие

Это, по сути, второй скин кнопки, в коде сейчас обе кнопки наследутся от одного общего миксина (но это не важно).

    skin: action-button

Эта кнопка как бы говорит: «Нажми меня!»

> <a class="action-button" href="#x">
>   <span class="button-content">Кнопка ссылкой</span>
> </a>
>
>     .action-button
>       kind: button
>       skin: action-button
> {:.styl}

Конечно же, можно использовать всё те же модификаторы, что есть и у обычной кнопки:

> <div>
>     <button class="small-action-button" type="button">
>         <span class="button-content">Маленькая кнопка кнопкой</span>
>     </button>
> </div>
>
>     .small-action-button
>       kind: button
>       skin: action-button small
> {:.styl}

### Комбинирование модификаций

Ещё раз: не нужно в html выплёвывать все модификации. Если нужна маленькая летающая кнопка, то, конечно, можно наплодить классов вида `small-fly-action-button`, но, на самом деле, стоит к каждому элементу интерфейса подходить индивидуальнее, и для подобной кнопки прописать всё соответствующим образом в CSS:

> <div>
>     <button class="super-button" type="button">
>         <span class="button-content">Супер кнопка</span>
>     </button>
> </div>
>
>     .super-button
>       kind: button
>       skin: action-button fly small
> {:.styl}

### Кнопка добавления файла

Для кнопки добавления файла нужно использовать `kind-file-input` с любой нужной кнопкой:

> <div>
>     <label class="file-input">
>         <input class="file-input-controller" type="file" />
>         <span class="button">
>             <span class="button-content">Прикрепить файлы…</span>
>         </span>
>     </label>
> </div>
>
>     .file-input
>       kind: file-input 6px (-input '&-controller')
> {:.styl}

Тут видно, что мы задаём дополнительный отступ в `6px` на родителе — для того, чтобы у файлового инпута не обрезалось состояние фокуса. Побочный эффект: кликабельная область чуть увеличивается, но это не страшно.

### Внедряемая кнопка добавления файла

И второй вариант, для него нужно больше блоков, зато его можно применить и внутри уже имеющихся кнопок.

> <div>
>     <label class="button">
>         <span class="file-intruder">
>             <span class="file-intruder-inner">
>                 <input class="file-intruder-input" type="file" />
>                 <span class="file-intruder-focus"> </span>
>             </span>
>         </span>
>         <span class="button-content">Прикрепить файлы…</span>
>     </label>
> </div>
>
>     .file-intruder
>       kind: file-intruder (-inner '&-inner') (-input '&-input')
>
>     .file-intruder-input:focus + .file-intruder-focus
>       kind: fill
>       skin-islands-button_focus_style()
> {:.styl}

Тут нужно заметить, что требуются дополнительные стили для фокуса — возможно в будущем это как-то упростится, но пока только так.

Плюсом этого решения, помимо внедряемости — отсутствие `overflow: hidden` на применяемом контексте. В случае с кнопкой это позволяет иметь и фокус, и правильную кликабельную область.