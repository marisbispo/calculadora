const calculadora = document.querySelector('.calculadora');
const input = document.querySelector('.input');

calculadora.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const alvo = event.target.textContent;
    const action = event.target.dataset.action;
    input.value += alvo;
    if (!action) {
      if (input.value === '0') {
        input.value = '';
      }
    }

    if (action === 'calculate') {
      const numeros = input.value;
      const regex = /(\d+)([+-\/x])(\d+)/g;
      if (numeros.match(regex)) {
        let n1 = numeros.replace(regex, '$1').slice(0, -1);
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

  input.value = result;
}
