(()=>{
    const App={
        HTMLElement:{
            agregar: document.getElementById('agregar'),
        },
        init:()=>{
            App.HTMLElement.agregar.addEventListener(
                'click', App.handlers.agregarLista
            )
        },
        methods:{
            agregarNota(texto){
                const cont= document.getElementById('notas')
                const newDivC=document.createElement("div")
                const newDivI=document.createElement("div")
                newDivI.classList.add('icons')
                App.methods.crearBtn(newDivI,true)
                App.methods.crearBtn(newDivI)
                newDivC.classList.add("carta")
                newDivC.innerHTML=`<p class='texto'>${texto}</p>`
                newDivC.appendChild(newDivI)
                cont.appendChild(newDivC)
                
            },
            crearBtn(icons,v=false){
                const newbtn=document.createElement('button')
                newbtn.classList.add('btn-icon')
                if (v!=true) {
                    newbtn.innerHTML='<i class="fa-solid fa-trash fa-xl"></i>'
                    newbtn.onclick=App.methods.eliminar
                }else{
                    newbtn.innerHTML='<i class="fa-regular fa-circle-check fa-xl" style="color: #2e9d06;"></i>'
                    newbtn.onclick=App.methods.tareaLista
                }
                icons.appendChild(newbtn)
            },
            eliminar(){
                const carta= this.closest('.carta')
                carta.remove()
            },
            tareaLista(){
                const carta= this.closest('.carta')
                const p= carta.querySelector('p.texto')
                if (p.classList[1]===undefined) {
                    p.classList.add('anotado')
                    this.innerHTML='<i class="fa-regular fa-circle-xmark fa-xl" style="color: #d61f1f;"></i>'
                } else {
                    p.classList.remove('anotado')
                    this.innerHTML='<i class="fa-regular fa-circle-check fa-xl" style="color: #2e9d06;"></i>'
                }
                
                
            }
        },
        handlers:{
            agregarLista(event){
                try {
                    event.preventDefault();
                    const nota=document.getElementById('nota').value
                    App.methods.agregarNota(nota)
                    document.getElementById('nota').value=""
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
    App.init();
})();