function result(){
    let mainamount = parseInt(document.getElementById("mainamountinput").value);
    let tipamount =  parseInt(document.getElementById("tipinput").value);
    let tipCalculate = mainamount * tipamount/100 ;
    let gst = mainamount*18/100;
    let total = mainamount+tipCalculate+gst;
    document.getElementById("amount").innerHTML = mainamount;
    document.getElementById("tipe").innerHTML = tipCalculate ;
    document.getElementById("gst").innerHTML = gst;
    document.getElementById("total").innerHTML = total;
}
