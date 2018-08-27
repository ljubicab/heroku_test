// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require jquery-ui

$( document ).ready(function() {

  // hide spinner
  $(".spinner__container").hide();
  $(".grid-container").show();


  // show spinner on AJAX start
  $(document).ajaxStart(function(){
    $(".spinner__container").show();
    $(".grid-container").hide();
  });

  // hide spinner on AJAX stop
  $(document).ajaxStop(function(){
    $(".spinner__container").hide();
    $(".grid-container").show();
  });

});
