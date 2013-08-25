---

layout: default

page_type: skins

permalink: /skins/

---

# Скины

**Важно:** всё это дело находится в активной разработке, всё может поменяться, поломаться, исправиться.

«Островные» скины, применять лучше с соответствующим неймспейсом:

    set-skin-namespace('islands')
    @import "skins/islands"

В примерах ниже показано применение соответствующих скинов с использованием неймспейса выше.

Это только вершина айсберга, пример вёрстки островного дизайна на основе [новой концепции](../). Другие реализации: [дизайнерский прототип](http://islands.yandex-team.ru/pages/blocks.xml), [островные библиотеки](http://clubs.at.yandex-team.ru/lego-dev/replies.xml?item_no=4095).

## Переменные {#variables}

В островных скинах используется ряд глобальных переменных, описывающих различные общие штуки. Этот список будет постепенно пополняться, по мере рефакторинга скинов.

### Размеры {#sizes}

#### Отступы {#gaps}

Все отступы и величины лучше задавать используя эти переменные, либо используя вместе с ними множители. Все переменные изначально чётные, поэтому можно, где нужно, использовать половину той или иной переменной.

1. `$islands_xs` — самый маленький возможный отступ, примерно равен шести пикселям.

2. `$islands_s` — просто маленький отступ, примерно равен десяти пикселям.

3. `$islands_m` — средний отступ, примерно равен шестнадцати пикселям.

4. `$islands_l` — большой отступ, примерно равен двадцати пикселям.

Если нужно задать отсупы для какого-либо блока с текстом, правильнее всего использовать вертикальные отступы на один шаг меньше, чем горизонтальные: `padding: $islands_s $islands_m` — такие блоки будут лучше смотреться.

#### Размеры шрифтов {#font-sizes}

Пока есть два стандартных размера шрифта, вынесеных в переменные. Остальные размеры, возможно, также когда-нибудь будут задаваться в переменных, но пока можно использовать [соответствующие скины](#headers).

1. `$islands_text_m` — стандартный размер текста, примерно равен пятнадцати пикселям.

2. `$islands_text_s` — маленький размер текста, примерно равен тринадцати пикселям.

### Цвета {#colors}

#### Цвета для фонов {#colors-bg}

1. `$islands_bg_page` — фон страницы, чуть серее, чем просто белый, для контрастности чистых белых блоков.

2. `$islands_bg_main` — Обычный белый фон.

#### Цвета для текста {#colors-text}

1. `$islands_color_text` — стандартный цвет для текста.

2. `$islands_color_text_misc` — второстепенный цвет для текста


{% assign sorted_pages = site.pages | sort:'path' %}
{% for item in sorted_pages %}{% if item.path contains 'skins/islands/' %}
{% assign item_id = item.path | split:'/' | last | remove:'.md' %}
{% capture replace_example %} class="example:/{{item.path | remove:item_id | remove:'.md'}}tests/{% endcapture %}
{:#{{ item_id }}}
{{ item.content | replace:' class="example:',replace_example }}

- - -

<span class="small-pseudo-button toggle-button js-outer-toggler"><span class="button-content">исходный код скина</span></span>  
[оно же на Гитхабе](https://github.com/yandex-ui/stylobate-islands/tree/master/{{ item.path | split:'/' | last | split:'_' | first | remove:'.md' | remove:'skin-islands-' }}/){:.outer-link}

<pre class="language-styl is-hidden" data-src="islands/{{ item.path | split:'/' | last | split:'_' | first | remove:'.md' | remove:'skin-islands-' }}/{{ item.path | split:'/' | last | replace:'.md','.styl' }}"></pre>
{% endif %}{% endfor %}
