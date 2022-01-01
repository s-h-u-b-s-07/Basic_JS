let a =Math.floor(Math.random()*900)+100;
let b =Math.floor(Math.random()*999)+100;
let c =Math.floor(Math.random()*999)+100;
let d =Math.floor(Math.random()*999)+100;
let e =Math.floor(Math.random()*999)+100;
console.log("RandomNumbers are : " + a , b ,c ,d ,e );

if ((a > b) && (a > c) && (a > d) && (a > e)) {
    console.log(a + " is maximum number");
}else if ((b > a) && (b > c) && (b > d) && (b > e)) {
    console.log(b + " is maximum number");
}else if ((c > a) && (c > b) && (c > d) && (c > e)) {
    console.log(c + " is maximum number");
}else if ((d > a) && (d > b) && (d > c) && (d > e)) {
    console.log(d + " is maximum number");
} else {
    console.log(e + " is maximun number");
}

if ((a < b) && (a < c) && (a < d) && (a < e)) {
    console.log(a + " is minimun number");
}else if ((b < a) && (b < c) && (b < d) && (b < e)) {
    console.log(b + " is minimun number");
}else if ((c < a) && (c < b) && (c < d) && (c < e)) {
    console.log(c + " is minimum number");
}else if ((d < a) && (d < b) && (d < c) && (d < e)) {
    console.log(d + " is minimum number");
} else {
    console.log(e + " is minimum number");
}