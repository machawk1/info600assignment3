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

    const newEntry = fullName + ', ' + major + ', ' + startYear + '  '

    const enteredRecords = document.getElementById('enteredRecords')
    let newChild = document.createElement('li')

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'

    newChild.appendChild(document.createTextNode(newEntry))
    newChild.appendChild(deleteButton)

    enteredRecords.appendChild(newChild)

    document.getElementById('inputs').reset()
  })

  document.getElementById('loadRecrods').addEventListener('click', function () {
    // When the button is pressed, perform an AJAX request to the “/users” route.
    // send the request to the server
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

        var newEntry = data['records'][i].fullName + ', ' + data['records'][i].major + ', ' + data['records'][i].startYear + '  '
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete'
    
        newChild.appendChild(document.createTextNode(newEntry))
        newChild.appendChild(deleteButton)
        enteredRecords.appendChild(newChild)
      }
    }
  })
}