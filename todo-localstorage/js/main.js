const formTarea = document.getElementById('formTarea');
const CnTodo = document.getElementById('CnTodo');
const TmTodo = document.getElementById('TmTodo').content;
const msg = document.getElementById('msg');
let todo = [];
formTarea.addEventListener('submit', e => {
	e.preventDefault();
	const { tarea } = e.target;
	msg.classList.remove('msg--show');
	if (!tarea.value.trim()) {
		msg.classList.add('msg--show');
		return;
	}
	crearTarea(tarea.value);
	pintarTarea();
	formTarea.reset();
});
const crearTarea = tarea => {
	const objetTarea = {
		tarea,
		id: `${Date.now()}`,
	};
	todo.push(objetTarea);
};
const pintarTarea = () => {
	CnTodo.textContent = '';
	const fragment = document.createDocumentFragment();
	todo.forEach(item => {
		const clone = TmTodo.cloneNode(true);
		clone.querySelector('.tarea__text').textContent = item.tarea;
		clone.querySelector('.tarea__btn').dataset.id = item.id;
		fragment.appendChild(clone);
	});
	CnTodo.appendChild(fragment);
	localStorage.setItem('todo', JSON.stringify(todo));
};
document.addEventListener('click', e => {
	if (e.target.classList.contains('tarea__btn')) {
		todo = todo.filter(item => item.id !== e.target.dataset.id);
		pintarTarea();
	}
});
document.addEventListener('DOMContentLoaded', e => {
	if (localStorage.getItem('todo')) {
		todo = JSON.parse(localStorage.getItem('todo'));
		pintarTarea();
	}
});
