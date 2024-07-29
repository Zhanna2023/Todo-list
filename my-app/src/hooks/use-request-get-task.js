import { useEffect, useState } from 'react';

export const useRequesGetTodos = (refreshTodosFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3001/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.catch((error) => {
				console.error('Произошла ошибка при загрузке файла !', error);
			})

			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return {
		isLoading,
		todos,
	};
};
