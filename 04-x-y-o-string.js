

function XO(str) {
    var array = str.split("");
    console.log(array.length)
    var x = 0;
    var o = 0;
    for(var i = 0; i<array.length; i++){
        
        if(array[i] == "x" || array[i] == "X"){
            x ++ ;
        }else if (array[i] == "O" || array[i] == "o"){
            o ++ ;
        }else {
            console.log("Not an i or x")
        
        }
    }
    var result = "";

        if (x == o ){
            result = true
        }else {
            result = false
        }


        
    
    return result
}

console.log(XO("oox"))
console.log("incomings")

