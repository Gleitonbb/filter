const caixaNomes = document.querySelector('#caixaCursos')
const novosCursos = document.getElementById('nomeCurso')
const btn_c = [...document.querySelectorAll('.times')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['Gleiton','joão','Eldina','Luan','Elisabete','Vinicio','Nadya','Ingrid']
const botaoSelecionado = document.getElementById('botaoselecionado')
const BotaoRemover = document.getElementById('botaoRemover')
const botaoAntes = document.getElementById('AdAntes')
const botaoDepois = document.getElementById('Addepois')

let posicao = 0

const criarNomes = (novosNomes) =>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c' + posicao)
    novoElemento.setAttribute('class','times c1')
    novoElemento.innerHTML = novosNomes
    
    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')
    
    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')
    
    comandos.appendChild(rb)
    novoElemento.appendChild(comandos) 
    
    return novoElemento


}

cursos.map((upu,pos)=>{
  const novoElemento = criarNomes(upu)  
  caixaNomes.appendChild(novoElemento)
  posicao++
    })

    const ReceberEvento = () =>{
       const  todosNomes = [...document.querySelectorAll('input[type=radio]')]
       const nomePorNome = todosNomes.filter((upu,pos,arr)=>{
            return upu.checked
        })
            return nomePorNome[0]
            
    }

    botaoSelecionado.addEventListener('click',(evt)=>{
       const nomeClic = ReceberEvento()
       if(nomeClic == undefined){
       alert('[Erro] escolha um nome abaixo')
       }else{
        const cadaNome = nomeClic.parentNode.parentNode.firstChild.textContent
       alert(`nome escolhido e ${cadaNome}`)
       }
       
    })
    BotaoRemover.addEventListener('click',(evt)=>{
       const nomeClic = ReceberEvento()
       if(nomeClic == undefined){
       alert('[Erro] escolha um nome abaixo')
       }else{
        const cadaNome = nomeClic.parentNode.parentNode 
        cadaNome.remove()
       }
       
    })
    botaoAntes.addEventListener('click',(evt)=>{
        const nomeClic = ReceberEvento()
        try{
            if(novosCursos.value!=""){
                  const cadaNome = nomeClic.parentNode.parentNode 
              const remElem = criarNomes(novosCursos.value)
              caixaNomes.insertBefore(remElem,cadaNome)
            }else{
                alert("digite um nome")
            }
          }catch(ex){
           
            alert('[Erro] escolha um nome abaixo para adicionar outro nome antes')
        }
    }) 
     botaoDepois.addEventListener('click',(evt)=>{
        const nomeClic = ReceberEvento()
        try{
            if(novosCursos.value != ''){
            const cadaNome = nomeClic.parentNode.parentNode 
            const remElem = criarNomes(novosCursos.value)
            caixaNomes.insertBefore(remElem,cadaNome.nextSibling)
            }else{
                alert('Digite um nome')
            }
       
        }catch(ex){
            alert('[Erro] escolha um nome abaixo para adicionar outro nome antes')
        }
    })



//  outras opções de busca de elementos
//  *parentNode
//  *childNodes[nodeNumber]
//  *firstChild
//  *NextSibling
//  *lastChild
//  *previousSibling

    
    
    



