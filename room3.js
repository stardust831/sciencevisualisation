const show1 = () => {
    document.getElementById("show1").style.right = "0%";
    document.getElementById("show2").style.right = "-100%";
    document.getElementById("show3").style.right = "-100%";
    document.getElementById("show4").style.right = "-100%";
}
const show2 = () => {
    document.getElementById("show2").style.right = "0%";
    document.getElementById("show1").style.right = "-100%";
    document.getElementById("show3").style.right = "-100%";
    document.getElementById("show4").style.right = "-100%";
}
document.getElementById("1").onclick = show1;
document.getElementById("2").onclick = show2;
const close1 = () => {
    document.getElementById("show1").style.right = "-100%";
}
const close2 = () => {
    document.getElementById("show2").style.right = "-100%";
}
document.getElementById("x1").onclick = close1;
document.getElementById("x2").onclick = close2;