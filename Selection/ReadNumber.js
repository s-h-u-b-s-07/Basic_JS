const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid=false;
rl.question("ENTER NUMBER FROM (1,10,100,1000,10000) : ", function(Number) {

        if (Number == 1){
            console.log("UNIT");
        }else if (Number == 10){
            console.log("TEN");
        }else if (Number == 100){
            console.log("HUNDRED");
        }else if (Number == 1000){
            console.log("THOUSAND");
        }else if (Number == 10000){
            console.log("TEN-THOUSAND");
        }else{
            console.log("INVALID INPUT");
        }
         rl.close();
});