const calculadora = document.querySelector('.calculadora');
const input = document.querySelector('.input');

calculadora.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const alvo = event.target.textContent;
    const action = event.target.dataset.action;
    input.value += alvo;
    console.log(input.value);
    if (!action) {
      if (input.value === '0') {
        input.value = '';
      }
    }

    if (action === 'reset') {
      input.value = '';
    }

    if (action === 'del') {
      input.value = input.value.slice(0, -4);
    }

    if (action === 'calculate') {
      const numeros = input.value;
      const regex = /(^[\d.]+)([+-x\/])([\d.]+)/g;
      if (numeros.match(regex)) {
        console.log('passou');
        let n1 = numeros.replace(regex, '$1').slice(0, -1);
        console.log('n1', n1);
        let op = numeros.replace(regex, '$2').slice(0, -1);
        let n2 = numeros.replace(regex, '$3').slice(0, -1);
        calcular(n1, op, n2);
      }
    }
  }
});

function calcular(numero1, operador, numero2) {
  let result;
  if (operador === '+') {
    result = Number(numero1) + Number(numero2);
  }
  if (operador === '-') {
    result = Number(numero1) - Number(numero2);
  }
  if (operador === 'x') {
    result = Number(numero1) * Number(numero2);
  }

  if (operador === '/') {
    result = Number(numero1) / Number(numero2);
  }

  input.value = result;
}

//////////////

const radio = document.querySelector('.radio');

console.log(radio);

radio.addEventListener('change', clicouBolinha);

function clicouBolinha({ target }) {
  const name = target.value;
  if (name === '1') {
    document.documentElement.classList.remove('tema2');
    document.documentElement.classList.remove('tema3');
  }
  if (name === '2') {
    console.log('tem que mudar a cor');
    document.documentElement.classList.add('tema2');
    document.documentElement.classList.remove('tema3');
  }

  if (name === '3') {
    console.log('tem que mudar a cor');
    document.documentElement.classList.remove('tema2');
    document.documentElement.classList.add('tema3');
  }
}
