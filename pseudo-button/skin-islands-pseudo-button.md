---
---

## Псевдо-кнопка

    skin: pseudo-button

В отличие от [обычной кнопки](#skin-islands-button), псевдокнопка не имеет «активного» состояния и следующей из него необходимости иметь внутренний элемент, так что псевдокнопку можно сделать и на одном элементе:

> <a class="pseudo-button" href="#x">Псевдокнопка ссылкой</a>
>
>     .pseudo-button
>       kind: button
>       skin: pseudo-button
> {:.styl}

Аналогично обычной кнопке, псевдо-кнопка может быть обычного размера, и маленькая — если использовать параметр `small`:

    skin: pseudo-button small

> <div>
>     <button class="small-pseudo-button" type="button">Маленькая псевдокнопка кнопкой</button>
> </div>
>
>     .small-pseudo-button
>       kind: button
>       skin: pseudo-button small
> {:.styl}

