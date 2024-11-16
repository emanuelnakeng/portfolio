import Button from './Button';
import MenuLinks from './MenuLinks';
import data from '../../utils/data';

function ScreenWrap({ children }) {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<header className='bg-white'>
				<div className='container mx-auto w-full py-16 flex justify-between items-center px-5'>
					<MenuLinks color='text-dark-clr' links={data.navigation} />
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
				<MenuLinks color='text-dark-clr' links={data.socials} newTab />
			</footer>
		</>
	);
}
export default ScreenWrap;
