const container =  document.getElementById('container');

container.addEventListener('click',(e)=>{
  makeSound(e.target.id.toUpperCase())
})

document.addEventListener('keydown',e=>{
  makeSound(e.key.toUpperCase())
})
const makeSound = (id) =>{
  document.getElementById(`${id}-sound`).play();
  setTimeout(()=>{
    document.getElementById(`${id}-sound`).pause();
  },2000)
}


