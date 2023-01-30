
function fetchData(){
    fetch('https://reqres.in/api/users?page=1').then(data =>{
    if(data.ok){
        console.log('successful')
    } else {
        console.log('unsuccessful')
    }
    return data.json();
    }).then((completedata)=>{
        //   console.log(completedata.data[2].email);
        let data1 = "";
        completedata.data.map((values)=>{
            data1+=`<div class="card">
            <img src="${values.avatar}" alt="img" class="images">
            <p class="name">${values.first_name}</p>
            <p class="name">${values.last_name}</p>
            <p class="email">${values.email}</p>
        </div>`
        });
        document.getElementById("cards").innerHTML=data1;
    }).catch((err)=>{
        console.log(err);
    })
    }
    
 


