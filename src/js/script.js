$(document).ready(function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuElem = document.querySelector('.menu__list'),
        closeElem = document.querySelector('.menu__close'),
        closeMenu = document.querySelector('.menu__block');

    hamburger.addEventListener('click', function () {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', function () {
        menu.classList.remove('active');
    });

    menuElem.addEventListener('click', function () {
        menu.classList.remove('active');
    });

    closeMenu.addEventListener('click', function () {
        menu.classList.remove('active');
    });
    const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
        jsContents = document.querySelectorAll('.js-tab-content');

    jsTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const id = this.getAttribute('data-tab'),
                content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
                activeTrigger = document.querySelector('.js-tab-trigger.active'),
                activeContent = document.querySelector('.js-tab-content.active');

            activeTrigger.classList.remove('active'); // 1
            trigger.classList.add('active'); // 2

            activeContent.classList.remove('active'); // 3
            content.classList.add('active'); // 4
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                textarea1: "required",
                textarea2: "required",
                textarea3: "required",
                textarea4: "required",
                textarea5: "required",
                textarea6: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                },
                phone: "Пожалуйста, укажите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Ваш email должен быть в формате name@domain.com"
                },
                textarea1: {
                    required: "Пожалуйста, ответьте на вопрос",
                },
                textarea2: {
                    required: "Пожалуйста, ответьте на вопрос",
                },
                textarea3: {
                    required: "Пожалуйста, ответьте на вопрос",
                },
                textarea4: {
                    required: "Пожалуйста, ответьте на вопрос",
                },
                textarea5: {
                    required: "Пожалуйста, ответьте на вопрос",
                },
                textarea6: {
                    required: "Пожалуйста, укажите ваш вопрос",
                }
            }
        });
    };
    validateForms('.form');

    $('input[name=phone').mask("+7 (999)999-99-99");
    jQuery(function ($) {
        $.mask.definitions['#'] = "[012345679]";
        $('input[name=phone').mask("+7 (#99)999-99-99");
    });


    $('.form__respond').submit(function(e) {
    	e.preventDefault();
    	if (!$(this).valid()){
    		return;
    	}
    	$.ajax({
    		type: "POST",
    		url: "mailer/smart_respond.php",
    		data: $(this).serialize()
    	}).done(function() {
    		$(this).find("input").val("");
    		$('.layout, .modal').fadeIn('slow');
    		$('.form__respond').trigger('reset');
    	});
    	return false;
    });

    $('.form__checklist').submit(function(e) {
    	e.preventDefault();
    	if (!$(this).valid()){
    		return;
    	}
    	$.ajax({
    		type: "POST",
    		url: "mailer/smart_checklist.php",
    		data: $(this).serialize()
    	}).done(function() {
    		$(this).find("input").val("");
    		$('.layout, .modal').fadeIn('slow');
    		$('.form__checklist').trigger('reset');
    	});
    	return false;
    });
    
    $('.form__consultation').submit(function(e) {
    	e.preventDefault();
    	if (!$(this).valid()){
    		return;
    	}
    	$.ajax({
    		type: "POST",
    		url: "mailer/smart_consultation.php",
    		data: $(this).serialize()
    	}).done(function() {
    		$(this).find("input").val("");
    		$('.layout, .modal').fadeIn('slow');
    		$('.form__consultation').trigger('reset');
    	});
    	return false;
    });

    $('#file').change(function (e){
        const text = $(this).val().slice($(this).val().lastIndexOf('\\') + 1)
        $("#file-label").text(text)
    });

    $('.layout').click(function() {
        $('.form__respond').trigger('reset')
        $('.form__checklist').trigger('reset')
        $('.form__consultation').trigger('reset')
        $('.layout, .modal').fadeOut('slow');
    });
});