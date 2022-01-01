const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var valid=false;
rl.question("ENTER NUMBER BETWEEN (1 to 7) : ", function(Number) {

        if (Number == 1){
            console.log("MONDAY");
        }else if (Number == 2){
            console.log("TUESDAY");
        }else if (Number == 3){
            console.log("WEDNESDAY");
        }else if (Number == 4){
            console.log("THURSDAY");
        }else if (Number == 5){
            console.log("FRIDAY");
        }else if (Number == 6){
            console.log("SATURDAY");
        }else if (Number == 7){
            console.log("SUNDAY");
        }else{
            console.log("INVALID INPUT");
        }
         rl.close();
});