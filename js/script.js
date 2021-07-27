$(document).ready(function() { 
	var $header = $('#header');
	var $gnb = $('#gnb');
	var $container = $('#container');    
	var $tabList = $('.tab-area .lst-tab');
	var $popupDim = $('.popup__dimmed');

	/* header */   
	
	//util menu
	$header.find('.header__util .header__util-item .header__util-menu').on('click', function() {
			$(this).parent().toggleClass('header__util-item--active');
			$popupDim.show();
			
			if ($(this).hasClass('header__util-bookmark')) {
					$popupDim.hide();
					$('.popup-dialog--bookmark').toggleClass('popup-wrap--active');
			} else if ($(this).hasClass('header__util-allmenu')) {
					$popupDim.show();
					$('.popup-layer--allmenu').toggleClass('popup-wrap--active');
					if ($('.popup-dialog--bookmark').hasClass('popup-wrap--active')){
							$('.popup-dialog--bookmark').removeClass('popup-wrap--active');
							$header.find('.header__util-item').removeClass('header__util-item--active');
					}
			}
	});
	
	//gnb-bg_main
	$gnb.children('.lst-gnb').on('mouseenter', function() {
			$header.addClass('gnb--open');        
	});
	$gnb.on({
			'mouseleave': function() {
					$header.removeClass('gnb--open');
			},
			'focusin': function() {
					$header.addClass('gnb--open');
			}
	});
	$gnb.find('.lst-gnb .gnb_depth1:last .lst-gnb-sub .gnb_depth2:last a').on('focusout', function() {
			$header.removeClass('gnb--open');
	});
	$header.find('.header__util .header__util-item:last a').on('focusin', function() {
			$header.removeClass('gnb--open');
	});  

	
	/* popup close */
	$('.popup__btn-close').on('click', function(e) {
			event.preventDefault();
			$(this).parents('.popup-wrap').removeClass('popup-wrap--active');
			$popupDim.hide();

			if ($(this).parents('.popup-wrap').hasClass('popup-dialog--bookmark')) {
					$header.find('.header__util .header__util-item').removeClass('header__util-item--active');
			} 
	});

	$('.popup-wrap').on('click', function(e) {
			if($('.popup-wrap').is(e.target)) {
					$(this).removeClass('popup-wrap--active');
					$popupDim.hide();
			}
	});

	/* lnb */
	var $lnb = $('.lst-lnb');
	var $lnbDepth1 = $lnb.find('.lst-lnb__item');
	var $lnbSub = $lnbDepth1.find('.lst-lnb-sub');    

	$lnbDepth1.on('click', function() {
			$(this).toggleClass('lst-lnb__item--active');
			if ($(this).hasClass('lst-lnb__item--active')) {
					$(this).find('.lst-lnb__menu > .icon-arrow--ms span').text('메뉴 닫기');
			} else {
					$(this).find('.lst-lnb__menu > .icon-arrow--ms span').text('메뉴 열기');            
			}
	});

	$('.btn-lnb').on('click', function() {
			$('.lnb').toggleClass('lnb--close')
			$container.toggleClass('lnb--close');
	});

	
	/* container */    

	//sub - bookmark add btn
	$container.find('.btn-box--absolute .btn-bookmark').on('click', function() {
			$(this).toggleClass('btn-bookmark--active');        
	})

	//tab - openclosing
	$tabList.find('.lst-tab__item .lst-tab__menu').on('click', function() {
			var tabNum = $(this).parent().index();
			
			$(this).parent().addClass('lst-tab__item--active').siblings().removeClass('lst-tab__item--active');

			$(this).parents('.tab-area').next('.tab-cnt').children().eq(tabNum).addClass('lst-tab-cnt--active').siblings().removeClass('lst-tab-cnt--active');
	})

	//btn-alert
	$container.find('.btn-alert').on('click', function() {
			if ($(this).hasClass('btn-alert--active')) {
					$(this).removeClass('btn-alert--active').siblings('.btn-alert').addClass('btn-alert--active');
			} else{
					$(this).addClass('btn-alert--active').siblings().removeClass('btn-alert--active');
			}
	});

	

	//search-form
	var $search = $('.search-form');
	
	$search.on('focusin', function() {
			$(this).addClass('search-form--active');
	})

	$search.on('focusout', function() {
			if ($(this).find('input[type="search"]').val() == '') {
					$(this).removeClass('search-form--active');
			}
	})

});