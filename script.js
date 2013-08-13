
Prism.languages.styl = Prism.languages.scss

$("[data-modal]").click(function(){
    $('#' + $(this).attr('data-modal')).toggleClass('is-hidden');
});
$(".modal-paranja, .modal-close").click(function(){
    $(this).closest('.modal-wrap').toggleClass('is-hidden');
});
$(".toggle-button:not(.is-disabled)").click(function(){
    $(this).toggleClass('is-checked');
});

// Toggling code blocks
$('.js-toggler').click(function(){
    $(this).next().toggleClass('is-hidden');
});
$('.js-outer-toggler').click(function(){
    $(this).parent().next().toggleClass('is-hidden');
});

// Toggling tabs
$('blockquote .tabs-item').click(function(){
    $(this).siblings().removeClass('tabs-item_selected');
    $(this).addClass('tabs-item_selected');
});

// Auto-sizing textarea

$('.js-autosize').on('input',function(){
    $(this).height(0).height($(this)[0].scrollHeight);
});

$('.js-autosize').each(function(){
    $(this).height(0).height($(this)[0].scrollHeight);
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
