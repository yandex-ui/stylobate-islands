---
---

## Ссылки

    skin: islands-link

Помимо обычной ссылки из коробки идут ещё два скина: для внешней ссылки и псевдоссылки:

    skin: islands-outer-link

    skin: islands-pseudo-link

По умолчанию ссылки (не псевдо) **не** подчёркнуты, для подчёркивания нужно передавать параметр `underline`:

    skin: islands-link underline

Примеры:

> <a class="link" href="#x">In CTR we trust</a>
>
>     .link
>       skin: islands-link underline
> {:.styl}

> <a class="outer-link" href="#x">We don't care</a>
>
>     .outer-link
>       skin: islands-outer-link underline
> {:.styl}

> <a class="pseudo-link">I'm not a link really</a>
>
>     .pseudo-link
>       skin: islands-pseudo-link
> {:.styl}


### Параметры ссылок

При определении ссылки опциональным параметром можно задать цвет:

    skin: islands-link #070

По умолчанию ссылки имеют красный ховер, если ссылка должна быть без ховера, можно использовать параметр `no-hover`:

    skin: islands-link no-hover

Кроме того, можно прямо в скине задать цвет для ховера, но только в том случае, если уже был передан параметр для цвета ссылки — второй переданный цвет станет цветом ховера:

    skin: islands-link #070 #D00

Иногда может возникнуть желание перенести часть внешнего вида ссылки на внутренние элементы, в этом случае можно использовать параметр `nested`, в этом случае этот блок не получит ховер, цвет и курсор. Кроме того, для некоторых браузеров можно починить некликабельные промежутки между внутренними элементами, для этого нужно использовать параметр `fix-gaps`.

> <a class="complex-link">© «<span class="link-inner">Яндекс</span>»</a>
>
>     .complex-link
>       skin: islands-link #000 fix-gaps
>
>     .link-inner
>       skin: islands-link nested underline
> {:.styl}
