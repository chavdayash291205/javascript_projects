const fruit = ["manggo","apple","banana","graps"]
function result(){
    let input_value = document.getElementById("demo").value ;
    document.getElementById("output").innerHTML = fruit.indexOf(input_value) ;
}