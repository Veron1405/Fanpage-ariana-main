

const myObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
}) 
const quadrado4 = document.querySelectorAll('.quadrado4')


quadrado4.forEach((element)=> myObserver.observe(element))






const observador= new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('mostrar')
        }else {
            entry.target.classList.remove('mostrar')
        }
    })
}) 
const quadrado1 = document.querySelectorAll('.quadrado1')


quadrado1.forEach((element)=> observador.observe(element))