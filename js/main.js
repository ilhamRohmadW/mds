$(document).ready(function () {
    $('.tabs_content_item:first-child').addClass('--active');
    $('.accordion_list:first-child .accordion_content').slideDown(350);
    $('.accordion_list:first-child .accordion_btn').addClass('--active');

    $('.tabs_nav_item').click(function () {
        console.log('test');
        var tabID = $(this).attr('data-tab');
        $(this).addClass('bg-primary text-white').siblings().removeClass('bg-primary text-white');
        $('#tab-' + tabID).addClass('--active').siblings().removeClass('--active');
    });
    $('.accordion_btn').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass('--active')) {
            $this.next().slideUp(350);
            $this.removeClass('--active')
        } else {
            $this.parent().parent().find('.accordion_list .accordion_btn').removeClass('--active');
            $this.parent().parent().find('.accordion_list .accordion_content').slideUp(350);
            $this.toggleClass('--active');
            $this.next().slideToggle(350);
        }
    });
    $('.header_menu').click(function (e) {
        $('.header_collapse--menu').addClass('--active')
        $('.accordion_btn svg').addClass('hidden')
        e.preventDefault();
    });
    $('.header_close').click(function (e) {
        $('.header_collapse').removeClass('--active')
        setTimeout(function () {
            $('.accordion_btn svg').removeClass('hidden')
        }, 300);
        e.preventDefault();
    });

    $('.section--seller_detail_show').click(function (e) {
        $('.section--seller_detail_text').removeClass('lineclamp-2')
        $(this).remove()
        e.preventDefault();
    });
    
});