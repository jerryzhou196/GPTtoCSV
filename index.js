
// Collect the data that you want to save to the CSV file
let data = [
];

let temp;
var prev = "";
var count = 0;

function handleChange(div) {

    var p = $('p', div);

    if (count % 2 == 0) {
        if (p.toArray().length == 0) {
            prev = div.innerHTML;
            console.log("PROMPT: " + div.innerHTML)
        }
    } else {
        if (p.toArray().length > 1) {
            p.toArray().forEach((pp) => (data.push({ "Question": prev, "Response": pp.innerHTML })));
        } else {
            console.log("RESPONSE: " + p.html())
            data.push({ "Question": prev, "Response": p.html() })
        }
        prev = ""
    }
    ++count
}


function exportData() {
    // // Convert the data to a string in JSON format
    // const jsonData = JSON.stringify(data);

    // // Encode the JSON string as base64
    // const base64Data = btoa(jsonData);

    // // Create a URL that can be used to download the CSV file
    // const csvUrl = `data:text/csv;base64,${base64Data}`;

    // // Create a link that will trigger the download when clicked
    // const link = document.createElement("a");
    // link.setAttribute("href", csvUrl);
    // link.setAttribute("download", "data.csv");
    // link.innerText = "Download CSV";

    // // push the link to the page
    // document.body.pushChild(link);
}


function exportGPT() {
    data = []
    $('div').filter(function () {
        return $(this).hasClass('whitespace-pre-wrap') && $(this).hasClass('flex') && $(this).hasClass('flex-col') && $(this).hasClass('items-start')
    }).toArray().forEach((div) => (handleChange(div)))

    console.log(data)
    let csv = Papa.unparse(data)
    var csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    console.log(Papa)
    csvURL = window.URL.createObjectURL(csvData);

    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();


}



