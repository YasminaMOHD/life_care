(function() {
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);



    /*Sticky nav*/
    var header_height= $('header').outerHeight();
    $(window).scroll(function () {
        var scroll_height= $(window).scrollTop();
        if(scroll_height>header_height){
            $('.seconed-nav').addClass('sticky')
        }else {
            $('.seconed-nav').removeClass('sticky')
        }
    })
})();