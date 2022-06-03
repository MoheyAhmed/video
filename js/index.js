$(document).ready(function(){
    
  $("#btn").click(function() {
    window.scrollTo({ top: 550, behavior: 'smooth'});
  });

  if(pageYOffset <= 461.25){
    $(".navbar").removeClass("second_navbar");
    $(".navbar").addClass("first_nav");
  }
  else{
    $(".navbar").addClass("second_navbar");
    $(".navbar").removeClass("first_nav");
  }
      
      
  $(window).on("scroll", function () {

    if(pageYOffset >= 461.25){
      $(".navbar").addClass("second_navbar");
      $(".navbar").removeClass("first_nav");
    }
    else{
      $(".navbar").removeClass("second_navbar");
      $(".navbar").addClass("first_nav");
    }
  });
  $("#show_time_link").click(function(){
    $("#show_time_link").addClass("active");
    $("#reach_your_career_link").removeClass("active");
    $("#show_time").show(1000);
    $("#reach_your_career").hide(1000);
  });
  $("#reach_your_career_link").click(function(){
    $("#reach_your_career_link").addClass("active");
    $("#show_time_link").removeClass("active");
    $("#reach_your_career").show(1000);
    $("#show_time").hide(1000);
  });
});

