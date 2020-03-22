const baseUrl='https://swapi.co/api';
const getAllBtn = document.getElementById('getData');
const nextBtn = document.getElementById('next-planet');
const planetList = document.getElementById('planet-list');
const charsList = document.getElementById('chars-list');
const translateBtn = document.getElementById('translate');
const filmInput = document.getElementById('filmNumber');
filmInput.value=2;
let planetsUrl= baseUrl+'/planets';
let mainUrl= baseUrl+`/films/5`;
let wookie=false;
let nextUrl = '';


const fetchAll = async(url) =>{
  charsList.innerHTML='';
 return fetch(url)
  .then(response => response.json())
  .then(data =>{
    data.characters.map(char=>{
      const listItem = document.createElement('li');
    return  fetch(char)
    .then(response => response.json())
    .then( async data=>{
      const image= await fetchPic(data.name);
      let icon='';
      if(data.gender==='male'){
        icon='  <i class="fa fa-male" style="font-size:24px"></i>  ';
      }else
      if(data.gender==='female'){
        icon='  <i class="fa fa-female" style="font-size:24px"></i>  ';
      }else{
        icon='  N/A   '
      }
      listItem.innerHTML = `<img src=${image}/>`+data.name+icon+data.created;
      charsList.appendChild(listItem);
    }
     ) 
  });

})
}

const fetchPic = (name) =>{
  return fetch(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
  .then(response => response.json())
  .then(data=>{
    return data.filter(char=>char.name===name)[0].image;
  })
}


export const fetchPlanets =(url)=>{
  planetList.innerHTML='';
  return fetch(url)
  .then(response => response.json())
  .then(data=>{
    nextUrl=data.next;
    data.results.map((item)=>{
      const listItem = document.createElement('li');
      listItem.innerHTML=item.name;
      planetList.appendChild(listItem);
    })
  })
}
getAllBtn.addEventListener('click',()=>{
  fetchAll(mainUrl);
  fetchPlanets(planetsUrl)
})

nextBtn.addEventListener('click',()=>{
  fetchPlanets(nextUrl)
});


filmInput.addEventListener('change',(e)=>{
   mainUrl= baseUrl+`/films/${e.target.value}`;
});
