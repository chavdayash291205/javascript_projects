function result(){
    let x = document.getElementById("number").value;
    let fleg =true ;
    for (let i = 2 ; i < x ; i++){
        if(x % i == 0){
            fleg=false;
            break;
        }
    }
    if(fleg == true){
        document.getElementById("msg").innerHTML = " prime number";
    }
    else{
        document.getElementById("msg").innerHTML = "  not prime number";
    }
}



