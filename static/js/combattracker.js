// const socket = require('socket.io-client')('http://136.29.27.223:1010');

function generateCTTableRows(data) {
    const tableBody = document.querySelector("tbody");

    data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.Name}</td>
            <td>${row.Initiative}</td>
            <td>${row.Hp}</td>
            <td>${row.Tmp}</td>
            <td>${row.Wnds}</td>
        `;
        tableBody.appendChild(tr);
    });
}
let ascending = true;

function sortTable() {
    const table = document.getElementById("cttable");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const header = document.getElementById("init-header");
    switching = true;

    rows.sort((rowA, rowB) => {
        const valueA = parseInt(rowA.getElementsByTagName("td")[1].innerText);
        const valueB = parseInt(rowB.getElementsByTagName("td")[1].innerText);
  
        if (ascending) {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
  
      // Remove existing rows from the table
      rows.forEach(row => table.querySelector("tbody").removeChild(row));
  
      // Re-append sorted rows to the table
      rows.forEach(row => table.querySelector("tbody").appendChild(row));
  
      // Toggle sorting direction and update arrow indicator
      ascending = !ascending;
      header.innerHTML = `Init ${ascending ? '▼' : '▲'}`;
  }

