const show1 = () => {
    document.getElementById("show1").style.display = 'block'
    document.getElementById("show2").style.display = "none";
    document.getElementById("show3").style.display = "none";
    document.getElementById("show4").style.display = "none";
}
const show2 = () => {
    document.getElementById("show2").style.display = 'block'
    document.getElementById("show1").style.display = "none";
    document.getElementById("show3").style.display = "none";
    document.getElementById("show4").style.display = "none";
}
const show3 = () => {
    document.getElementById("show3").style.display = 'block'
    document.getElementById("show1").style.display = "none";
    document.getElementById("show2").style.display = "none";
    document.getElementById("show4").style.display = "none";
}
const show4 = () => {
    document.getElementById("show4").style.display = 'block'
    document.getElementById("show1").style.display = "none";
    document.getElementById("show2").style.display = "none";
    document.getElementById("show3").style.display = "none";
}
document.getElementById("1").onclick = show1;
document.getElementById("2").onclick = show2;
document.getElementById("3").onclick = show3;
document.getElementById("4").onclick = show4;
const close1 = () => {
    document.getElementById("show1").style.display = "none";
}
const close2 = () => {
    document.getElementById("show2").style.display = "none";
}
const close3 = () => {
    document.getElementById("show3").style.display = "none";
}
const close4 = () => {
    document.getElementById("show4").style.display = "none";
}
document.getElementById("x1").onclick = close1;
document.getElementById("x2").onclick = close2;
document.getElementById("x3").onclick = close3;
document.getElementById("x4").onclick = close4;