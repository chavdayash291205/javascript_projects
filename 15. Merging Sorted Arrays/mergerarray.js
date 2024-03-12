const list1 = ["2","4","5","6","7","4"]
const list2 = ["11","23","45","34","54"]
const main = []
function result(){
    let number = list1.concat(list2);
    main.push(number);
    document.getElementById("ans").innerHTML = main ;

}