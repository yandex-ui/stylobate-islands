---

layout: default

page_type: blocks

permalink: /blocks/

---

# Блоки

**Важно:** Это уже устаревшая документация, так как основной смысл этой документации — скины, то документация будет перенесена на [соответствующую страницу](../skins/). Эта же страница постепенно растеряет всё, что на ней есть, и станет документацией по изготовлению блоков на основе скинов.

## Модальные окна {#popup}

> <div class="modal" style="width: 300px;">
>     <div class="modal-content text">
>         <h3>Подарок</h3>
>         <p>Большое мороженное с орехами и карамелью в вафельном рожке</p>
>     </div>
>     <div class="modal-close"></div>
> </div>

> <div>
>     <button class="small-button" type="button" data-modal="Popup1">
>         <span class="button-content">Что там?</span>
>     </button>
> </div>

> <div>
>     <button class="small-button" type="button" data-modal="Popup2">
>         <span class="button-content">А теперь что?</span>
>     </button>
> </div>

<div class="modal-wrap is-hidden" id="Popup1">
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Подарок</h3>
            <p>Большое мороженное с орехами и карамелью в вафельном рожке</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>
<div class="modal-wrap is-hidden" id="Popup2">
    <div class="modal-paranja"></div>
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Вам письмо:</h3>
            <p>Дорогой друг, спешу тебе напомнить, что ты занимал у меня много денег и до сих пор не отдал. Даю тебе еще неделю, твои дети у меня.</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>

