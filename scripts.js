var lettersButtons = document.getElementsByClassName("letter");
var initSentence = 'engineering'.split('');
var boxes = document.getElementsByClassName("box");
var imagelabel = document.getElementById("hangman");
var attempts = 0;
var secondSentence = [];
paint();

function finish(outcome) {
    var winbox = document.createElement("input");
    winbox.setAttribute("type", "text");
    winbox.setAttribute("value", outcome);
    document.getElementById("result").appendChild(winbox);
    document.getElementById("sentence").style.visibility = "hidden";

}

function fail() {
    if (attempts > 6) {
        finish("You lost!!");
    }
    attempts++;
    imagelabel.removeChild(imagelabel.firstChild);
    var newimg = document.createElement("img");
    newimg.setAttribute("src", "Resources/" + attempts + ".jpg");
    imagelabel.appendChild(newimg);
}

function cleanString(dirtyString) {
    var cleaned = dirtyString.split(/\s/g);
    return cleaned;
};

var letterclick = function () {
    var flag = false;
    for (var i = 0; i < initSentence.length; i++) {
        if (this.textContent == initSentence[i]) {
            boxes[i].setAttribute("value", this.textContent);
            secondSentence[i] = this.textContent;
            flag = true;
        }
    }

    if (!flag) {
        fail();
    }


    if (initSentence.join('') == secondSentence.join('')) {
        finish("You won!!");
    }
};

for (var i = 0; i < lettersButtons.length; i++) {
    lettersButtons[i].onclick = letterclick;
};



function paint() {
    for (var i = 0; i < initSentence.length; i++) {
        var box = document.createElement("input");
        box.setAttribute("size", "1em");
        box.setAttribute("disabled", "true");
        box.setAttribute("class", "box")
        document.getElementById("sentence").appendChild(box);
    };

    var firstimg = document.createElement("img");
    firstimg.setAttribute("src", "Resources/0.jpg");
    imagelabel.removeChild(imagelabel.firstChild);
    imagelabel.appendChild(firstimg);
};
