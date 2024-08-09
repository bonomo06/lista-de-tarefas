const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),
      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd'),
      }
    },
    mes: dayjs(data).format('MMMM'),
    hora: dayjs(data).format('HH:mm')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Capturar elementos do DOM
  const btnSalvar = document.getElementById('btn');
  const inputAtividade = document.querySelector('input[name="atividade"]');
  const selectDia = document.getElementById('dia');
  const selectHorario = document.getElementById('horario');
  const sectionAtividades = document.getElementById('a');
  const sectionAtividadesFinalizadas = document.getElementById('ac');

  // Função para adicionar uma nova atividade
  const adicionarAtividade = () => {
      const atividade = inputAtividade.value;
      const dia = selectDia.value;
      const horario = selectHorario.value;

      if (atividade === '') {
          alert('Por favor, insira uma atividade.');
          return;
      }

      // Criar novo elemento de lista
      const li = document.createElement('li');
      li.textContent = `${atividade} - ${dia} - ${horario}`;

      li.style.marginTop = '1rem';
      li.style.display = 'flex';
      li.style.alignItems = 'left';
      li.style.minWidth = '100%';

      const existe = () => {
        const atividades = document.querySelectorAll('li');
        for (let i = 0; i < atividades.length; i++) {
            if (atividades[i].textContent === `${dia} - ${horario}`) {
                alert('Atividade já existente');
                return true;
            }
        }
        return false;
    }

    if (existe()) {
      return;
  }

      //Criar imagem de concluir

      const imgConcluir = document.createElement('img');
      imgConcluir.src = 'imgs/unchecked.png';
      imgConcluir.alt = 'Concluir';
      imgConcluir.addEventListener('click', () => {
          if (li.parentElement === sectionAtividades) {
              imgConcluir.src = 'imgs/checked.png';
              sectionAtividadesFinalizadas.appendChild(li);
          } else {
              sectionAtividades.appendChild(li);
              imgConcluir.src = 'imgs/unchecked.png';
          }
      });

      imgConcluir.style.marginTop = '0.3rem';
      imgConcluir.style.height = '1rem';
      imgConcluir.style.marginLeft = '1rem'; 


      /*const inputnew = document.createElement('input');
      inputnew.type = 'checkbox';
      inputnew.addEventListener('change', () => {
          if (inputnew.checked) {
            sectionAtividadesFinalizadas.appendChild(li);
          } else if (inputnew.checked === false) {
            sectionAtividades.appendChild(li);
          }
        });
          else {
              li.style.textDecoration = 'none';
          }
      inputnew.style.marginTop = '0.3rem';
      inputnew.style.marginLeft = '1rem';
      inputnew.style.width = '1rem';
      inputnew.style.height = '1rem';
      inputnew.style.cursor = 'pointer';
      inputnew.style.borderRadius = '0.25rem';
      inputnew.style.inset = '0';*/


      // Criar botão de remover
      const btnRemover = document.createElement('img');
      btnRemover.src = 'imgs/lixopng.png';
      btnRemover.alt = 'Remover';
      btnRemover.addEventListener('click', () => {
          if (li.parentElement === sectionAtividades) {
              sectionAtividades.removeChild(li);
          }
          else if (li.parentElement === sectionAtividadesFinalizadas) {
              sectionAtividadesFinalizadas.removeChild(li);
          }
      });

      // Adicionar estilização do botão remover
      btnRemover.style.marginLeft = '1rem';
      btnRemover.style.cursor = 'pointer';

      // Adicionar botão de remover ao elemento de lista
      li.appendChild(imgConcluir);
      li.appendChild(btnRemover);

      // Adicionar elemento de lista à seção de atividades
      sectionAtividades.appendChild(li);


      // Limpar campos de entrada
      inputAtividade.value = '';
      selectDia.selectedIndex = 0;
      selectHorario.selectedIndex = 0;
  };

  // Adicionar evento ao botão de salvar
  btnSalvar.addEventListener('click', adicionarAtividade);
});








/*
const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),
      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd'),
      }
    },
    mes: dayjs(data).format('MMMM'),
    hora: dayjs(data).format('HH:mm')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Capturar elementos do DOM
  const btnSalvar = document.getElementById('btn');
  const inputAtividade = document.querySelector('input[name="atividade"]');
  const selectDia = document.getElementById('dia');
  const selectHorario = document.getElementById('horario');
  const sectionAtividades = document.getElementById('a');
  const sectionAtividadesFinalizadas = document.getElementById('ac');

  // Função para adicionar uma nova atividade
  const adicionarAtividade = () => {
      const atividade = inputAtividade.value;
      const dia = selectDia.value;
      const horario = selectHorario.value;

      if (atividade === '') {
          alert('Por favor, insira uma atividade.');
          return;
      }

      // Criar novo elemento de lista
      const li = document.createElement('li');
      li.textContent = `${atividade} - ${dia} - ${horario}`;

      li.style.marginTop = '1rem';
      li.style.display = 'flex';
      li.style.alignItems = 'left';
      li.style.minWidth = '100%';

      // Criar imagem de concluir
      const imgConcluir = document.createElement('img');
      imgConcluir.src = 'path/to/your/image.png'; // Substitua pelo caminho da sua imagem
      imgConcluir.alt = 'Concluir';
      imgConcluir.addEventListener('click', () => {
          if (li.parentElement === sectionAtividades) {
              sectionAtividadesFinalizadas.appendChild(li);
          } else {
              sectionAtividades.appendChild(li);
          }
      });

      // Adicionar estilização à imagem de concluir
      imgConcluir.style.marginTop = '0.3rem';
      imgConcluir.style.marginLeft = '1rem';
      imgConcluir.style.width = '1rem';
      imgConcluir.style.height = '1rem';
      imgConcluir.style.cursor = 'pointer';
      imgConcluir.style.borderRadius = '0.25rem';

      // Criar botão de remover
      const btnRemover = document.createElement('button');
      btnRemover.textContent = 'Remover';
      btnRemover.addEventListener('click', () => {
          sectionAtividades.removeChild(li);
      });

      // Adicionar estilização do botão remover
      btnRemover.style.backgroundColor = '#0922b3';
      btnRemover.style.color = '#fff';
      btnRemover.style.border = 'solid 1px #0922b3';
      btnRemover.style.borderRadius = '0.25rem';
      btnRemover.style.padding = '0.5rem';
      btnRemover.style.marginLeft = '1rem';
      btnRemover.style.cursor = 'pointer';

      // Adicionar imagem de concluir e botão de remover ao elemento de lista
      li.appendChild(imgConcluir);
      li.appendChild(btnRemover);

      // Adicionar elemento de lista à seção de atividades
      sectionAtividades.appendChild(li);

      // Limpar campos de entrada
      inputAtividade.value = '';
      selectDia.selectedIndex = 0;
      selectHorario.selectedIndex = 0;
  };

  // Adicionar evento ao botão de salvar
  btnSalvar.addEventListener('click', adicionarAtividade);
});*/ 