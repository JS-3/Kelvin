// The value of Kelvin.

const Kelvin = 293;

// The value of Celcius.

var Celcius = Kelvin - 273;

// Formula to calculate Fahrenheit and round it down to the nearest whole number.

var Fahrenheit = Math.floor( Celcius * (9/5) + 32); 

console.log(`The temperature is ${Fahrenheit} degrees fahrenheit.`)
