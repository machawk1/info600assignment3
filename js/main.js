document.addEventListener('DOMContentLoaded', assignClickHandler)

function assignClickHandler(){
   
  const startYear = document.getElementById('startYear').value
  if (startYear < 2000 || startYear > 2022) {
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
      data: {"fullName": fullName,
              "major": major,
              "startYear": startYear}
      
  })

  }


function newData(){

  $.ajax({
      type: "GET",
      url: "users",
      success: function(data,status){

         var response = JSON.parse(data);
         for(property in response)
         {
              const newEntry = time + ' - ' + fullName + ', ' + major + ', ' + startYear
              const enteredRecords = document.getElementById('enteredRecords')
              let newChild = document.createElement('li')
              newChild.appendChild(document.createTextNode(newEntry))

              enteredRecords.appendChild(newChild)

         }
      }
  });
   
 
}
