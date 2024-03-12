let duplicatearray = [];

function result(){
    let originalarray = document.getElementById("info").value ;
    duplicatearray.push(originalarray);
    document.getElementById("data").innerHTML = "originalt value:" + JSON.stringify(duplicatearray);
    let filterfor = duplicatearray.filter((item,index) => duplicatearray.indexOf(item) === index);
    document.getElementById("ans").innerHTML = "remove duplicate:" + JSON.stringify(filterfor);
}