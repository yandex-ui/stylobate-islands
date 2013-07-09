---

layout: default

page_type: blocks

---

# Пример формы

<style>
table {
    border:none;
    border-collapse:collapse;
    border-spacing:0;
    padding: 0;
}
th {
  font-weight: normal;
  text-align: left;
}
th[colspan] {
  font-size: 18px;
}
</style>

<table>
    <tfoot>
        <td></td>
        <td>
            <button class="action-button" type="button">
                <span class="button-content">Создать правило</span>
            </button>
            <span class="link">Отмена</span>
        </td>
    </tfoot>
    <tbody>
        <tr>
            <th colspan="999">
                Если письмо содержит:
            </th>
        </tr>
        <tr>
            <th>В поле «от кого»</th>
            <td>…</td>
        </tr>
        <tr>
            <th>В поле «тема»</th>
            <td>
                …
                <div>
                    <label class="toggler">
                        <input class="toggler-controller" type="checkbox">
                        <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
                        >письмо содержит вложения
                    </label>
                </div>
            </td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <th colspan="999">
                уведомлять об этом письме по SMS:
            </th>
        </tr>
        <tr>
            <th>Телефон</th>
            <td>
                +7 (903) 617 80 14
                <button class="pseudo-button" type="button">Изменить</button>
            </td>
        </tr>
        <tr>
            <th>Присылать уведомления</th>
            <td>
                <label class="toggler">
                    <input class="toggler-controller" type="checkbox" checked="checked">
                    <span class="checkbox toggler-view"><span class="checkbox-icon"> </span></span
                    >круглосуточно
                </label>
                <div>
                    …-…
                </div>
            </td>
        </tr>
        <tr>
            <th>Не более</th>
            <td>
                <button class="button" type="button">
                    <span class="button-content">1 раз в 30 минут</span>
                </button>
            </td>
        </tr>
        <tr>
            <th>Ваш часовой пояс</th>
            <td>
                <button class="button" type="button">
                    <span class="button-content">(GMT+4:00) Москва, Санкт-Петербург</span>
                </button>
            </td>
        </tr>
    </tbody>
</table>
