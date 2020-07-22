import { h } from 'preact';
import React from 'preact/compat';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import { AppBar, Button, List, ListItem } from 'react95';
import LogoImg from '../../assets/icons/win-95-logo.png';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<NavBar>
			<Button
				onClick={() => setOpen(!open)}
				active={open}
				style={{ fontWeight: 'bold' }}
			>
				<img
					src={LogoImg}
					alt='react95 logo'
					style={{ height: '20px', marginRight: 4 }}
				/>
				Start
			</Button>
			{open && (
				<Menu onClick={() => setOpen(false)} >
					<ListItem>
						<span role="img" aria-label="👨‍💻">👨‍💻</span>
						Coming Soon...
					</ListItem>
				</Menu>
			)}
		</NavBar>);
};

const NavBar = styled(AppBar)`
	top: initial;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	bottom: 0;
`;

const Menu = styled(List)`
	position: absolute;
	left: 0;
	bottom: 100%;
`

export default Header;
