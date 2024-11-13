import Button from './Button';
import SocialLinks from './SocialLinks';
function ScreenWrap({ children }) {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<header className='bg-white'>
				<div className='container mx-auto w-full py-16 flex justify-between items-center px-5'>
					<SocialLinks color='text-dark-clr' />
					<div>
						<Button
							styles='bg-dark-clr text-white'
							label='Talk to me'
						/>
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer className='bg-white pb-10 flex justify-between items-center container mx-auto px-5 border-t-[0.1px] border-t-border-clr/40 pt-10'>
				<div>
					<h4 className='text-base font-normal text-light-clr'>
						&copy; {currentYear} All rights reserved
					</h4>
				</div>
				<SocialLinks color='text-light-clr' />
			</footer>
		</>
	);
}
export default ScreenWrap;
