const submitBtn = document.querySelector('#btn-submit');
const agreement = document.querySelector('#check2');

const enableSubmit = () => {
    const agreement = document.querySelector('#check2');
    submitBtn.disabled = !agreement.checked;
}

agreement.addEventListener('change', enableSubmit);

const textValidation = () => { 
    const nameInput = document.querySelector('#name').value.length;
    const emailInput = document.querySelector('#email').value.length;
    const description = document.querySelector('#description').value.length;
    if (emailInput < 10 || emailInput > 50 || nameInput < 10 || nameInput > 40 || description > 500) {
      return false;
    }
    else {
      return true;
    }
};

const handlerSubmit = (event) => {
    event.preventDefault();
    const validation = textValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}

submitBtn.addEventListener('click', handlerSubmit);
