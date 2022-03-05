
/*login page*/
    var txt = $("input");
    $(document).ready(function () {
        $(".login").animate(
            {
                top: "20%",
            },
            2000
        );
        $(".login").animate(
            {
                width: "+=20%",
                left: "-=10%",
            },
            1500
        );
        $(".login").animate(
            {
                height: "+=290px",
            },
            1500
        );

        /*sign in model*/
        $('.signin').click(function () {
          $('.modal-wrapper').css('display','block');
            $('body').css('overflow', 'hidden');
        })

        $('.modal-close i').click(function () {
            $('.modal-wrapper').fadeOut()
            $('body').css('overflow', 'scroll');
        })
        /*sticky nav bar*/
           var header_height= $('header').outerHeight();
           $(window).scroll(function () {
               var scroll_height= $(window).scrollTop();
               if(scroll_height>header_height){
                   $('.seconed-nav').addClass('sticky')
               }else {
                   $('.seconed-nav').removeClass('sticky')
               }
           })
/*end login page*/
        /*type write*/
        function typeString($target, str, cursor, delay, cb) {
            $target.html(function (_, html) {
                return html + str[cursor];
            });

            if (cursor < str.length - 1) {
                setTimeout(function () {
                    typeString($target, str, cursor + 1, delay, cb);
                }, delay);
            }
            else {
                cb();
            }
        }
        function deleteString($target, delay, cb) {
            var length;

            $target.html(function (_, html) {
                length = html.length;
                return html.substr(0, length - 1);
            });

            if (length > 1) {
                setTimeout(function () {
                    deleteString($target, delay, cb);
                }, delay);
            }
            else {
                cb();
            }
        }

        // jQuery hook
        $.fn.extend({
            teletype: function (opts) {
                var settings = $.extend({}, $.teletype.defaults, opts);

                return $(this).each(function () {
                    (function loop($tar, idx) {
                        // type
                        typeString($tar, settings.text[idx], 0, settings.delay, function () {
                            // delete
                            setTimeout(function () {
                                deleteString($tar, settings.delay, function () {
                                    loop($tar, (idx + 1) % settings.text.length);
                                });
                            }, settings.pause);
                        });

                    }($(this), 0));
                });
            }
        });

        // plugin defaults
        $.extend({
            teletype: {
                defaults: {
                    delay: 100,
                    pause: 800,
                    text: []
                }
            }
        });

        $('#target').teletype({
            text: [
                'Welcome To Life Care',
                'You Care Your Health ',
                'We Are Expert !'
            ]
        });
        $('#target').addClass('target')

        $('#cursor').teletype({
            text: ['|', ' '],
            delay: 0,
            pause: 5000
        });
        $('#cursor').addClass('cursor');

        /*End type write*/

        // /*animate scroll tags in header*/
        $('header a').click(function (e) {
            e.preventDefault();
            var targerElemet = $(this).attr('href');
            var scrollValue = $(targerElemet).offset().top;
            $('body, html').animate({
                scrollTop: scrollValue
            }, 1000);
        })

        /*scroll top button*/
        var start_scroll_button=$('header').outerHeight();
        $(window).scroll(function () {
           if($(this).scrollTop()>start_scroll_button){
              $('.top-button').fadeIn();
           }else {
               $('.top-button').fadeOut();
           }
        })
        $('.top-button').click(function () {
           $('html , body').animate({
               scrollTop:0
           },1000);
        })
    });


