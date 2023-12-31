function insert_Row() {
	const addRow = document.getElementById('sampleTable');
	const tr = document.createElement('tr');
	const td1 = document.createElement('td');
	const td2 = document.createElement('td');
	td1.textContent='New Cell';
	td2.textContent='New Cell2';
	tr.appendChild(td1);
	tr.appendChild(td2);
	addRow.insertBefore(tr, addRow.firstChild);
}
