document.addEventListener('DOMContentLoaded', assignAddRecHandler)
document.addEventListener('DOMContentLoaded', assignLoadDataHandler)

function assignAddRecHandler () {
  document.getElementById('addRec').addEventListener('click', function () {
    const startYear = document.getElementById('startYear').value
    if (startYear < 2000) {
      window.alert('Incorrect year: ' + startYear)
      return
    }
    const fullName = document.getElementById('fullName').value
    const major = document.getElementById('major').value

    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = hours + ':' + minutes

    addRecord(time, fullName, major, startYear)   
  })
}

function addRecord(time, fullName, major, startYear) {
  if (startYear >= 2000 && startYear < 2022) {
    var xhr = new XMLHttpRequest()
    xhr.open("POST", '/users/', true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          loadData()
        } else {
          alert("Failed to add record")
        }
      }
    }
  
    xhr.send("fullName="+fullName+"&major="+major+"&startYear="+startYear)
  } else {
    alert("Start year must be between 2000 and 2022")
  }
}

function addRecordToTable(time, fullName, major, startYear) {
  const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear

  const enteredRecords = document.getElementById('enteredRecords')
  let newChild = document.createElement('li')
  newChild.appendChild(document.createTextNode(newEntry))

  enteredRecords.appendChild(newChild)
  var button = document.createElement("button")
  button.type = 'button'
  button.innerHTML = "Delete"
  button.addEventListener('click', function() {
    deleteRecord(record.id) 
  })
  newChild.append(button)
  
  document.getElementById('inputs').reset()
}

function assignLoadDataHandler() {
  document.getElementById('loadData').addEventListener('click', function() {
    loadData()
  })
}

function loadData() {
  var xhr = new XMLHttpRequest()
    xhr.open("GET", "/users", true)

    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          var data = JSON.parse(this.responseText)
          displayData(data["records"])
        }
      }
    }

    xhr.send()
}

function displayData(data) {
  document.getElementById('enteredRecords').innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    var record = data[i]

    const fullName = record.fullName
    const major = record.major
    const startYear = record.startYear

    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = hours + ':' + minutes

    const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear + " "

    let newChild = document.createElement('li')
    newChild.appendChild(document.createTextNode(newEntry))

    var button = document.createElement("button")
    button.type = 'button'
    button.innerHTML = "Delete"
    button.addEventListener('click', function() {
      deleteRecord(record.id) 
    })
    newChild.append(button)

    const enteredRecords = document.getElementById('enteredRecords')
    enteredRecords.appendChild(newChild)
  }
}

function deleteRecord(recordId) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "/user/"+recordId, true)

  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        loadData()
      } else {
        alert("Failed to delete")
      }
    }
  }

  xhr.send()
}