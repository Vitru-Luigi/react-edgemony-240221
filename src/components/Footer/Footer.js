import './Footer.scss';
import PropTypes from 'prop-types';
import date from '../../utils/getYear';

const Footer = ({ company }) => {
	return (
		<footer className='Footer'>
			<nav>
				{date} &copy; {company}
			</nav>
		</footer>
	);
};

Footer.propTypes = {
	company: PropTypes.string.isRequired,
};

export default Footer;
