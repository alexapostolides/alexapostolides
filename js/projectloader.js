$(window).load(function() {
$(".loader").delay('1300').fadeOut('slow');
});


$(document).ready(function () {
            $('#projects a').on('click', function (e) {
                $("logo, #name, #mobile").fadeOut('fast');
                e.preventDefault();
                var page = $(this).attr('href');
                $('#projectcontainer').load(page);
               	$("#close").delay('500').fadeIn('slow');
               	$('#nextArrow a').on('click', function (e) {
                e.preventDefault();
                var page = $(this).attr('href');
                $('#projectcontainer').load(page);
            });
            });
        });



/*
$(document).ready(function(){
               	$(window).load(function() {
				$("#projecttitleloader").fadeOut('slow');
					});
               });
*/