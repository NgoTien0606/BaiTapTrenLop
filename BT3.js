let a = +prompt("Nhập năm")
function year(a) {
    return Math.floor(a / 101) + 1;
}
let theKy = year(a);
console.log(`Năm ${a} thuộc thế kỷ ${theKy}`);