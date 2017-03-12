//
// var heightElem = document.getElementById("height");
// var formElem = document.getElementById("draw-form");

function buildPyramid(shape) {
    var x = document.getElementById("shape").value;
    document.getElementById("pyramid").innerHTML="";


}

function howHigh(height) {
    var x = document.getElementById("height").value;
    document.getElementById("pyramid").innerHTML = "";
}

function drawPyramid(height) {


    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
