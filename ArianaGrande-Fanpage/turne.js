const Observador= new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar')
        }else {
            entry.target.classList.remove('mostrar')
        }
    })
}) 
const turne1 = document.querySelectorAll('.turne1')


turne1.forEach((element)=> Observador.observe(element))