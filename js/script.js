let isConvertToFahrenheit = true
const input = document.getElementById("inputfield")
const inputLabel = document.getElementById("inputSectionLabel")
const output = document.getElementById("outputfield")
const outputLabel = document.getElementById("outputSectionLabel")
const calculation = document.getElementById("calculationfield")
const explanationSection1 = document.getElementById("explanationSection1")
const explanationSection2 = document.getElementById("explanationSection2")
const celsius = "Celsius"
const celsiusSymbol = "°C"
const fahrenheit = "Fahrenheit"
const fahrenheitSymbol = "°F"



function convertCelsiusToFahrenheit() {
    output.value = (input.value * 9 / 5) + 32
    calculation.value = `${input.value}${celsiusSymbol} * (9/5) + 32 = ${output.value}${fahrenheitSymbol}`
}

function convertFahrenheitToCelsius() {
    output.value = (input.value - 32) * 5/9
    calculation.value = `(${input.value}${fahrenheitSymbol} - 32) * 5/9 = ${output.value}${celsiusSymbol}`
}

function convert() {
    if (input.value == "") {
        alert("Fill the temperature degree!")
        return
    }
    if (isConvertToFahrenheit) convertCelsiusToFahrenheit()
    else convertFahrenheitToCelsius()
}

function reset() {
    input.value = ""
    output.value = ""
    calculation.value = ""
}

function reverse() {
    isConvertToFahrenheit = !isConvertToFahrenheit
    if (isConvertToFahrenheit) {
        inputLabel.innerHTML = "Celsius (°C)"
        outputLabel.innerHTML = "Fahrenheit (°F)"
        explanationSection1.style.display = "block"
        explanationSection2.style.display = "none"
    } else {
        inputLabel.innerHTML = "Fahrenheit (°F)"
        outputLabel.innerHTML = "Celsius (°C)"
        explanationSection1.style.display = "none"
        explanationSection2.style.display = "block"
    }
    input.value = output.value
    convert()
}

function getInputUnit() {
    if (isConvertToFahrenheit) return `${celsius} (${celsiusSymbol})`
    else return `${fahrenheit} (${fahrenheitSymbol})`
}