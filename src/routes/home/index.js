import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import styled from 'styled-components';
import React from "preact/compat";
import underConstruction from '../../assets/icons/under-construction.gif';

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<HomeContainer  >
			<UnderConstruction src={underConstruction} alt="Under Construction!!!!!!!!!"/>
		</HomeContainer>

	);
};

const UnderConstruction = styled.img`
	margin: 20px;
`
const HomeContainer = styled.div`
	background: teal;	
	width: 100%;
	height: 100%;
	display: inline-block;
`;
export default Home;
