let celciusInput = document.querySelector('#celcius > input')
let fahreinheitInput = document.querySelector('#fahreinheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let btn = document.querySelector('.button button')
function roundNumber(number)
{
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15
    fahreinheitInput.value = roundNumber(fTemp)
    kelvinInput.value =roundNumber(kTemp)
})
kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5)+32
    fahreinheitInput.value = roundNumber(fTemp)
    celciusInput.value=roundNumber(cTemp)
})
fahreinheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahreinheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15
    kelvinInput.value =roundNumber(kTemp)
    celciusInput.value =roundNumber(cTemp)
})
btn.addEventListener('click', ()=>{
    celciusInput.value=""
    fahreinheitInput.value=""
    kelvinInput.value=""
})