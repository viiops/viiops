$.ajaxSetup({ cache: false });

$(function () {
	$('.body').load('Home.html');
        activateLink('#homeLink');

	$('#homeLink').on('click', function () {
		$('.body').load('Home.html');
        activateLink(this);
    });
	$('#newsLink').on('click', function () {
		$('.body').load('News.html');
        activateLink(this);
    });
    $('#productsLink').on('click', function () {
		$('.body').load('Products.html');        
        activateLink(this);
    });
    $('#contactLink').on('click', function () {
		$('.body').load('Contact.html');        
        activateLink(this);
    });
	$('#aboutLink').on('click', function () {
		$('.body').load('About.html');
        activateLink(this);
    });
	
	$('.body').on('click', '#siopsLink', function () {
		$('.body').load('SIOPS.html');
		activateLink('#productsLink');
	});
	$('.body').on('click', '#wirelingoLink', function () {
		$('.body').load('WireLingo.html');
		activateLink('#productsLink');
	});	
	$('.body').on('click', '#requestLink', function () {
		$('.body').load('Contact.html');
		activateLink('#contactLink');
	});
});

function activateLink(selector) {
	$(selector)
		.addClass('active')
		.siblings()
		.removeClass('active');
}