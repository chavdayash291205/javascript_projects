const data = []
const even = []
const odd = []
function result(){
    let x = document.getElementById("value").value ;
    data.push(x);
  
    if(x % 2==0)
    {
      even.push(x);
    }
    else{
    odd.push(x);
    }
    document.getElementById("main").innerHTML =  JSON.stringify(data) ;
    document.getElementById("even").innerHTML = "EVEN NUMBER:-" +  JSON.stringify(even)   ;
    document.getElementById("odd").innerHTML =  "ODD NUMBER:-" +  JSON.stringify(odd)  ;
}