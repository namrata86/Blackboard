var texts = ["UI Developer", "Mother"];
var count = 0;
function changeText() {
    $("#chngtext").text(texts[count]);
    count < 3 ? count++ : count = 0;
}
setInterval(changeText, 1000);

