const main =[]
function result(){
    let x =document.getElementById("input").value ;
    main.push(x);
    let newvalue = main.map( (nextvalue) => nextvalue * 2 );
    document.getElementById("ans").innerHTML = "NUMBER:-" + JSON.stringify(main) ;
    document.getElementById("ans2").innerHTML ="ANSWER:-" + JSON.stringify(newvalue);
}