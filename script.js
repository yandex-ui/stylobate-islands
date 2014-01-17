// Shortcuts for Prism
Prism.languages.styl = Prism.languages.scss;
Prism.languages.html = Prism.languages.markup;

// Injecting source of examples' HTML
$('blockquote:not(:has(.example-code>.group)):not(:has(.example-source))').append($('<div class="example-code"><span class="group"></span></div>'))

$('blockquote:has(.example-code>.group)').each(function(){
    var $example_html = $(this).clone();
    $example_html.find('.example-code').remove();
    $child = $example_html.children();
    if ($child.length == 1 && $child[0].className == '') {
        $example_html = $child;
    }
    var example_html = $example_html[0].innerHTML.replace(/^\s+/,'').replace(/\s+$/,'');
    if (example_html) {
        var example_html_inner = example_html.split('\n');
        if (example_html_inner[example_html_inner.length - 1].match(/^\s\s\s\s/)) {
            example_html = example_html.replace(/\n    /g,'\n');
        }
        var $example_src = $(this).children('.example-code');
        var $example_src_code = $('<pre class="language-html is-hidden"><code></code></pre>');
        $example_src_code.children('code').text(example_html);
        $example_src.children('.group').append($('<span class="small-pseudo-button toggle-button group-item example-source js-toggler" data-toggle="html"><span class="button-content">html</span></span>'));
        $example_src.append($example_src_code);
    }
});


// Something for modals
$("[data-modal]").click(function(){
    $('#' + $(this).attr('data-modal')).toggleClass('is-hidden');
});
$(".modal-overlay, .modal-close").click(function(){
    $(this).closest('.modal-wrap').toggleClass('is-hidden');
});
$(".toggle-button:not(.is-disabled)").click(function(){
    $(this).toggleClass('is-checked');
});

// Toggling code blocks
$('.js-toggler:not([data-toggle])').click(function(){
    $(this).next().toggleClass('is-hidden');
});
$('.js-toggler[data-toggle]').click(function(){
    $(this).closest('.group').siblings('[class*="language-' + $(this).data('toggle') + '"]').toggleClass('is-hidden');
});
$('.js-outer-toggler').click(function(){
    $(this).parent().next().toggleClass('is-hidden');
});

// Toggling tabs
$('blockquote .tabs-item').click(function(){
    $(this).siblings().removeClass('tabs-item_selected');
    $(this).addClass('tabs-item_selected');
});

// Auto-sizing textarea and input

var reset_height = function(el) {
    el.height(0).height(el[0].scrollHeight);
}
var reset_width = function(el) {
    el.width(0).width(el[0].scrollWidth);
}
$('input.js-autosize').on('input',function(){
    reset_width($(this));
});
$('input.js-autosize').each(function(){
    reset_width($(this));
    $(this).closest('.field').css('width','auto');
});
$('textarea.js-autosize').on('input',function(){
    reset_height($(this));
});
$('textarea.js-autosize').each(function(){
    reset_height($(this));
});

$('.field-reset').on('click',function(e){
    e.preventDefault();
    var $textarea = $(this).closest('.field').find('.input-controller')
    $textarea
        .val('')
        .focus()
        .height(0)
        .height($textarea[0].scrollHeight);
});

// Handling placeholder
$('.js-with-placeholder .input-controller').on('input', function(){
    var input = $(this);
    var field = input.closest('.field');
    var placeholder = field.find('.field-placeholder');

    if (input.val() == '') {
        placeholder.css('visibility', 'inherit');
    } else {
        placeholder.css('visibility', 'hidden');
    }
}).trigger('input');

// Handling placeholder ghost
$('.js-with-placeholder-ghost .input-controller').on('input', function(){
    var input = $(this);
    var field = input.closest('.field');
    var ghost = field.find('.field-placeholder-ghost');

    ghost.text(input.val());
}).trigger('input');

$('.js-with-placeholder-ghost .input-controller').on('focus', function(){
    $(this)
        .closest('.field')
        .find('.field-placeholder')
        .css('visibility', 'hidden');
});

$('.js-with-placeholder-ghost .input-controller').on('blur', function(){
    var input = $(this);
    if (input.val() != '') {
        input
            .closest('.field')
            .find('.field-placeholder')
            .css('visibility', 'inherit');
    }
});

// Handling placeholder autocomplete
$('.js-with-placeholder-autocomplete .input-controller').on('input', function(){
    var input = $(this);
    var field = input.closest('.field');
    var ghost = field.find('.field-placeholder-ghost');
    var autocomplete = field.find('.field-placeholder-content');
    var input_value = input.val();
    ghost.text(input_value);
    if ('Абракадабра'.indexOf(input_value) == 0) {
        autocomplete.text('Абракадабра'.replace(input_value, ''));
    } else {
        autocomplete.text('');
    }
}).trigger('input');

// Keeping the position of the sidebar

var lastScroll = $(window).scrollTop();

var topOffset = 20;

var elel = $('.aside');
var elel_is_fixed = false;
var elelHeight = elel.height();
var elelInitialTop = elel.offset().top;
var winHeight = $(window).height();
var maxScroll = $('body').height() - winHeight;

var bottomOffset = winHeight - elelHeight - 20;
var lastTop = Math.min(bottomOffset, 20);

$(window).resize(function() {
    winHeight = $(window).height();
    maxScroll = $('body').height() - winHeight;
    bottomOffset = winHeight - elelHeight - 20;
});

var checkScroll = function() {
    var winScroll = Math.min(Math.max($(window).scrollTop(), 0), maxScroll);

    if (winScroll > (elelInitialTop - lastTop - topOffset + 20)) {
        if (!elel_is_fixed) {
            elel_is_fixed = !elel_is_fixed;
            elel.addClass('aside_fixed');
            if (winHeight < elelHeight) {
                elel.css('top', bottomOffset);
                lastTop = bottomOffset;
            }
        }
    } else {
        if (elel_is_fixed) {
            elel_is_fixed = !elel_is_fixed;
            elel.removeClass('aside_fixed');
            if (winHeight < elelHeight) {
                elel.css('top', 'auto');
                lastTop = bottomOffset;
            }
        }
    }

    if (winHeight < elelHeight) {
        if (elel_is_fixed && winScroll > lastScroll) {
            if (lastTop > bottomOffset) {
                lastTop = Math.min(Math.max(lastTop + (lastScroll - winScroll), bottomOffset), topOffset);
                elel.css('top', lastTop);
            }
        } else if (elel_is_fixed && winScroll < lastScroll) {
            if (lastTop < topOffset) {
                lastTop = Math.min(Math.max(lastTop + (lastScroll - winScroll), bottomOffset), topOffset);
                elel.css('top', lastTop);
            }
        }
    }
    lastScroll = winScroll;

}

checkScroll();
$(window).scroll(checkScroll);
