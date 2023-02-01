
document.addEventListener('DOMContentLoaded', assignClickHandler)

function assignClickHandler () {
  document.getElementById('addRec').addEventListener('click', function () {
    const startYear = document.getElementById('startYear').value
    if (startYear < 2000) {
      window.alert('Incorrect year: ' + startYear)
      return
    }
    if (startYear > 2023) {
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
	
	var XR = new XMLHttpRequest();

	let addedData = "fullName=" + fullName + "&major=" + major + "&startYear=" + startYear
	XR.open("POST","http://localhost:8081/user", true);
	XR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
	XR.send(addedData);	
  })
}

document.addEventListener('DOMContentLoaded', assignClickLoad)

function assignClickLoad () {
  document.getElementById('Load').addEventListener('click', function () {
    
	var XR = new XMLHttpRequest();
	XR.onreadystatechange = function(){
		if (XR.readyState == XMLHttpRequest.DONE ) {
			if(XR.status == 200) {
				var CR = document.getElementById("CurrentRecords")
				CR.innerHTML = ""
				peopleData = JSON.parse(XR.responseText);
				for(var key in peopleData['records']){
					CR.innerHTML += (peopleData['records'][key]['id'] + " - ");
					CR.innerHTML += (peopleData['records'][key]['fullName'] + ", ");
					CR.innerHTML += (peopleData['records'][key]['major'] + ", ");
					CR.innerHTML += (peopleData['records'][key]['startYear']);
					var delButton = document.createElement('button')
					delButton.innerText = 'Delete' + " - " + peopleData['records'][key]['fullName']
					delButton.setAttribute ("id", "delete" + peopleData['records'][key]['id'])
					delButton.addEventListener('click', () => {
					    var XR = new XMLHttpRequest();
    					    XR.open("DELETE", "http://localhost:8081/user/" + peopleData['records'][key]['id']);
   					    XR.send();
					  var delButton = document.getElementById("delete" + peopleData['records'][key]['id']);
  					  var parentOfdelButton = delButton.parentElement;
  					  parentOfdelButton.removeChild(delButton);
					document.getElementById('Load').click()
					})
					document.body.appendChild(delButton)
					CR.innerHTML += "</br>"
				}
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
