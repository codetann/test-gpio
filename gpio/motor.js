const Gpio = require("pigpio").Gpio;

const motor = new Gpio(10, { mode: Gpio.OUTPUT });

let open = false;

const rotateMotor = () => {
  if (open) {
    // close
    motor.servoWrite(-1000);
    open = false;
  } else {
    // open
    motor.servoWrite(1000);
    open = true;
  }
};

module.exports = rotate;
