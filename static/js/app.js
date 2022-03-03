// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Filtered Table Function
function buildFilteredTable(){
    let filters = document.getElementsByClassName("filter");
    let data = tableData;

    for (let i = 0; i < filters.length; i++) {
        if (filters[i].value){
            data = data.filter(row => row[filters[i].id] === filters[i].value);
        }

    }
    buildTable(data);
}

//2. Attach an event to listen for changes to each filter ???
d3.selectAll(".filter").on('change', buildFilteredTable);

// // Build the table when the page loads
buildTable(tableData);