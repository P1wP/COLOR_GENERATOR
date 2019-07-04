var symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// GENERATE RANDOM COLOR
function colors() {
    var hexCol = "#";
    for (var i = 0; i<6; i++){
        var random = Math.floor(Math.random()*symbols.length);

        hexCol += symbols[random];
    }

    console.log(hexCol);

    var body = document.getElementById("body");
    body.style.backgroundColor = hexCol;
    
    var hexCode = document.getElementById("hex");
    hexCode.innerHTML = "Hex Code: " + hexCol;
};

// ON BUTTON CLICK
document.getElementById("btn").addEventListener("click", colors);

