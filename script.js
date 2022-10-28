// window.alert("hello");

const url="https://raw.githubusercontent.com/Dipesh13857394/DS/main/SDS.csv";
async function getData(){
    const response = await fetch(url);
    const rawData = await response.text();
    //document.getElementById("csv").innerHTML = rawData;

    console.log(rawData);
    console.log("rawData type: " +typeof rawData);
    let arrayOne = rawData.split("\r\n");
    let header = arrayOne[0].split(",");
    let noOfRow = arrayOne.length;
    let noOfCol = header.length;
    let jsonData = [];
    let i = 0;
    let j = 0;

    // for loop (rows)
    for (i = 1; i < noOfRow - 1; i++) {
        let obj = {};
        let myNewLine = arrayOne[i].split(",");
        // nested for loop (columns)
        for (j = 0; j < noOfCol; j++) {
            obj[header[j]] = myNewLine[j];
        };
        // generate JSON
        jsonData.push(obj)
    };
    //document.getElementById("json").innerHTML = jsonData;
    
    
    let children = jsonData;
    let table = document.createElement("table");

    // function to generate table header row
    function addHeaders(table, keys) {
        let row = table.insertRow();
        for (i = 0; i < keys.length; i++) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(keys[i]));
        }
    }

    // generate table
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        // generate header row
        if (i === 0) {
            addHeaders(table, Object.keys(child));
        }
        // generate data rows
        let row = table.insertRow();
        Object.keys(child).forEach(function (k) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(child[k]));
        })
    }

    // publish table
    document.getElementById("container").appendChild(table);

    

    
}

getData();



// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 20){
//             $('header').addClass(".");        
//         }else {
//             $('header').removeClass(".");

//         }
//     })
// })



