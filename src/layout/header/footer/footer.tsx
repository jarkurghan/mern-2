import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>Bu yerda copyright belgisi(©) va 7-8ta so'zdan iborat gap yozilgan</div>
			<a href='#'>Terms of use</a>
			<a href='#'>Privacy Policy</a>
		</footer>
	);
};

export default Footer;
