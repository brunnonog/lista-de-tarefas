function adicionarTarefa(listId, inputId){
    const listTarefas = document.getElementById(listId)
    const txtTarefa = document.getElementById(inputId)
    const novaTarefa = txtTarefa.value.trim()

    if (novaTarefa !== ''){                                 //se o input não estiver vazio
      const criaList = document.createElement('li')         //cria um elemento de lista (li)
      criaList.textContent = novaTarefa                     //define o conteúdo do elemento criado como o input de texto

      const botaoRemover = document.createElement('button') //cria o botão para remover itens, adicionando o conteúdo e o nome da classe
      botaoRemover.textContent = 'Remover'                  
      botaoRemover.className = 'botao-remove-tarefa'
      
      botaoRemover.onclick = function(){                    //define a chamada para a função que removerá o item da lista
        listTarefas.removeChild(criaList)
      }

      criaList.appendChild(botaoRemover)                    //o botão de remover é definido como um elemento filho do item da lista
      listTarefas.appendChild(criaList)                     //adiciona o item como elemento da lista
      txtTarefa.value = ''
    }
  }

