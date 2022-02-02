function convert() {
    let Cs = prompt('Введіть кількість градусів Цельсія:');
    let Celsiy = Number(Cs);
    console.log(typeof(Celsiy));

    let pounds = Cs  * 9/5+32;
    let ounces = Cs / 273;
    

    alert(`${Celsiy} градусів = ${pounds.toFixed(2)} Фаренгейт`);
    alert(`${Celsiy} градусів = ${ounces.toFixed(2)} Кельвін`);
    
}



function square()
 {
 
    let x = prompt('Введіть квадратний корінь :');
    if(x>0)
    {
        alert(Math.sqrt(x));
    }
    else 
    {
    alert ("помилка")
    }
    
    

}