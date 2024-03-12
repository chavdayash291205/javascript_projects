function result(){
    let value1 = parseInt(document.getElementById("f").value );
    let value2 = parseInt(document.getElementById("c").value ) ;
    let fahrenheit = ((value2 * 9/5) + 32);
    let celsius = ((value1 - 32)*5/9 )
    document.getElementById("f").innerHTML ="" + fahrenheit;
    document.getElementById("c").innerHTML ="" + celsius;
}   