document.getElementById('phoneForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var category = document.getElementById('category').value;
  
    if (name && price && category) {
      var newRow = document.createElement('tr');
  
      var nameCell = document.createElement('td');
      nameCell.innerText = name;
      newRow.appendChild(nameCell);
  
      var priceCell = document.createElement('td');
      priceCell.innerText = price;
      newRow.appendChild(priceCell);
  
      var categoryCell = document.createElement('td');
      categoryCell.innerText = category;
      newRow.appendChild(categoryCell);
  
      var updateCell = document.createElement('td');
      var updateButton = document.createElement('button');
      updateButton.innerText = 'Tahrirlash';
      updateButton.classList.add('btn', 'btn-primary', 'btn-sm', 'mr-1');
      updateButton.addEventListener('dblclick', function (e) {
        var parentRow = e.target.closest('tr');
        var name = parentRow.getElementsByTagName('td')[0].innerText;
        var price = parentRow.getElementsByTagName('td')[1].innerText;
        var category = parentRow.getElementsByTagName('td')[2].innerText;
  
        document.getElementById('name').value = name;
        document.getElementById('price').value = price;
        document.getElementById('category').value = category;
      });
      updateCell.appendChild(updateButton);
      newRow.appendChild(updateCell);
  
      var deleteCell = document.createElement('td');
      var deleteButton = document.createElement('button');
      deleteButton.innerText = 'O`chirish';
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
      deleteButton.addEventListener('dblclick', function (e) {
        var parentRow = e.target.closest('tr');
        parentRow.remove();
      });
      deleteCell.appendChild(deleteButton);
      newRow.appendChild(deleteCell);
  
      document.getElementById('phoneTable').getElementsByTagName('tbody')[0].appendChild(newRow);
  
      document.getElementById('phoneForm').reset();
    }
  });
  