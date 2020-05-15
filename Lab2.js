let btn = document.getElementById('btn');
  let  show = document.getElementById('Visa-data');
  

function getData() {
   let randomNumber= Math.floor((Math.random()*83)+1);
   // var xRqe = XMLHttpRequest();
 //xRqe.open('Get','https://swapi.dev/api/people/'+randomNumber+'/');
   //xRqe.onload = function(){
        //var xdata = JSON.parse(xRqe.responseText);
        
    axios.get('https://swapi.dev/api/people/'+randomNumber+'/').then(function(respons){
            addTillHtml(respons.data)
        })
    
        
      // addTillHtml(xdata);
   // };
   //xRqe.send();

          
};


function addTillHtml(data){

        let info ='<p>'+ 'Name : ' + data.name + '<br>'+'Gender : '+data.gender+'<br>'+'Height : '+data.height+'<br>'+'Mass :'+data.mass+'<br>'+'birth_year : '+ data.birth_year+'<br>'+'hair_color : '+data.hair_color+'<br>'+'eye_color : '+data.eye_color+'</p>';
        show.innerHTML = info;
    if(show.innerHTML !== "")
        {
            $("#LäggTill").css({"visibility":"visible"});
        }
    
  

    };
    btn.addEventListener('click', getData );

let  läggTill = document.getElementById('LäggTill');
let peopleLista = document.getElementById('peoplelist');
läggTill.addEventListener('click',event=>{
   
     $("#favorit-lista").css({"visibility":"visible"});
    let newItem = document.createElement('li');
    
    peopleLista.appendChild(newItem);
    newItem.innerHTML = show.innerHTML+'<br> <hr> <br>';
    
 
   // let favoritPerson = show.innerHTML;
   // peopleLista.appendChild(skapaItem(favoritPerson)) ;'
});

//function skapaItem(favoritPerson){
   // let newli = document.createElement('li');
   // newli.innerHTML = favoritPerson;
//}

 
















