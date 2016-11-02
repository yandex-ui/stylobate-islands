---
---

## Домик

Простой домик, крыша которого автоматически подстраивается под ширину самого домика.

    skin: islands-domik

По умолчанию домик блочный, если нужен инлайновый контекст, можно использовать параметр `inline`:

    skin: islands-domik inline

У домика есть два обязательных «элемента»: крыша и контент:

    skin: islands-domik (__roof '&-roof') (__content '&-content')

> <div class="domik">
>     <div class="domik-roof"></div>
>     <div class="domik-content">
>         Домик
>     </div>
> </div>
>
> <div class="domik">
>     <div class="domik-roof"></div>
>     <div class="domik-content">
>         Более широкий домик, с большой крышей
>     </div>
> </div>
>
> <div class="example:domik"></div>

Пока что домик имеет одну тему, в будущем, возможно, появится возможность настройки как внешнего вида, так и размеров.
