//document.addEventListener('DOMContentLoaded', assignClickHandler)
//var load = document.getElementById('loadData');
//if(load){

   // load.addEventListener('click', loadData);
//}



function performPost(){
   
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

function loadData(){

    

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

    
        
