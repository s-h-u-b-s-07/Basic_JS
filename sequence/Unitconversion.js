// if 1ft = 12in then 42in = ?ft

let In = 42;
let conversion = (In/12);
console.log("42 In = "+ conversion);

// area from feet to meter
// 1feet = 0.3048
// for an approximate result, divide the length value by 3.281

let length = 60;
let breadth = 40;
let AreaF=(length*breadth);
console.log("Area into feets: " +AreaF);
let AreaM=(AreaF/3.281);
console.log("Area into Metre : " + AreaM);

//Area of 25 plot in acres
// 1 sq.meter = 0.000247105
// for an approximate result, divide the area value by 4047

let AreaM2= (AreaM*25);
console.log("Area of 25 plots in meters: "+ AreaM2);
let AreaA= (AreaM2/4047);