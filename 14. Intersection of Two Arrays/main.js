let array1 =[] ;
let array2 =[] ;
function result(){
    let input1 = document.getElementById("input-1").value ;
    let input2 = document.getElementById("input-2").value ;
    if (input1 != "" && input2 !="")
    {
        array1.push(input1);
        array2.push(input2);
        let input3 = [];
        
        for(let i=0 ;i < input1.length ; ++i){
            for(let j=0; j < input2.length; ++j){
                if(input1[i] == input2[j]){
                    input3.push(input1[i])
                    document.getElementById("resultm").value = input3;
                }
            }
        }
    document.getElementById("resultm").innerHTML = JSON.stringify(input3)  ;
    }
    else{
        document.getElementById("error").innerHTML ="plz enter valid element";
    }
}
