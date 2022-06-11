import styles from './SidebarOption.module.scss';

export const SidebarOption = ({
	text,
	Icon,
	id,
	currentOptionIdx,
	onClick,
}) => {
	return (
		<div
			className={`${styles.option} ${
				currentOptionIdx === id ? styles.active : ''
			}`}
			onClick={() => onClick(id)}
		>
			<Icon className={styles.icon} />
			<h2>{text}</h2>
		</div>
	);
};
