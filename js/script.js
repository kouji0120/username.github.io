$(function () {

    /*アコーディオン*/
    $('.accordion__body').eq(0).show();
    $('.accordion__title').on('click', function () {

        $(this).next('.accordion__body').slideToggle();
        $('.accordion__body').not($(this).next('.accordion__body')).slideUp();
    });

    //ハンバーガーメニューのクロスアクション、スクロールできなくする
    $('.burger-btn').on('click', function () {
        $('.header-nav').fadeToggle(300);
        $(this).toggleClass('cross');
        $(this).toggleClass('header-inner-left');
        $('body').toggleClass('noscroll');

    });


    //送信ボタンクリック後、googleフォームへ送信
    $(document).ready(function () {

        $('#mG61Hd').submit(function (event) {
            var formData = $('#mG61Hd').serialize();
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGXNZUHcK_PZWNDg8BlQCo9KS7ggFxXWq1y_YviIeZxHJ4vA/formResponse",
                data: formData,
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        $(".end-message").slideDown();
                        $(".submit-btn").fadeOut();
                        //window.location.href = "thanks.html";
                    },
                    200: function () {
                        $(".false-message").slideDown();
                    }
                }
            });
            event.preventDefault();
        });

    });



    //すべて入力しないと送信できないアクション
    $(document).ready(function () {
        const $submitBtn = $('#js-submit')
        $('#mG61Hd input,#mG61Hd textarea').on('change', function () {
            if (
                $('#mG61Hd input[type="text"]').val() !== "" &&
                $('#mG61Hd input[type="email"]').val() !== "" &&
                $('#mG61Hd input[type="checkbox"]').val() !== "" &&
                $('#mG61Hd #privacyCheck').prop('checked') === true
            ) {
                $submitBtn.prop('disabled', false);
            } else {
                $submitBtn.prop('disabled', true);
            }
        });
    });






    







});
