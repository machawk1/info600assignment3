function PostPerform(){
   
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
function Dataload(){

    

  $.ajax({
      type: "GET",
      url: "users",
      dataType: "json",
      success: function(data,status){
         console.log(data)
         
         for(property in data)
         {
              console.log(property)
              const fullName = document.getElementById('fullName').value
              const major = document.getElementById('major').value
              const date = new Date()
              const hours = date.getHours().toString().padStart(2, '0')
              const minutes = date.getMinutes().toString().padStart(2, '0')
              const time = hours + ':' + minutes
              const newEntry = time + ' - ' + fullName+ ', ' + major + ', ' + startYear
              const enteredRecords = document.getElementById('enteredRecords')
              let newChild = document.createElement('li')
              newChild.appendChild(document.createTextNode(newEntry))

              enteredRecords.appendChild(newChild)

         }
      }
  });
   
 
}
function Deletedata(){

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
