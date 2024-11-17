import Button from './Button';
import data from '../../utils/data';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';

function ScreenWrap({ children }) {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<header className='bg-white'>
				<div className='container mx-auto w-full py-10 flex justify-between items-center px-5'>
					<Link
						className='font-bold text-xl sm:text-2xl text-dark-clr'
						to='/'
					>
						Emanuel<span className='text-light-clr'>N.</span>
					</Link>
					<div>
						<Button
							styles='bg-dark-clr text-white'
							label='Talk to me'
							to='https://wa.me/27680682916?text=Hi'
							newTab
						/>
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer className='bg-white pb-10 flex sm:flex-row flex-col gap-5 justify-between items-center container mx-auto px-5 border-t-[0.1px] border-t-border-clr/40 pt-10'>
				<h4 className='font-normal text-dark-clr text-sm sm:text-base'>
					&copy; {currentYear} All rights reserved
				</h4>
				<SocialLinks
					color='text-dark-clr'
					links={data.socials}
					newTab
				/>
			</footer>
		</>
	);
}
export default ScreenWrap;
