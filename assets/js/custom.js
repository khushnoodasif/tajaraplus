/**
 * Custom Scripts.
 * Note: use this file to add or override any other scripts.
 * DON'T EDIT TEMPLATE JS FILES DIRECTLY, JUST USE THIS FILE.
 */

;
(function($, window, document, undefined) {

    'use strict';

    $(document).ready(function() {

        // Set the date that the countdown is counting down to
        var countDownDate = new Date("March 31, 2023 00:00:00").getTime();

        // Update the countdown every 1 second
        var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();
        
        // Calculate the distance between the current date and the countdown end date
        var distance = countDownDate - now;
        
        // Calculate the days, hours, minutes, and seconds remaining
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the HTML elements with the remaining time
        document.getElementById("countdown").querySelector(".days").innerHTML = days;
        document.getElementById("countdown").querySelector(".hours").innerHTML = hours;
        document.getElementById("countdown").querySelector(".minutes").innerHTML = minutes;
        document.getElementById("countdown").querySelector(".seconds").innerHTML = seconds;
        
        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "The countdown is over!";
        }
        }, 1000);

    });

})(jQuery, window, document);