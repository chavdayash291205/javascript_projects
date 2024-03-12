const c=[]
function result(){
    let x = document.getElementById("values").value ;
    c.push(x);
    let k = c.sort(function(a,b){return a-b});
    document.getElementById("short").innerHTML = JSON.stringify(k);
  
     let smallet = k[0]
     document.getElementById("small").innerHTML =  "Smallest number:-"+   JSON.stringify(smallet);

     let largerst = k[c.length - 1]
     document.getElementById("largest").innerHTML =   "Largest Number:-" + JSON.stringify(largerst)  
    
   

}