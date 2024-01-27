const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.times')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['Gleiton','joão','Eldina','Luan','Elisabete','Vinicio','Nadya']
const botaoSelecionado = document.getElementById('botaoselecionado')

cursos.map((upu,pos)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c' + pos)
    novoElemento.setAttribute('class','times c1')
    novoElemento.innerHTML = upu

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaCursos.appendChild(novoElemento)
})



botaoSelecionado.addEventListener('click',(evt)=>{
    const todosOsNomes = [...document.querySelectorAll('input[type=radio]')]
    let cadaNome = todosOsNomes.filter((upu, pos, arr)=>{
          return upu.checked  
        })

 cadaNome = cadaNome[0]
 let nomePorNome = cadaNome.parentNode.parentNode.firstChild.textContent
 alert(`Você clicou no jogador ${nomePorNome} que esta na  colocação`)

//  outras opções de busca de elementos
//  *parentNode
//  *childNodes[nodeNumber]
//  *firstChild
//  *NextSibling
//  *lastChild
//  *previousSibling

    
    
    
})


