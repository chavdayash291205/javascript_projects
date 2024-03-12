const number = []
function result(){
    let value = parseInt(document.getElementById("input").value);
    number.push(value);
    document.getElementById("main").innerHTML = "Array:-" + JSON.stringify(number) ;
    let sum = 0;
    number.forEach(num =>{sum += num;
    })
    
    let average = sum/number.length;
    document.getElementById("ans").innerHTML ="sum of array:-" + sum  ;
    document.getElementById("ans2").innerHTML ="average of array:-" + average ;
}