var brickElement = document.querySelector("#brick-type")

var heightElement = document.querySelector("#height");

var pyramidElement = document.querySelector("#pyramid");

var heightOutput = document.querySelector('#output');

var heightAmt = heightElement.value;

var brickType = brickElement.value;

window.addEventListener("load", function(event) {
    drawPyramid(11, "#");
    heightOutput.innerText = 11;
})

heightElement.addEventListener("input", function(event) {
    heightAmt = event.target.value;
    heightOutput.innerText = heightAmt;
    drawPyramid(heightAmt, brickType);

});


brickElement.addEventListener("input", function(event) {
    brickType = event.target.value;
    drawPyramid(heightAmt, brickType);
})

function drawPyramid(height, brick) {

    // first, clear the old content
    pyramidElement.innerHTML = "";

    var brickstyle = brick + brick



    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        pyramidElement.appendChild(rowElem);
    }
}
