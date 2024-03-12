    function addtransaction(){
    let amount = document.getElementById("add-transaction").value;
    let text = document.getElementById("text-area").value ;
    let transaction = JSON.parse(sessionStorage.getItem("items"));

    if(transaction == null){
        transaction =[];
    }
    let type ="";
    if(amount<0){
        type ="e";
    }
    else{
        type="i";
    }

    transaction.push({
        text:text,
        amount:amount,
        type:type
    })

    sessionStorage.setItem("items",JSON.stringify(transaction));
    console.log(JSON.parse(sessionStorage.getItem("items")));
    console.log(transaction);

    let sum = 0;
    transaction.forEach((x) => {
        sum += parseInt(x.amount);

    });
    document.getElementById("main-balance").innerHTML = sum;

    let history = document.createElement("li");
    let data = document.createTextNode(text + " " + amount);
    history.appendChild(data);
    document.getElementById("list").appendChild(history);

    let money_plus = 0;
    let money_minus = 0;
    transaction.forEach((x)=>{
    if(x.type === "i"){
        money_plus += parseInt(x.amount);
    }else{
        money_minus += parseInt(x.amount);
    }
    })
    document.getElementById("total-income").innerHTML = money_plus;
    document.getElementById("total-expence").innerHTML = money_minus;
}