
let celsius=document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');
let kelvin=document.getElementById('kelvin');

celsius.oninput =()=>{
    let CelsiusFahrenheit=(parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value=parseFloat(CelsiusFahrenheit.toFixed(3));
    let CelsiusKelvin=parseFloat(celsius.value)+273.15;
    kelvin.value=parseFloat(CelsiusKelvin.toFixed(3));
};

fahrenheit.oninput=()=>{
    let FahrenheitCelsius=(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(FahrenheitCelsius.toFixed(3));
    let FahrenheitKelvin=(parseFloat(fahrenheit.value)-32)*5/9+273.15;
    kelvin.value=parseFloat(FahrenheitKelvin.toFixed(3))
}

kelvin.oninput=()=>{
    let KelvinCelsius=parseFloat(kelvin.value)-273.15;
    celsius.value=parseFloat(KelvinCelsius.toFixed(3));
    let KelvinFahrenheit=parseFloat((kelvin.value)-273.15)* 9/5+32;
    fahrenheit.value=parseFloat(KelvinFahrenheit.toFixed(3));
}