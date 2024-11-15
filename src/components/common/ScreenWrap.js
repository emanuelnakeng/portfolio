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
			<footer className='bg-white pb-10 flex sm:flex-row flex-col gap-5 justify-between items-center container mx-auto px-5 border-t-[0.1px] border-t-border-clr/40 pt-10'>
				<h4 className='font-normal text-light-clr text-sm sm:text-base'>
					&copy; {currentYear} All rights reserved
				</h4>
				<SocialLinks color='text-light-clr' />
			</footer>
		</>
	);
}
export default ScreenWrap;
