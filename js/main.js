//document.addEventListener('DOMContentLoaded', assignClickHandler)

function performPost(){
   
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

    
   $.ajax({
       type:"POST",
       url: "user/",
       data: {"fullName": "document.getElementById('fullName').value",
              "major": "document.getElementById('major').value",
              "startYear": "document.getElementById('startYear').value"}
       
  })
  
}

/*function assignClickHandler () {
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
}*/

/*function loadData(){

    document.getElementById('loadData').addEventListener('click', function(){
        $.getJSON("entries_orig.json",function(obj){

            $.each(obj, function(key, value){

            $("ul").append("<li>"+value.name+"</li>");
            });
        });


    });
}*/