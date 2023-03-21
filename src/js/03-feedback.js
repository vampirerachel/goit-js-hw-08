
import throttle from 'lodash.throttle';
const emailEl = document.querySelector('label [name=email]');
const messageEl = document.querySelector('label [name=message]');                                             
const formEl = document.querySelector('form');

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));

formEl.addEventListener('input', throttle(e => {
    const formData = {
        email: emailEl.value,
        message: messageEl.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500),
);
if (savedFormData) {
    emailEl.value = savedFormData.email;
    messageEl.value = savedFormData.message;

}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    if (!emailEl.value){
        alert("Please provide and email")
        return
    }
    if (!messageEl.value) {
        alert("Please type a message")
        return
    }
    localStorage.removeItem('feedback-form-state')
    messageEl.value = ""
    emailEl.value = ""
})

