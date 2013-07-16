---

layout: default

page_type: skins

permalink: /skins/

---

# Скины

«Островные» скины, применять лучше с соответствующим неймспейсом:

    set-skin-namespace('islands')
    @import "skins/islands"

В примерах ниже показано применение соответствующих скинов с использованием неймспейса выше.

{% for item in site.pages %}{% if item.path contains 'skins/islands/' %}
{:#{{ item.path | split:'/' | last | remove:'.md' }}}
{{ item.content }}

[исходный код скина](https://github.com/yandex-ui/stylobate-islands/tree/master/{{ item.path | split:'/' | last | remove:'.md' | remove:'skin-islands-' }}/){:.outer-link}
{% endif %}{% endfor %}
