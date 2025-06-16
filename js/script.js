/*
Name: Mengly Lim
Course: COMP 4610 GUI I
Assignment: HW4 - Dynamic Multiplication Table with jQuery Validation
*/

$(document).ready(function () {
  console.log("jQuery loaded and DOM ready");

  $("#mult-form").validate({
    rules: {
      startCol: { required: true, number: true, min: -50, max: 50 },
      endCol:   { required: true, number: true, min: -50, max: 50 },
      startRow: { required: true, number: true, min: -50, max: 50 },
      endRow:   { required: true, number: true, min: -50, max: 50 }
    },
    messages: {
      startCol: "Please enter a value from -50 to 50.",
      endCol:   "Please enter a value from -50 to 50.",
      startRow: "Please enter a value from -50 to 50.",
      endRow:   "Please enter a value from -50 to 50."
    },
    submitHandler: function (form) {
      console.log("Form is valid. Generating table...");
      generateTable();
      return false;
    }
  });
});

function generateTable() {
  console.log("generateTable called");

  const startCol = parseInt($("#startCol").val());
  const endCol = parseInt($("#endCol").val());
  const startRow = parseInt($("#startRow").val());
  const endRow = parseInt($("#endRow").val());

  const errorDiv = document.getElementById("error-message");
  const tableContainer = document.getElementById("table-container");

  errorDiv.textContent = "";
  tableContainer.innerHTML = "";

  if (startCol > endCol || startRow > endRow) {
    errorDiv.textContent = "Start values must be less than or equal to end values.";
    return;
  }

  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th"));
  for (let col = startCol; col <= endCol; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let row = startRow; row <= endRow; row++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = row;
    tr.appendChild(th);

    for (let col = startCol; col <= endCol; col++) {
      const td = document.createElement("td");
      td.textContent = row * col;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
}

function clearTable() {
  document.getElementById("table-container").innerHTML = "";
  document.getElementById("error-message").textContent = "";
}
