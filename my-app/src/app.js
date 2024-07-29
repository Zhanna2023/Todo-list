import { useState } from 'react';
import {
	useRequestAddTask,
	useRequestUpdateTask,
	useRequesDeleteTask,
	useRequesGetTodos,
} from './hooks';
import styles from './app.module.css';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const [searchQuery, setSearchQuery] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoading, todos } = useRequesGetTodos(refreshTodosFlag);

	const { isCreating, requestAddTask } = useRequestAddTask(refreshTodos);

	const { isUpdating, requestUpdateTask } = useRequestUpdateTask(refreshTodos);

	const { isDeleting, requestDeleteTask } = useRequesDeleteTask(refreshTodos);

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredTodos = todos.filter((todo) =>
		todo.content.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<h1> Список дел</h1>
				<input
					type="text"
					placeholder="Поиск..."
					value={searchQuery}
					onChange={handleSearchInputChange}
					className={styles.searchInput}
				/>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					filteredTodos.map(({ id, content }) => (
						<div className={styles.container_list} key={id}>
							{content}
						</div>
					))
				)}
				<button disabled={isCreating} onClick={requestAddTask}>
					Добавить задание
				</button>
				<button disabled={isUpdating} onClick={requestUpdateTask}>
					Обновить задание 2
				</button>
				<button disabled={isDeleting} onClick={requestDeleteTask}>
					Удалить задание 3
				</button>
			</div>
		</div>
	);
};
