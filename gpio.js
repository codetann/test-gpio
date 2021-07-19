const Gpio = require("onoff").Gpio; // include onoff to interact with the GPIO
const LED = new Gpio(4, "out"); // use GPIO pin 4, and specify that it is output

const blinkLED = () => {
  if (LED.readSync() === 0) {
    LED.writeSync(1); // set pin state to 1 (turn on led)
  } else {
    LED.writeSync(0); // set pin state to 0 (turn off)
  }
};

module.exports = blinkLED;
