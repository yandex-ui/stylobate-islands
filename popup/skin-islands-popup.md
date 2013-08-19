---
---

## Попапы

Хотя скин попапа — по сути скин летающего острова, есть соответствующий алиас:

    skin: popup

Кроме того, существует несколько скинов-помощников: `-content` для стилей контента, `-close` для закрывающего крестика и `-overlay` для затемняющего слоя поверх контента.

Подразумевается, что всё это дело будет использоваться с соответствующими типамм семейства `modal`:

> <p>
>     <button class="small-button" type="button" data-modal="Popup2">
>         <span class="button-content">А теперь что?</span>
>     </button>
> </p>
>
> <p>
>     <button class="small-button" type="button" data-modal="Popup1">
>         <span class="button-content">Что там?</span>
>     </button>
> </p>
>
> Просто попап инлайном с просто текстом, без абзацев:
>
> <div class="modal" style="width: 300px;">
>     <div class="modal-content text">
>         Большое мороженное с орехами и карамелью в вафельном рожке
>     </div>
>     <div class="modal-close"></div>
> </div>
>
>     .modal-wrap
>       kind: modal-wrap fixed
>     
>     .modal
>       kind: modal
>       skin: popup (-content '&-content') (-close '&-close')
>     
>     .modal-overlay
>       kind: modal-overlay
>       skin: popup-overlay
> {:.styl}

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
    <div class="modal-overlay"></div>
    <div class="modal" style="width: 300px;">
        <div class="modal-content text">
            <h3>Вам письмо:</h3>
            <p>Дорогой друг, спешу тебе напомнить, что ты занимал у меня много денег и до сих пор не отдал. Даю тебе еще неделю, твои дети у меня.</p>
        </div>
        <div class="modal-close"></div>
    </div>
</div>

