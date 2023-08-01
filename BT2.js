let number = +prompt("Nhập vào một số")
function squareIt(number) {
    return Math.pow(number, 2);
}
let kq = squareIt(number);
console.log(`Bình phương của ${number} là: ${kq} `);