import styles from './App.module.scss';
import { Sidebar, Feed } from '../index';

export const App = () => {
	return (
		<div className={styles.app}>
			<Sidebar />
			<Feed />
		</div>
	);
};
