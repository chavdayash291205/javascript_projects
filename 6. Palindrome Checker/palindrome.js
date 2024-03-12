function palindrome(){
    let text = document.getElementById("add_text").value;
    let revers = text.split("").reverse("").join("");
    console.log(revers)
    if(text == ""){
        alert("please Enter text")
    }
    if(text == revers){
        document.getElementById("result").innerHTML = "this is  palidrome";
    }
    if(text <= ""){
        document.getElementById("result").innerHTML = "please Enter Text";
    }
    else{
        document.getElementById("result").innerHTML = "this is not palidrome";
    }
}