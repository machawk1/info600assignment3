document.addEventListener('DOMContentLoaded', function () {
  assignClickHandler();
  document.getElementById('loadDataButton').addEventListener('click', loadData);
});

function assignClickHandler() {
  document.getElementById('addRec').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const startYear = parseInt(document.getElementById('startYear').value);
    
    const currentYear = new Date().getFullYear();
    if (startYear < 2000 || startYear > currentYear) {
      window.alert('Incorrect year: ' + startYear);
      return;
    }
    
    const fullName = document.getElementById('fullName').value;
    const major = document.getElementById('major').value;

    // Send an HTTP POST request
    fetch("http://localhost:8081/user/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `fullName=${encodeURIComponent(fullName)}&major=${encodeURIComponent(major)}&startYear=${encodeURIComponent(startYear)}`
    })
      .then(() => {
        // To reload data after POST
        loadData();
      })
      .catch(error => {
        console.error("Error adding record:", error);
      });

    // Clear input fields
    document.getElementById('fullName').value = '';
    document.getElementById('major').value = '';
    document.getElementById('startYear').value = '';
  });

  // Refresh event listeners for delete buttons
  document.querySelectorAll('.deleteButton').forEach(button => {
    button.removeEventListener('click', handleDelete); // Remove previous event listener
    button.addEventListener('click', handleDelete); // Add new event listener
  });
}

function handleDelete(event) {
  const userID = event.target.id;
  deleteRecord(userID);
}

function loadData() {
  // Make an AJAX GET request to fetch data from the server
  fetch("http://localhost:8081/users")
    .then(response => response.json())
    .then(data => {
      const enteredRecords = document.getElementById('enteredRecords');
      enteredRecords.innerHTML = ""; // Clear existing data
      data.records.forEach(entry => {
        const entryContainer = document.createElement('li');
        entryContainer.classList.add('entryContainer');

        const entryElement = document.createElement('li');
        entryElement.textContent = `Id: ${entry.id}, Name: ${entry.fullName}, Major: ${entry.major}, Start Year: ${entry.startYear}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('id', entry.id);
        deleteButton.className = 'deleteButton';

        entryContainer.appendChild(entryElement);
        entryContainer.appendChild(deleteButton);
        enteredRecords.appendChild(entryContainer);
      });

      assignClickHandler(); // Reattach event listeners after refreshing data
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function deleteRecord(userId) {
  fetch(`http://localhost:8081/user/${userId}`, {
    method: 'DELETE',
  })
    .then(() => {
      // After deletion, reload the data using AJAX
      loadData();
    })
    .catch(error => {
      console.error("Error deleting record:", error);
    });
}
