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

{% assign sorted_pages = site.pages | sort:'path' %}
{% for item in sorted_pages %}{% if item.path contains 'skins/islands/' %}
{:#{{ item.path | split:'/' | last | remove:'.md' }}}
{{ item.content }}

- - -

<span class="small-pseudo-button toggle-button js-outer-toggler"><span class="button-content">исходный код скина</span></span>  
[оно же на Гитхабе](https://github.com/yandex-ui/stylobate-islands/tree/master/{{ item.path | split:'/' | last | split:'_' | first | remove:'.md' | remove:'skin-islands-' }}/){:.outer-link}

<pre class="language-styl is-hidden" data-src="islands/{{ item.path | split:'/' | last | split:'_' | first | remove:'.md' | remove:'skin-islands-' }}/{{ item.path | split:'/' | last | replace:'.md','.styl' }}"></pre>
{% endif %}{% endfor %}
