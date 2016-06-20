$(document).ready(function() {
  console.log("Script included!");

  $("#ingredients li").click(function() {
    $(this).toggleClass("is-hover-active");
    $(this).toggleClass("striked-out");
    $(this).children("i").toggleClass("fa-chevron-right");
  });

  var instruction_list = $("ol > li");
  instruction_list.click(function() {
    instruction_list.toggleClass("current-instruction", false);
    instruction_list.css("padding-left", 0);
    instruction_list.css("padding-right", 0);
    $(this).toggleClass("current-instruction");
    $(this).css("padding-left", "10px");
    $(this).css("padding-right", "20px");
  });

  $("#button1").click(function () {
    $("img").css("visibility", "hidden");
    $(this).css("display", "none");
    $("#button2").css("display", "initial");
  });

  $("#button2").click(function () {
    $("img").css("visibility", "visible");
    $(this).css("display", "none");
    $("#button1").css("display", "initial");
  });
});