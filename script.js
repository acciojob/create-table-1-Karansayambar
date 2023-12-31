function insert_Row() {
    const addRow = document.getElementById('sampleTable');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    // Clear existing content of the cells
    td1.textContent = '';
    td2.textContent = '';

    // Set new content for the cells
    td1.textContent = 'New Cell1';
    td2.textContent = 'New Cell2';

    // Append the table cells to the table row
    tr.appendChild(td1);
    tr.appendChild(td2);

    // Insert the new row at the top of the table
    addRow.insertBefore(tr, addRow.firstChild);
}

