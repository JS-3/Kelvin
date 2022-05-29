// The value of Kelvin.

const Kelvin = 293;

// The value of Celcius.

const Celcius = Kelvin - 273;

// Formula to calculate Fahrenheit and round it down to the nearest whole number.

const Fahrenheit = Math.floor( Celcius * (9/5) + 32); 

console.log(`The temperature is ${Fahrenheit} degrees fahrenheit.`)
