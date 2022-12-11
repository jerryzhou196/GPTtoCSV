console.log("PLEASE WORK")

function handleChange(div) {
    var p = $('p', div);

    if (p.toArray().length == 0) {
        console.log("PROMPT: " + div.innerHTML)
    } else {
        if (p.toArray().length > 1) {
            p.toArray().forEach((pp) => (console.log("RESPONSE: " + pp.innerHTML)));
        } else {
            console.log("RESPONSE: " + p.html());
        }
    }
}



function exportGPT() {
    $('div').filter(function () {
        return $(this).hasClass('whitespace-pre-wrap') && $(this).hasClass('flex') && $(this).hasClass('flex-col') && $(this).hasClass('items-start')
    }).toArray().forEach((div) => (handleChange(div)))
}

