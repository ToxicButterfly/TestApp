/**
 * Created by mac on 04.11.2016.
 */

$( document ).ready(function(){


    $('.button-collapse').sideNav({
            menuWidth: 320, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    $('.button-collapse-right').sideNav({
            menuWidth: 320, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });


    $(document).ready(function() {
        $('select').material_select();
    });


    $(document).ready(function() {
        Materialize.updateTextFields();
    });

    $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        }
    );

});

(function ($) {

    $("#slider").ionRangeSlider(
        {
            min: 1,
            max: 100,
            from: 1,
            to: 100,
            type: "single",
            step: 1,
            prefix: ""

        }
    );

    $("#sliderGoal").ionRangeSlider(
        {
            min: 1,
            max: 100,
            from: 1,
            to: 100,
            type: "single",
            step: 1,
            prefix: ""

        }
    );

    $("#slider1").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["Плохо", "b", "c", "Отлично"]
        }
    );

    $("#slider2").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_snap: 0,
            values: ["Нет", "b", "c", "Да"]
        }
    );

    $("#slider3").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["Минимально", "b", "c", "Максимально"]
        }
    );

    $("#slider4").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider5").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider6").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider7").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider8").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider9").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );
    $("#slider10").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );
    $("#slider11").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

    $("#slider12").ionRangeSlider(
        {
            min: 1,
            max: 4,
            from: 2,
            to: 4,
            type: "single",
            step: 1,
            grid: true,
            grid_num: 10,
            values: ["1", "2", "3", "4"]
        }
    );

})(jQuery);


jQuery(document).ready(function($) {

// site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).load(function(){
        $('#preloader').delay(1000).fadeOut('normal',function(){$(this).remove();});

    });

});


