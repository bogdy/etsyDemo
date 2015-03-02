// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require owl.carousel
//= require sweet-alert
//= require turbolinks
//= require_tree .

$(document).on("ready page:update",function() {
	$(".owl-carousel").owlCarousel({
              lazyLoad : true,
              navigation : false, // Show next and prev buttons
              slideSpeed : 300,
              paginationSpeed : 400,
              singleItem : true,
              autoHeight : true,
              // autoPlay : 7300       
          });
        console.log("Slider cargado!");
        // swal("Slider Log", "El slider ha sido cargado!")
});

