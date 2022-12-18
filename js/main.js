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
}

document.addEventListener('DOMContentLoaded', assignClickLoad)

function assignClickLoad () {
  document.getElementById('Load').addEventListener('click', function () {
    
	var XR = new XMLHttpRequest();
	XR.onreadystatechange = function(){
		if (XR.readyState == XMLHttpRequest.DONE ) {
			if(XR.status == 200) {
				document.getElementById("inputs").innerHTML = XR.responseText;
			}
			else if(XR.status == 400) {
				alert('Error 400')
			}
			else {
				alert('what')
			}
		}
        }
	XR.open("GET","http://localhost:8081/users", true);
	XR.send();
  })

}