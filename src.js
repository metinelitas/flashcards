document.getElementById("text_box").innerHTML = 'j:next  k:translation';

var arr;
var index = 0;
var prev_index = 0;
var state = 0; // 0 word 1 translation 

readFile(function(data){arr = data});

$(document).keydown(function(e) {
    // console.log(e.which);


    if (e.which == 74) // j
    {
        if (arr.length == 1)
            index = 0
        else 
        {
            while(index == prev_index)
                index = Math.floor(Math.random()*arr.length)
        }
        prev_index = index;
        var item = arr[index];
        $('#text_box').html(item[0]);
    }
    if (e.which == 75) //k
    {
        var item = arr[index];
        if (state == 0)
        {
            $('#text_box').html(item[0]);
            state = 1;
        }
        else
        {
            $('#text_box').html(item[1]);
            state = 0;  
        }
    }
});

function readFile(callback)
{
    $.get('words.csv', function(data) {
        var arr = $.csv.toArrays(data);
        
        callback(arr);
    }, "text");
}

function openWikiDutch() 
{
    var url = "https://en.wiktionary.org/wiki/" + arr[index][0] + "#Dutch"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}
function openWikiEnglish() 
{
    var url = "https://en.wiktionary.org/wiki/" + arr[index][0] + "#English"
    console.log("open wiki");
    console.log(url);
    window.open(url);
}
