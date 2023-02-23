document.getElementById("text_box").innerHTML = 'j:next  k:translation';

var file_name = 'vocab/unit2_vocab2.csv'

var arr;
var index = 0;
var prev_index = 0;
var state = 0; // 0 word 1 translation 

readFile(function (data) { arr = data });


$(document).keydown(function (e) {
    // console.log(e.which);

    if (e.which == 74) // j
    {
        next();
    }
    if (e.which == 75) //k
    {
        reveal();
    }
    if (e.which == 78) //n
    {
        openWikiDutch();
    }
    if (e.which == 77) //m
    {
        openWikiEnglish();
    }


});

function readFile(callback) {
    $.get(file_name, function (data) {
        var arr = $.csv.toArrays(data);

        callback(arr);
    }, "text");
}

function removeArticle(word) {

    splitted = word.split(" ")

    if (splitted.length == 2) {
        if (splitted[0] == "het" || splitted[0] == "de") {
            splitted.shift()
            return splitted
        }
    }

    return word
}

function openWikiDutch() {
    word = removeArticle(arr[index][0])

    var url = "https://en.wiktionary.org/wiki/" + word + "#Dutch"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}
function openWikiEnglish() {
    word = arr[index][0]
    var url = "https://en.wiktionary.org/wiki/" + word + "#English"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}

function openYouglishDutch() {
    word = removeArticle(arr[index][0])
    var url = "https://youglish.com/pronounce/" + word + "/dutch?"
    window.open(url);
}

function openYouglishEnglish() {
    word = arr[index][0]
    var url = "https://youglish.com/pronounce/" + word + "/english?"
    window.open(url);
}


function next() {
    $('#text_box2').html("");
    if (arr.length == 1)
        index = 0
    else {
        while (index == prev_index)
            index = Math.floor(Math.random() * arr.length)
    }
    prev_index = index;
    showWord();
    state = 0;
}

function showWord() {
    var item = arr[index];
    $('#text_box').html(item[0]);
    var element = document.getElementById("text_box");
    element.style.backgroundColor = "#FFFFFF";
}

function showTranslation() {
    var item = arr[index];
    $('#text_box2').html(item[1]);
    var element = document.getElementById("text_box2");
    element.style.backgroundColor = "#FFFFFF";
}


function reveal() {

    if (state == 0) {
        showTranslation();
        state = 1;
    }
    else {
        showWord();
        state = 0;
    }


}
