function result(){
    let x = document.getElementById("number").value ;
    let n1=0; 
    let n2 = 1;
    let result;
 
    
for( let i = 2 ; i<=x; i++){

    
    result = n1 + n2 ;
    n1 = n2 ; 
    n2 = result ;
}
document.getElementById("ans").innerHTML = result; 
}
console.log(typeof(n1));