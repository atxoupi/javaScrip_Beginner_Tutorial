function sing(){
    let song='';
    for(let i=0;i<11;i++){
        if(i===4){
            song=song+"whisper words of wisdom, ";
        }else if(i===10){
            song=song+"there will be an answer, ";
        }else{
            song=song+"let it be, ";
        }
    }
    song=song+"let it be";
    return song;
}

//Your code above ^^^

console.log(sing());