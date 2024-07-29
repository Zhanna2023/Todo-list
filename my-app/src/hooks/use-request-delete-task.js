import { useState } from 'react';

export const useRequesDeleteTask = (refreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteTask = () => {
		setIsDeleting(true);

		fetch('http://localhost:3001/todos/3', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json)
			.then((response) => {
				console.log('Задание 3 - удалилось, ответ сервера', response);
				refreshTodos();
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requestDeleteTask,
	};
};
