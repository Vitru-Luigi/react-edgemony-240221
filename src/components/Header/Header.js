import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ src, alt, name }) => {
	return (
		<header className='Header'>
			<img src={src} alt={alt} />
			<span>{name}</span>
		</header>
	);
};

Header.propTypes = {
	src: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	alt: PropTypes.string,
};

export default Header;
