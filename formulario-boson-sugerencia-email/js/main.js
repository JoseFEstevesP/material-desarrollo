import { fetchData } from './fetch.js';

const validate = ({ input, reEx, e, msg, name }) => {
	if (input.match(reEx) !== null) {
		e.target.classList.add('form__input--correct');
		e.target.classList.remove('form__input--error');
		e.target.nextElementSibling.classList.remove('form__inputMsg--show');
		compos[name] = true;
	} else {
		e.target.classList.remove('form__input--correct');
		e.target.classList.add('form__input--error');
		e.target.nextElementSibling.textContent = msg;
		e.target.nextElementSibling.classList.add('form__inputMsg--show');
		compos[name] = false;
	}
	if (input === '') {
		e.target.classList.add('form__input--error');
		e.target.nextElementSibling.classList.add('form__inputMsg--show');
		e.target.nextElementSibling.textContent =
			'Este campo no puede ir vacion es requerido';
		compos[name] = false;
	}
};
const reEx = {
	name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
	email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
	subject: /^[a-zA-Z0-9.,-\s]{4,50}$/,
	comments: /^[\s\S]{1,255}$/,
};
const msg = {
	name: 'El campo "Nombre" deve de contener letra',
	email: 'El campo "Correo" debe se ser un correo valido',
	subject:
		'El campo "Asunto" se compone de letra o numero, minimo 5 y maximo 50 caracteres',
	comments:
		'El campo "Comentario" se compone de minimo 10 y maximo 255 caracteres ',
};
const compos = {
	name: false,
	email: false,
	subject: false,
	comments: false,
};
form.addEventListener('submit', e => {
	e.preventDefault();
	const { name, email, subject, comments } = compos;
	if (name && email && subject && comments) {
		const { name, email, subject, comments } = e.target;
		const url = 'https://formsubmit.co/ajax/josefelixestevenpacheco@gmail.com';
		const body = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			comments: comments.value,
		};
		e.target.firstElementChild.classList.remove('form__inputMsg--showSend');
		fetchData()
			.post(url, { body })
			.then(res => {
				console.log(res.success);
				if(res.success === 'true'){
					e.target.firstElementChild.textContent = 'Mensaje enviado';
					e.target.firstElementChild.classList.add('form__inputMsg--showSend');
					e.target.firstElementChild.classList.remove('form__inputMsg--show');
				}
			})
			.catch(err => {
				console.error(err);
				e.target.firstElementChild.textContent =
					'Ocurrió un error al enviar el mensaje por favor inténtelo nuevamente.';
				e.target.firstElementChild.classList.add('form__inputMsg--show');
			});
		e.target.firstElementChild.classList.remove('form__inputMsg--show');
	} else {
		e.target.firstElementChild.textContent =
			'Ha habido un error. Por favor, llene todos los campos o recargue la página';
		e.target.firstElementChild.classList.add('form__inputMsg--show');
	}
});
form.addEventListener('keyup', e => {
	if (e.target.name) {
		validate({
			input: e.target.value,
			reEx: reEx[e.target.name],
			msg: msg[e.target.name],
			name: e.target.name,
			e,
		});
	}
});
