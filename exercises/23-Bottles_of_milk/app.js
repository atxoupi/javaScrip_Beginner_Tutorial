// Your code here:
function canta(i){
    for (i;i>=0;i--){
        let num=i-1;
        if(i>1){
            console.log(i+" bottles of milk on the wall, "+i+" bottles of milk. Take one down and pass it around, "+num+" bottles of milk on the wall.");
        }
        if(i===2){
            console.log(i+" bottles of milk on the wall, "+i+" bottles of milk. Take one down and pass it around, "+num+" bottle of milk on the wall.");
        }
        if(i===1){
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }
        if(i===0){
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
    }
   
}
canta(100);
