$(document).ready(function () {
    $('.tabs_content_item:first-child').addClass('--active');
    $('.accordion_list:first-child .accordion_content').slideDown(350);
    $('.accordion_list:first-child .accordion_btn').addClass('--active');

    $('.tabs_nav_item').click(function () {
        var tabID = $(this).attr('data-tab');
        $('.tabs_content_item--' + tabID).addClass('--active').siblings().removeClass('--active');
        if ($(this).closest('.header_collapse_list').length) {
            $(this).addClass('text-primary border-primary').removeClass('border-white').siblings().removeClass('text-primary border-primary').addClass('border-white');
        } else if($(this).closest('.section--bantuan').length){
            $(this).addClass('bg-primary text-white').siblings().removeClass('bg-primary text-white');
        }
    });
    $('.accordion_btn').click(function (e) {
        if ($(this).closest('.accordion.accordion--stay').length) {
            var $this = $(this);
            if ($this.hasClass('--active')) {
                $this.next().slideUp(350);
                $this.removeClass('--active')
            } else {
                $this.toggleClass('--active');
                $this.next().slideToggle(350);
            }
        }else{
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
        }
        e.preventDefault();
    });

    // let headBtn = document.querySelectorAll(".header_btn")
    // let headCollapse = document.querySelectorAll(".header_collapse")

    // for (let i = 0; i < headBtn.length; i++) {
    //     headBtn[i].addEventListener('click', function(e) {
    //         let elemBtn = this.dataset.button
    //         console.log(elemBtn);
    //     })
    // }
    $('.header_btn--search').click(function (e) {
        $('.header_collapse--search').addClass('--active')
        e.preventDefault();
    });
    $('.header_btn--menu').click(function (e) {
        $('.header_collapse--menu').addClass('--active')
        e.preventDefault();
    });
    $('.header_close').click(function (e) {
        $('.header_collapse').removeClass('--active')
        e.preventDefault();
    });
    $('.section--seller_detail_show').click(function (e) {
        $('.section--seller_detail_text').removeClass('lineclamp-2')
        $(this).remove()
        e.preventDefault();
    });

    (function( $ ){
        $.fn.infinite = function(options) {
            var all = {};
            var options = $.extend(all, options);

            return this.each(function() {
                let o = options
                let infiniteLength = $(this).data('length')
                let infiniteAppear = $(this).data('appear')
                let infiniteChild = $(this).find('.infinite_wrapper > li')
                var infiniteBtn = $(this).find('.infinite_btn');

                for(var i = infiniteLength;i < infiniteChild.length ; i++) {
                    infiniteChild[i].style.display = "none";
                }
                infiniteBtn.click(function() {
                    for (var i = infiniteLength; i < infiniteLength + infiniteAppear; i++) {
                        if (infiniteChild[i]) {
                            infiniteChild[i].style.display = 'block';
                        }
                    }
                    infiniteLength += infiniteAppear;
                    if (infiniteLength >= infiniteChild.length) {
                        infiniteBtn.css('display','none');
                    }
                });
            });
            // return this;
        }; 
     })( jQuery );
     $('.infinite').infinite();
     $('.section--index .form input, .section--home .form input').on('keypress',function(e) {
        console.log($(this).val());
        if(e.which == 13) {
            $('.header_collapse--search').addClass('--active')
            let searchVal = $(this).val()
            $('.header_collapse_nav .form input').val(searchVal)
            return false;
        }
    });
     $('.header_collapse_nav .form input').on('input', function() {
        console.log($(this).val());
        $('.search--tabs').removeClass('hidden')
        $('.search--city').addClass('hidden')
        if ($(this).val() == 'asd') {
            $('.search--popular').removeClass('hidden')
            $('.search--notFound').removeClass('hidden')
            $('.search--found').addClass('hidden')
        } else if ($(this).val() == '') {
            $('.search--tabs').addClass('hidden')
            $('.search--city').removeClass('hidden')
            $('.search--popular').removeClass('hidden')
        } else{
            $('.search--popular').addClass('hidden')
            $('.search--notFound').addClass('hidden')
            $('.search--found').removeClass('hidden')
        }
    });
    let tagShow = $('.tagShow')
    let tagShowChild = tagShow.find('.tagShow_content > tagShow_content_list')
    var tagShowBtn = tagShow.find('.tagShow_btn_list > input');
    var tagShowVal = tagShowBtn.val();

    for(var i = tagShowVal;i < tagShowChild.length ; i++) {
        tagShowChild[i].style.display = "none";
    }
    tagShowBtn.click(function() {
        $(this).val()
        for (var i = tagShowLength; i < tagShowLength + tagShowAppear; i++) {
            if (tagShowChild[i]) {
                tagShowChild[i].style.display = 'block';
            }
        }
        tagShowLength += tagShowAppear;
        if (tagShowLength >= tagShowChild.length) {
            tagShowBtn.css('display','none');
        }
    });
});