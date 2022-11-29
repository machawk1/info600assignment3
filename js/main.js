document.addEventListener('DOMContentLoaded', assignClickHandler)

function assignClickHandler () {
  document.getElementById('addRec').addEventListener('click', function () {
    const startYear = document.getElementById('startYear').value
    if (startYear < 2000) {
      window.alert('Incorrect year: ' + startYear)
      return
    }
    document.addEventListener('DOMContentLoaded', assignClickHandler)

function assignClickHandler () {
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

    const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear

    const enteredRecords = document.getElementById('enteredRecords')
    let newChild = document.createElement('li')
    newChild.appendChild(document.createTextNode(newEntry))

    enteredRecords.appendChild(newChild)

    document.getElementById('inputs').reset()
  })
function dataDelete(){

    $.ajax({
      type: "DELETE",
      url: "users",
      dataType: "json",
      success: function(data,status){
         console.log(data)
  
         for(property in data)
         {
              const date = new Date()
              const hours = date.getHours().toString().padStart(2, '0')
              const minutes = date.getMinutes().toString().padStart(2, '0')
              const time = hours + ':' + minutes
              const newEntry = time + ' - ' + fullName.valueOf()+ ', ' + major.valueOf() + ', ' + startYear.valueOf()
              const enteredRecords = document.getElementById('enteredRecords')
              let newChild = document.createElement('li')
              newChild.appendChild(document.createTextNode(newEntry))
  
              enteredRecords.appendChild(newChild)
  
         }
      }
  });
        
 }

  document.getElementById('loadRecrods').addEventListener('click', function () {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/users')
    xhr.send(        )
    xhr.onload = function () {
      const data = JSON.parse(xhr.responseText)
      const enteredRecords = document.getElementById('enteredRecords')
      enteredRecords.innerHTML = ''
      for (let i = 0; i < data['records'].length; i++) {
        let newChild = document.createElement('li')
        console.log(data['records'][i])

        var newEntry = data['records'][i].fullName + ', ' + data['records'][i].major + ', ' + data['records'][i].startYear
        newChild.appendChild(document.createTextNode(newEntry))
        enteredRecords.appendChild(newChild)
      }
    }
  })
}

    const fullName = document.getElementById('fullName').value
    const major = document.getElementById('major').value

    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const time = hours + ':' + minutes

    const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear

    const enteredRecords = document.getElementById('enteredRecords')
    let newChild = document.createElement('li')
    newChild.appendChild(document.createTextNode(newEntry))

    enteredRecords.appendChild(newChild)

    document.getElementById('inputs').reset()
  })
}
