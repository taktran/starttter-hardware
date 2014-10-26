/**
 * LED example
 *
 * Based off Johnny-five example: https://github.com/rwaldron/johnny-five/blob/master/docs/led.md
 */
"use strict";

var five = require("johnny-five");

var board = new five.Board();

// Set up of the board
var pins = {
  led: 13,          // Negative end in GND
  pullUpButton: 2   // Other pin in GND
};

board.on("ready", function() {
  var led = new five.Led(pins.led);

  var button = new five.Button({
    pin: pins.pullUpButton,
    isPullup: true
  });

  this.repl.inject({
    led: led,
    button: button
  });

  button.on("down", function(value) {
    led.on();
  });

  button.on("up", function() {
    led.off();
  });
});
