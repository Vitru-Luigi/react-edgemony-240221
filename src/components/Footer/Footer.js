import date from '../../utils/getYear';
import './Footer.css';

export default function Footer(props) {
	const { company } = props;
	return (
		<footer>
			<nav>
				{date} &copy; {company}
			</nav>
		</footer>
	);
}
