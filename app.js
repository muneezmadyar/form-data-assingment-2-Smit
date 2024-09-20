var stds = [];

function Add() {
    let input1 = document.getElementById("input-1").value;
    let input2 = document.getElementById("input-2").value;
    let input3 = document.getElementById("input-3").value;
    let input4 = document.getElementById("input-4").value;

    let table = document.querySelector("tbody");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${input1}</td>
        <td>${input2}</td>
        <td>${input3}</td>
        <td>${input4}</td>
    `;

    table.appendChild(newRow);

    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("input-3").value = "";
    document.getElementById("input-4").value = "";

    stds.push({ name: input1, email: input2, rollNumber: input3, course: input4 });
}



function remove() {
    let tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ""; 
}
