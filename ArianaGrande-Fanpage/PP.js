const observador= new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar')
        }else {
            entry.target.classList.remove('mostrar')
        }
    })
}) 
const noticias = document.querySelectorAll('.noticias')


noticias.forEach((element)=> observador.observe(element))





const Observador= new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar')
        }else {
            entry.target.classList.remove('mostrar')
        }
    })
}) 
const albumTruly = document.querySelectorAll('.albumTruly')


albumTruly.forEach((element)=> Observador.observe(element))