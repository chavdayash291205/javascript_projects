let asending = []
function js(){
    let x = document.getElementById("x").value;
    asending.push(x);
    let newassending = asending.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML = JSON.stringify(newassending) ;
}       