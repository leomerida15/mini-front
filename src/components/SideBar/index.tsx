/** @format */

import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeronIcon from '@mui/icons-material/Person';
// import HomeIcon from '@mui/icons-material/Home';
import NewPass from '../auth/newPass';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import LogoutIcon from '@mui/icons-material/Logout';

// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import Fab from '@mui/material/Fab';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const drawerWidth = 240;

// const StyledFab = styled(Fab)({
// 	position: 'absolute',
// 	zIndex: 1,
// 	top: -30,
// 	left: 0,
// 	right: 0,
// 	margin: '0 auto',
// });

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export default function MiniDrawer() {
	const theme = useTheme();
	const [open, setOpen] = useState<boolean>(false);

	const navigate = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [sideItems] = useState<any[]>([
		// { icon: <HomeIcon />, url: '/dash', text: 'Inicio' },
		{ icon: <PeronIcon />, url: '/dash/users', text: 'Usuarios' },
		{ icon: <HowToVoteIcon />, url: '/dash/elections', text: 'Eleciones' },
	]);

	const [nameSection, setNameSection] = useState('Inicio');

	const exit = async () => {
		const result = await Swal.fire({
			title: 'Esta seguro que desea salir?',
			showDenyButton: true,
			confirmButtonText: 'Si',
			denyButtonText: `No`,
			timer: 2000,
		});

		if (result.isConfirmed) {
			localStorage.clear();
			navigate('/');
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
						{nameSection}
					</Typography>
					<NewPass />
					<IconButton
						size='large'
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={exit}
						color='inherit'>
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer className='from-m' variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{sideItems.map(({ text, icon, url }) => {
						return (
							<Link to={url}>
								<ListItem onClick={() => setNameSection(text)} key={text}>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							</Link>
						);
					})}
					{/* <ListItem onClick={() => setNameSection(text)} key={text}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary={text} />
					</ListItem> */}
				</List>
				<Divider />
			</Drawer>

			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
			</Box>
		</Box>
	);
}
