var appliaction = {
	initFancybox: function () {
		if (!$.fancybox)
			return;
		$('.fancybox').fancybox({
			overlayColor: '#000'
		});
		$('.fancybox-iframe').fancybox({
			autoScale: false,
			type: 'iframe',
			width: 1000,
			height: '75%',
			overlayColor: '#000'
		});
	}
};

$(document).ready(function() {
	appliaction.initFancybox();
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-26296470-3']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
