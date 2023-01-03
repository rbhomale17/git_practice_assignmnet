
let num=14;
let count=0;

for(let i=1; i<=num; i++){
    if(i%num==0){
        count++;
    }
}if(count==2){
    console.log("This is Prime Number.")
}else{
    console.log("This is not Prime Number.")
}
