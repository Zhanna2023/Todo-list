import React, { useEffect, useState } from 'react';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => {
				console.error('There was an error fetching the todos!', error);
			});
	}, []);

	return (
		<div>
			<h1>Список дел</h1>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
};
