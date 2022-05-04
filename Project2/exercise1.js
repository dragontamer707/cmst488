$(function () {
    /* Selectors */
    $("#add-classes").click(function () {
        $('.selector-examples li:first').addClass('first');
	$("li:odd").addClass('odd');
	$("li:even").addClass('even');
	$("li:eq(3)").addClass('highlighter');
        $("li:eq(4)").addClass('highlighter');
        $("li.last").last().addClass('last');
        // Add remaining selectors here
    });

    /* Change Text */
    $("#change-language").click(function () {
  $("#newLanguage").val("inputValue");
 var element = $('.currentLanguage').html();
  $('#element').html(++inputValue);

    });

    /* Toggles Part 1: Modifying CSS attributes with .css() */
    var style = 'background-color';
    var boxColor = "rgb(153, 51, 51)"

    $("#button_toggle_colors").click(function() {
        /* Your code goes here */
        $(".box").each(function () {

            if ($(this).css('background-color') == boxColor) {
             $(this).css( style, white );
            }
            else {
         $(this).css( style, boxColor )
            }
        });
    });

    /* Toggles Part 2: Adding/Removing classes to manipulate shapes */
    $("#button_toggle_roundedges").click(function() {
        $(".box").each(function () {

  }
});
        });
    });

    /* Toggles Part 3: Adding new elements */
    $("#button_add_box").click(function() {
        /* Your code goes here  */

    });
});
