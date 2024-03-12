function result(){
    let inrr= document.getElementById("rupis").value ;
    let dollor = document.getElementById("dollor").value ;
    let inr =  parseFloat(dollor*83)  ;
    let usd = inrr/83 ;
    document.getElementById("rupiya").innerHTML = "inr:-" + inr;
    document.getElementById("dollo").innerHTML = "usd:-" + usd;
}