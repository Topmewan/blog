import styles from './Feed.module.scss';
import { TweetForm } from './TweetForm/TweetForm';

export const Feed = () => {
	return (
		<div className={styles.feed}>
			<div className={styles.header}>
				<h2>Home</h2>
			</div>
			<TweetForm />
		</div>
	);
};
