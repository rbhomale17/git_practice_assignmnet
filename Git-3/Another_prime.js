let count=0;
let num=23;
for(let i=2; i<num/2; i++){
if(num%i==0){
    count++;
}
}
if(count==2){
    console.log("Prime Number")
}else{
    console.log("Not a Prime Number")
}
