document.getElementById("text_box").innerHTML = 'Show word here';

var arr;
var index = 0;
var prev_index = 0;

readFile(function(data){arr = data});

$(document).keydown(function(e) {
    // console.log(e.which);


    if (e.which == 75) // k
    {
        while(index == prev_index)
            index = Math.floor(Math.random()*arr.length)
        prev_index = index;
        var item = arr[index];
        $('#text_box').html(item[0]);
    }
    if (e.which == 73)
    {
        var item = arr[index];
        $('#text_box').html(item[1]);
    }
});

function readFile(callback)
{
    $.get('words.csv', function(data) {
        var arr = $.csv.toArrays(data);
        
        callback(arr);
    }, "text");
}

