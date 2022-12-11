
// Collect the data that you want to save to the CSV file
const data = [
];





function handleChange(div) {
    var p = $('p', div);

    if (p.toArray().length == 0) {
        console.log("PROMPT: " + div.innerHTML)
    } else {
        if (p.toArray().length > 1) {
            p.toArray().forEach((pp) => (writeToFile("RESPONSE: " + pp.innerHTML)));
        } else {
            writeToFile("RESPONSE: " + p.innerHTML)
        }
    }
}



function writeToFile(stringToWrite, type) {
    data[type] = stringToWrite

}



function exportData() {
    // Convert the data to a string in JSON format
    const jsonData = JSON.stringify(data);

    // Encode the JSON string as base64
    const base64Data = btoa(jsonData);

    // Create a URL that can be used to download the CSV file
    const csvUrl = `data:text/csv;base64,${base64Data}`;

    // Create a link that will trigger the download when clicked
    const link = document.createElement("a");
    link.setAttribute("href", csvUrl);
    link.setAttribute("download", "data.csv");
    link.innerText = "Download CSV";

    // Append the link to the page
    document.body.appendChild(link);
}


function exportGPT() {
    $('div').filter(function () {
        return $(this).hasClass('whitespace-pre-wrap') && $(this).hasClass('flex') && $(this).hasClass('flex-col') && $(this).hasClass('items-start')
    }).toArray().forEach((div) => (handleChange(div)))
}



