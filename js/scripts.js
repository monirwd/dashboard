(function ($) {
	$(document).ready(function () {

		// Scroll to Top
		jQuery('.scrolltotop').click(function () {
			jQuery('html').animate({ 'scrollTop': '0px' }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		jQuery(".offcanvas-menu ul li a").click(function () {
			jQuery(this).next().slideToggle()
		})

		jQuery('.tabs .tab-links a').on('click', function (e) {
			var currentAttrValue = jQuery(this).attr('href');
			// Show/Hide Tabs
			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).siblings().hide();
			jQuery('.tabs ' + currentAttrValue).delay(400).show();
			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
			e.preventDefault();
		});













	});
})(jQuery);