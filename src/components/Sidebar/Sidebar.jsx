import styles from './Sidebar.module.scss';
import { SidebarOption } from './SidebarOption/SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const opt = [
	{
		id: 1,
		text: 'Home',
		Icon: HomeIcon,
	},
	{
		id: 2,

		text: 'Explore',
		Icon: SearchIcon,
	},
	{
		id: 3,
		text: 'Notification',
		Icon: NotificationsNoneIcon,
	},
	{
		id: 4,
		text: 'Messages',
		Icon: MailOutlineIcon,
	},
	{
		id: 5,
		text: 'Bookmarks',
		Icon: BookmarkBorderIcon,
	},
	{
		id: 6,
		text: 'Lists',
		Icon: ListAltIcon,
	},
	{
		id: 7,
		text: 'Profile',
		Icon: PermIdentityIcon,
	},
	{
		id: 8,
		text: 'More',
		Icon: MoreHorizIcon,
	},
];

export const Sidebar = () => {
	const [currentOptionIdx, setCurrentOptionidx] = useState(1);

	const handeGetIdx = (idx) => {
		setCurrentOptionidx(idx);
	};

	return (
		<div className={styles.sidebar}>
			<TwitterIcon className={styles.logo} />
			{opt.map((option) => (
				<SidebarOption
					key={option?.id}
					{...option}
					currentOptionIdx={currentOptionIdx}
					onClick={handeGetIdx}
				/>
			))}
		</div>
	);
};
