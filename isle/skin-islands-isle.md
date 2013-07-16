---
---

## Острова

Наш герой, белый блок с тенью. Остров можно приземлить, а можно оставить парящим (параметр `fly`).

    skin: isle

> <div class="isle" style="width: 200px; height: 100px;"></div>
>
> {:.styl}
>     .isle
>       kind: block
>       skin: isle

Летающий блок создан для модальных окон, выпадающих списков и прочих элементов верхнего слоя, в остальных случаях следует обходиться обычным островом.

    skin: isle fly

> <div class="flying-isle" style="width: 200px; height: 100px;"></div>
>
> {:.styl}
>     .flying-isle
>       kind: block
>       skin: isle fly

