function synch() {

    
    $('#leftframe').height($('#leftframe').contents().height());
    $('#leftframe').width($('#tumblrfeed').width());
    

    setHeight($('.twitter-timeline'), $('#leftframe'));
}

setInterval(synch, 500);

// sets height of element 1 to equal the height of element 2
function setHeight(elem1, elem2) {
    var height = elem2.height()
    elem1.css('height', height);
}


var tlog = "";

function lookforchanges() {
    $.get("http://xcampus.tumblr.com/js", checkdiff);
}

function checkdiff(data) {
    if (data) {
        if (data.responseText != tlog) {
            tlog = data.responseText;
            document.getElementById("leftframe").contentDocument.location.reload(true);
            // $( ".tumblframe" ).remove();
            // $("body").append("<iframe src='http://ydntech.github.io/YDNInauguration/jslook.html' class='tumblframe'><\/iframe>");
        }
    }
}

setInterval(lookforchanges, 30000);




! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");