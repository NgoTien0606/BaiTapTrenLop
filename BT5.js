let str = prompt("Nhập một từ");
function chuyenHoa(str) {
    let strN = "";
    for (i = 1; i < str.leght; i++) {
        strN += str.toLowerCase[i];
    }
    return str.toUpperCase[0] + strN;
}
console.log(chuyenHoa(str));