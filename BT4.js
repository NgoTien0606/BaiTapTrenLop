let a = ('Xin chao moi nguoi minh la Rikkei Academy');
console.log(a);
function chuoi(a) {
    let chuoi10 = "";
    for (i = 0; i < 10; i++) {
        chuoi10 += a[i];
    }
    return chuoi10 + "...";
}
console.log(chuoi(a));