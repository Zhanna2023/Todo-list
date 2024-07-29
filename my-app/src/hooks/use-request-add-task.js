import { useState } from 'react';

export const useRequestAddTask = (refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTask = () => {
		setIsCreating(true);

		fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				content: 'Новое задание',
			}),
		})
			.then((rawResponse) => rawResponse.json)
			.then((response) => {
				console.log('Новое задание добавлено, ответ сервера', response);
				refreshTodos();
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddTask,
	};
};
