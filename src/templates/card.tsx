import React, { FC, Fragment } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const card = (
	<Fragment>
		<CardContent></CardContent>
		<CardActions>
			<Button size='small'>Learn More</Button>
		</CardActions>
	</Fragment>
);

const login: FC = () => {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>{card}</Card>
		</Box>
	);
};

export default login;
