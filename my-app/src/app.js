import styles from './app.module.css';
import React from 'react';
import { TodoList } from './TodoList';

export const App = () => {
	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<header className={styles.header}>
					<TodoList />
				</header>
			</div>
		</div>
	);
};
