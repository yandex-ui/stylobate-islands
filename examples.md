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
  vertical-align: baseline;
  text-align: left;
  padding-right: 2rem;
  padding: 0.5rem 2rem 0.5rem 0;
}
th[colspan] {
  font-size: 18px;
  padding: 0.5rem 0;
}
tbody:first-of-type > tr > th[colspan] {
  padding-top: 0;
}
td {
  padding: 0.5rem 1rem 0.5rem 0;
  vertical-align: baseline;
}
tfoot > tr > td {
  border-top: 1px solid #EDECE8;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
}
tbody > tr:last-child > td {
  padding-bottom: 1.6rem;
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
                <button class="small-pseudo-button" type="button">Изменить</button>
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
