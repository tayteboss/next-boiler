import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main``;

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
