// Ініціалізація formData. Об'єктами formData являются email и message
const formData = {
  email: "",
  message: ""
};

// Вибір елемента форми
const form = document.querySelector('.feedback-form');

// Перевіряємо, чи є збережені дані в localStorage
// Якщо є, він аналізує дані та заповнює поля форми
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  form.email.value = formData.email;
  form.message.value = formData.message;
}

// Слухач input events on the form
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обробка відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть усі поля форми');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  form.reset();
});
const input = document.querySelector('input');
if (input) { // Перевірка чи елемент існує
    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', 'Type area');
    });
    input.addEventListener('blur', () => {
        input.removeAttribute('placeholder');
    });
}