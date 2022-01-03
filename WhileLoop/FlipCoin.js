let head = 0;
let tail = 0;
while (head < 11 && tail < 11) {
    let random = (Math.floor(Math.random() * 10) % 2) + 1;
    console.log(rand);
    if (random == 1) {
        head++;
    } else {
        tail++;
    }
}
console.log("head: " + head);
console.log("tail: " + tail);