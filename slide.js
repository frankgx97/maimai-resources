$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("fast");
  });
});

	$(function(){
		$('a.abgne_gotoheader').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			}, 600);

			return false;
		});
	});