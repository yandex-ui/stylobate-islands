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

- - -

<span class="small-pseudo-button js-outer-toggler">исходный код скина</span>  
[оно же на Гитхабе](https://github.com/yandex-ui/stylobate-islands/tree/master/{{ item.path | split:'/' | last | remove:'.md' | remove:'skin-islands-' }}/){:.outer-link}

<pre class="language-css is-hidden" data-src="islands/{{ item.path | split:'/' | last | remove:'.md' | remove:'skin-islands-' }}/{{ item.path | split:'/' | last | replace:'.md','.styl' }}"></pre>
{% endif %}{% endfor %}
