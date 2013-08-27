---

layout: default

page_type: examples

permalink: /examples/

---

# Примеры

На этой странице будут собраны различные примеры использования скинов и блоков, пока что тут только один пример, но в будущем тут будет больше всего.

Более мелкие примеры, иллюстрирующие конкретные скины, смотрите в [соответствующем разделе](../skins/).

## Форма «Создать правило» {#new-rule}

<div class="default-form">
    <div class="form-fieldset">
        <div class="form-legend">Если письмо содержит</div>

        <div class="form-field">
            <div class="form-field-label">В поле «от кого»</div
            ><div class="form-field-content">
                <input class="input" type="text" placeholder="Например «info@info.ru»" />
            </div
            ><div class="form-hint">
                <div class="form-hint-title">Подсказка</div>
                <div class="form-hint-content">
                    Незаполненные поля будут игнорироваться при работе правила
                </div>
            </div>
        </div>

        <div class="form-field">
            <div class="form-field-label">В поле «тема»</div
            ><div class="form-field-content">

                <div class="form-field">
                    <input class="input" type="text" placeholder="Например Встреча»" />
                </div>

                <div class="form-field">
                    <label class="toggler">
                        <input class="toggler-controller" type="checkbox">
                        <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
                        >письмо содержит вложения
                    </label>
                </div>

            </div>
        </div>
    </div>

    <div class="form-fieldset">
        <div class="form-legend">Уведомлять об этом письме по SMS</div>

        <!-- Вложенная форма? http://jing.yandex-team.ru/files/diloo/2013-07-04_1747.png -->

        <div class="form-field">
            <div class="form-field-label">Телефон</div
            ><div class="form-field-content">

                <div class="form-inline-field">
                    +7 (903) 617 80 14
                </div>

                <div class="form-inline-field">
                    <button class="small-pseudo-button" type="button">Изменить</button>
                </div>

            </div>
        </div>

        <div class="form-field">
            <div class="form-field-label">Присылать уведомления</div
            ><div class="form-field-content">

                <div class="form-field">
                    <label class="toggler">
                        <input class="toggler-controller" type="checkbox" checked="checked" onchange="var btns = $(this).closest('.form-field-content').find('#NotificationTime, #NotificationTime .small-pseudo-button'); btns.toggleClass('is-disabled'); btns.attr('disabled') ? btns.removeAttr('disabled') : btns.attr('disabled',true) ">
                        <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
                        >круглосуточно
                    </label>
                </div>

                <div class="form-field is-disabled" id="NotificationTime" disabled="disabled">
                    <button class="small-pseudo-button is-disabled" type="button" disabled="disabled">10:00</button>
                    –
                    <button class="small-pseudo-button is-disabled" type="button" disabled="disabled">22:00</button>
                </div>

            </div>
        </div>

        <div class="form-field">
            <div class="form-field-label">Не более</div
            ><div class="form-field-content">
                <button class="button" type="button">
                    <span class="button-content">1 раз в 30 минут</span>
                </button>
            </div>
        </div>

        <div class="form-field">
            <div class="form-field-label">Ваш часовой пояс</div
            ><div class="form-field-content">
                <button class="button" type="button">
                    <span class="button-content">(GMT+4:00) Москва, Санкт-Петербург</span>
                </button>
            </div>
        </div>
    </div>

    <div class="form-fieldset">
        <div class="form-field">
            <div class="form-field-content">

                <div class="form-inline-field">
                    <button class="action-button" type="button">
                        <span class="button-content">Создать правило</span>
                    </button>
                </div>

                <div class="form-inline-field">
                    <span class="form-pseudo-link" tabindex="0">Отмена</span>
                </div>

            </div>
        </div>
    </div>
</div>

> <div class="example:/skins/islands/button/tests/button"></div>
> <div class="example:/skins/islands/button/tests/toggler"></div>
> <div class="example:/skins/islands/button/tests/toggle-button"></div>
> <div class="example:/skins/islands/button/tests/action-button"></div>
> <div class="example:/skins/islands/group/tests/group"></div>
> <div class="example:/skins/islands/pseudo-button/tests/pseudo-button"></div>
> <div class="example:/skins/islands/pseudo-button/tests/small-pseudo-button"></div>
> <div class="example:/skins/islands/select/tests/select"></div>
> <div class="example:/skins/islands/checkbox/tests/checkbox"></div>
