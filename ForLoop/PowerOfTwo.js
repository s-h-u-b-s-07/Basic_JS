var readline = require('readline');
        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

rl.question("Enter the number :" , function (x) {
	var number = parseFloat(x);
	powerOfTwo(number);

            rl.close();
         });

function powerOfTwo(number){
    for (var i=0; i<=number; i++) {
        let x = (2**i);
        console.log("for : "+ i + " "+ " value : "+x);
    }
}