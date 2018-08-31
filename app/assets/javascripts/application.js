// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery-fileupload
$(document).ready(function(){
	document.addEventListener("turbolinks:load", function() {
//fix this sheeeeeeeeeeeeeeeeet down
	if ($("#container").hasClass("front") == true) {
		$(document).mousemove(function (event) {
	    var Xdeg = 0;
	    var Ydeg = 0;
	    Ydeg = 2- (event.pageX * 2) / ($(document).width() / 2);            
	    Xdeg =  -2 + (event.pageY * 2) / ($(document).height()/2);
	    
	    $('#container').css('transform', 'translateZ( -200px ) perspective( 600px ) rotateY( ' + Ydeg + 'deg ) rotateX( ' + Xdeg + 'deg )');
	     
	    });
	};

		$(".queue_item").on("click", function(){
			$('#container').css('transform', 'translateZ( -200px ) perspective( 600px ) rotateY( 180deg )');
		});

		$(".back_to_dreams").on("click", function(){
			$('#container').css('transform', 'translateZ( -200px ) perspective( 600px ) rotateY( 0deg )');
		});

		$("#note_section").on("click", function(){
			if($(this).attr('data-click-state') == 0) {
				$(this).attr('data-click-state', 1)
				$(this).stop().animate({"top" : "50%"});
				$(".note_up_arrow").stop().css({"transform":"rotateX(-180deg)"});
			} else {
				$(this).attr('data-click-state', 0)
				$(this).stop().animate({"top" : "95%"});
				$(".note_up_arrow").stop().css({"transform":"rotateX(0deg)"});
			}
		});
		$("#note_section").hover(function(){
			if($("#note_section").attr('data-click-state') == 0){
				$(this).stop().animate({"top" : "92%"});
			}
			}, function(){
			if($("#note_section").attr('data-click-state') == 0){
				$(this).stop().animate({"top" : "95%"});
			}
		});

		$.getJSON("https://talaikis.com/api/quotes/", callbackFuncWithData);

	      function callbackFuncWithData(json) {
	      var html = "";
	      var quote = "";
	      var author = "";
	      var numRand = Math.floor((Math.random() * json.length));

	      quote = json[numRand]['quote'];
	      author = json[numRand]['author'];

	      html += "<div class='quote'><i class='fa fa-quote-right' aria-hidden='true' id='q'></i> "+ quote +"</div>";
	      html += "<div class='author'><b>"+ author +"</b></div>";
	      $(".quotes_panel").html(html);
	    }

		

		$("#get-quote").on("click", function() {
			$.getJSON("https://talaikis.com/api/quotes/", function(json) {
				var html = "";
				var quote = "";
				var author = "";
				var numRand = Math.floor((Math.random() * json.length));

				quote = json[numRand]['quote'];
				author = json[numRand]['author'];

				html += "<div class='quote'><i class='fa fa-quote-right' aria-hidden='true' id='q'></i> "+ quote +"</div>";
				html += "<div class='author'><b>"+ author +"</b></div>";

				$(".quotes_panel").html(html);
			});
		});
	});
});
