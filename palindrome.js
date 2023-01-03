// find out given str in palindrome or not.

let str='naman'
let rev=""

for(let i=str.length-1; i>=0; i--){
    rev+=str[i];
}if(rev===str){
    console.log("Given string is Palindrome.")
}else{
    console.log("Given string is not Palindrome.")
}
