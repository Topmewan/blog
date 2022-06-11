import styles from './TweetForm.module.scss';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
export const TweetForm = () => {
	return (
		<div className={styles.tweet}>
			<form className={styles.form}>
				<div className={styles.top}>
					<Avatar sx={{ width: 100, height: 100 }} />
					<input placeholder="What's happening?" />
				</div>
				<Button className={styles.button}>Tweet</Button>
			</form>
		</div>
	);
};
