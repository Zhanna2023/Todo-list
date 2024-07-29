import { useState } from 'react';

export const useRequestUpdateTask = (refreshTodos) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTask = () => {
		setIsUpdating(true);

		fetch('http://localhost:3001/todos/2', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				content: 'Задание 2-новое',
			}),
		})
			.then((rawResponse) => rawResponse.json)
			.then((response) => {
				console.log('Задание 2-обновилось, ответ сервера', response);
				refreshTodos();
			})
			.finally(() => setIsUpdating(false));
	};
	return {
		isUpdating,
		requestUpdateTask,
	};
};
