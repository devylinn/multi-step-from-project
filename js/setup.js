$(document).ready(function () {
    $("#birthday_datepicker").inputmask({
        "placeholder": "mm/dd/yyyy",
        // this is limited to a range of dates from 1800 - 2999
        regex: "(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(1[8-9][0-9][0-9]|2[0-9][0-9][0-9])",
        "clearIncomplete": true
    });

    $('.document-datepicker').datepicker({
        enableOnReadonly: false,
        disableTouchKeyboard: true,
        format: 'mm/dd/yyyy'
    }).datepicker("setDate", new Date());


    // $('input[name="input-radio"]').on('change', function(){
    //    if($(this).is(":checked")){
    //         $(this).toggleClass('hidden-special');
    //         $(this).parent('label').siblings('label').find('input').toggleClass('hidden-special');
    //         $("#radio-two").toggleClass('hidden-special');
    //         $("#radio-one").toggleClass('hidden-special');
    //     }
    // });

    $('#same-home-street-address').on('click', function () {
        $("#different-home-street-address").toggleClass('hidden-special');
    });


    // $('#first-button').on('click', function(){
    //     $('#first-fieldset').toggleClass('hidden-fieldset');
    //     $('#second-fieldset').toggleClass('hidden-fieldset');
    //     $('.steps-bar').children('div.inner-bar').eq(0).removeClass('active-circle');
    //     $('.steps-bar').children('div.inner-bar').eq(1).addClass('active-circle');
    // });
    

    $('#previous-button').on('click', function(){
        $('#first-fieldset').toggleClass('hidden-fieldset');
        $('#second-fieldset').toggleClass('hidden-fieldset');
        $('.steps-bar').children('div.inner-bar').eq(0).addClass('active-circle');
        $('.steps-bar').children('div.inner-bar').eq(1).removeClass('active-circle');
    });


    // $('body').on('click', '#previous-button', function(e){
    //     $('#first-fieldset').toggleClass('hidden-fieldset');
    //     $('#second-fieldset').toggleClass('hidden-fieldset');
    //     $('.steps-bar').children('div.inner-bar').eq(0).addClass('active-circle');
    //     $('.steps-bar').children('div.inner-bar').eq(1).removeClass('active-circle');
    // });


    
    $('body').on('change', 'input[name="lname"]', function(e){
        $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();
        if( this_input_val.length > 0 ) {
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });

    $('body').on('change', 'input[name="fname"]', function(e){
        $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();
        if( this_input_val.length > 0 ) {
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });

    $('body').on('change', 'input[name="birthday"]', function(e){
        $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();
        if( this_input_val.length > 0 ) {
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });
    
    $('body').on('change', 'input[name="phone-number"]', function(e){
        $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();
        if( this_input_val.length > 0 ) {
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });
    
    $('body').on('change', 'input[name="email"]', function(e){
        $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();
        if( this_input_val.length > 0 ) {
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });


    var error_lname = 0;
    var error_fname = 0;
    var error_birthday = 0;
    var error_phonenumber = 0;
    var error_email = 0;

    $('body').on('click', '#first-button', function(e){
        if(  $('input[name="lname"]').val() == "" ||
        $('input[name="fname"]').val() == "" ||
        $('input[name="birthday"]').val() == "" ||
        $('input[name="phone-number"]').val() == "" ||
        $('input[name="email"]').val() == "" ||
        error_fname > 0 ||
        error_lname > 0 ||
        error_birthday > 0 ||
        error_phonenumber > 0 ||
        error_email > 0 ) {
            e.preventDefault();


            if( $('input[name="fname"]').val() == "" ) {
                $('input[name="fname"]').parent('.form-group').addClass('input-not-completed');
            }else {
                $('input[name="fname"]').parent('.form-group').removeClass('input-not-completed');
            }

            if( $('input[name="lname"]').val() == "" ) {
                $('input[name="lname"]').parent('.form-group').addClass('input-not-completed');
            }else {
                $('input[name="lname"]').parent('.form-group').removeClass('input-not-completed');
            }

            if($('input[name="birthday"]').val() == ""){
                $('input[name="birthday"]').parent('.form-group').addClass('input-not-completed');
            }else{
                $('input[name="birthday"]').parent('.form-group').removeClass('input-not-completed');
            }

            if($('input[name="phone-number"]').val() == ""){
                $('input[name="phone-number"]').parent('.form-group').addClass('input-not-completed');
            }else{
                $('input[name="phone-number"]').parent('.form-group').removeClass('input-not-completed');
            }

            if($('input[name="email"]').val() == ""){
                $('input[name="email"]').parent('.form-group').addClass('input-not-completed');
            }else{
                $('input[name="email"]').parent('.form-group').removeClass('input-not-completed');
            }

            // make the page scroll to the fields with errors
            var error_fields = $('.input-not-completed, .error-input');

            if( error_fields.length > 0 ) {
                $('#first-button').parent('div.next-button').addClass('complete-inputs-above');
                var first_element_with_error = error_fields[0];
                var first_element_top = $(first_element_with_error).offset().top - 20;

                $([document.documentElement, document.body]).animate({
                    scrollTop: first_element_top
                }, 1000);
            }else {
                $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
                $('#first-button').parent('div.next-button').removeClass('user-already-registered');
            }

        }else {
            $('#first-button').parent('div.next-button').removeClass('complete-inputs-above');
            $('#first-button').parent('div.next-button').removeClass('user-already-registered');

            $.ajax({
                success: function(response){
                    $('#first-fieldset').toggleClass('hidden-fieldset');
                    $('#second-fieldset').toggleClass('hidden-fieldset');
                    $('.steps-bar').children('div.inner-bar').eq(0).removeClass('active-circle');
                    $('.steps-bar').children('div.inner-bar').eq(1).addClass('active-circle');

                    var animate_element = $('#second-fieldset');
                    var scrollTop = animate_element.offset().top - 300;

                    $([document.documentElement, document.body]).animate({
                        scrollTop: scrollTop
                    }, 1000);

                }
            });
        }
    });

    var choose_option = '';
    var choose_option_checkbox = $('input:radio[name="input-radio"]:checked').val();
    if( choose_option_checkbox === 'radio-one' ) {
        choose_option = $('input[name="choose-one"]').val();
    }else {
        choose_option = $('input[name="choose-two"]').val();
    }

    var home_error = 0;
    var city_error = 0;
    var choose_error = 0;

    $('body').on('change', 'input[name="input-radio"]', function(e){
        $("#radio-two").toggleClass('hidden-special');
        $("#radio-one").toggleClass('hidden-special');

        choose_option_checkbox = $('input:radio[name="input-radio"]:checked').val();

        if( choose_option_checkbox === 'radio-one' ) {
            $('input[name="choose-two"]').val('');
            choose_option = $('input[name="choose-one"]').val();
        }else {
            $('input[name="choose-one"]').val('');
            choose_option = $('input[name="choose-two"]').val();
        }

        if( choose_option == "" ) {
            $('.form-fields-one').addClass('input-not-completed');
        }else {
            $('.form-fields-one').removeClass('input-not-completed');
        }
    });

    $('body').on('change', 'input[name="choose-one"]', function(e){
        $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();

        if( this_input_val.length > 0 ) {
            choose_error = 0;
            choose_option = this_input_val;

            $('.form-fields-one').removeClass('input-not-completed');
        }else {
            choose_error++;
            choose_option = '';
            $('.form-fields-one').removeClass('input-not-completed');
            $('.form-fields-one').addClass('input-not-completed');
        }
    });
    
    $('body').on('change', 'input[name="choose-two"]', function(e){
        $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();

        if( this_input_val.length > 0 ) {
            choose_error = 0;
            choose_option = this_input_val;

            $('.form-fields-one').removeClass('input-not-completed');
        }else {
            choose_error++;
            choose_option = '';
            $('.form-fields-one').removeClass('input-not-completed');
            $('.form-fields-one').addClass('input-not-completed');
        }
    });


    $('body').on('click', '#finish-button', function(e){
        if( $('input[name="home-street-address"]').val() == "" ||
            $('input[name="city"]').val() == "" ||
            
            choose_option == "" ||
            home_error > 0 ||
            city_error > 0 ) {
                e.preventDefault();

                if( $('input[name="home-street-address"]').val() == "" ) {
                    $('input[name="home-street-address"]').parent('.form-group').addClass('input-not-completed');
                }else {
                    $('input[name="home-street-address"]').parent('.form-group').removeClass('input-not-completed');
                }

                if( $('input[name="city"]').val() == "" ) {
                    $('input[name="city"]').parent('.form-group').addClass('input-not-completed');
                }else {
                    $('input[name="city"]').parent('.form-group').removeClass('input-not-completed');
                }
                
                if( choose_option == "" ) {
                    $('.form-fields-one').addClass('input-not-completed');
                }else {
                    $('.form-fields-one').removeClass('input-not-completed');
                }
            
                // make the page scroll to the fields with errors
                var elements_with_errors = $('.input-not-completed');

                if( elements_with_errors.length > 0 ) {
                    $('#finish-button').parent('div.next-button').addClass('complete-inputs-above');
                    var first_element_with_error = elements_with_errors[0];
                    var first_element_top = $(first_element_with_error).offset().top - 20;

                    $([document.documentElement, document.body]).animate({
                        scrollTop: first_element_top
                    }, 1000);
                }else {
                    $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');
                }
        }else {
            $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');


            var allFields = $('#all-fields-form').serialize();

            // var allFields = {
            //     'fname'                : $('input[name=fname]').val(),
            //     'lname'                : $('input[name=lname]').val(),
            //     'home-street-address'  : $('input[name=home-street-address]').val(),
            //     'city'                 : $('input[name=city]').val()
            // };

          
            $.ajax({
                data: allFields,
                type: "POST",
                url: "data.php",
                success: function(response){
                    if( response == 'exists' ) {
                        $('.form-fields-one').addClass('already-exists');
                        $('#finish-button').parent('div.next-button').addClass('complete-inputs-above');
                        
                        var first_element_with_error = $('.form-fields-one');
                        var first_element_top = $(first_element_with_error).offset().top - 20;

                        $([document.documentElement, document.body]).animate({
                            scrollTop: first_element_top
                        }, 1000);
                    }else {
                        $.ajax({
                            data: allFields,
                            type: "POST",
                            url: "data.php",
                            dataType: 'json', 
                            encode: true,
                            success: function(response){
                                $('.success-container').html('<fieldset id="third-fieldset" style="padding-top: 45px"><div class="row"><div class="container"><div class="col-md-12 text-center"><div class="image-success"><img src="images/success.svg" alt="" width="250" height="250"></div><div class="success-content"><h2 class="primary-text">success!</h2><h4 class="secondary-text" id="result">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4></div></div></div></div></fieldset>');
            
                                $('.steps-bar').children('div.inner-bar').eq(0).removeClass('active-circle');
                                $('.steps-bar').children('div.inner-bar').eq(1).removeClass('active-circle');
                                $('.steps-bar').children('div.inner-bar').eq(2).addClass('active-circle');
            
                                $('#all-fields-form').html('');

                            }
                          
                        }) 
                        
                        .done(function(data) {

                            console.log(data);
            
                        });

                        
                    }
                }
            });


        }
    });

    

    $('body').on('change', 'input[name="city"]', function(e){
        $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();

        if( this_input_val.length > 0 ) {
            city_error = 0;
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            city_error++;
            this_input.parent('.form-group').removeClass('input-not-completed');
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });

    $('body').on('change', 'input[name="home-street-address"]', function(e){
        $('#finish-button').parent('div.next-button').removeClass('complete-inputs-above');
        var this_input = $(e.target);
        var this_input_val = this_input.val();

        if( this_input_val.length > 0 ) {
            home_error = 0;
            this_input.parent('.form-group').removeClass('input-not-completed');
        }else {
            home_error++;
            this_input.parent('.form-group').removeClass('input-not-completed');
            this_input.parent('.form-group').addClass('input-not-completed');
        }
    });

});


