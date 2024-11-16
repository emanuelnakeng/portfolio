import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

function Button({ to, label, styles, newTab, onClick }) {
	return (
		<Link
			to={to}
			onClick={onClick}
			target={newTab ? '_blank' : ''}
			className={`rounded-full  ${styles} transition ease-in-out delay-200 flex px-5 py-4 justify-between items-center`}
		>
			<p className='font-medium text-base hover:underline underline-offset-2 pr-1'>
				{label}
			</p>
			<MdArrowOutward size={18} />
		</Link>
	);
}
export default Button;
// py-3 px-8
