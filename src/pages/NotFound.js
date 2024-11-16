import Button from '../components/common/Button';
import ScreenWrap from '../components/common/ScreenWrap';

function NotFound() {
	return (
		<ScreenWrap>
			<section className='container mx-auto px-5 flex flex-col gap-8 justify-center items-center gap-8 py-16 h-[50vh]'>
				<h1 className='font-bold text-6xl sm:text-8xl text-dark-clr text-center'>
					Oops <span className='text-light-clr'>Not Found</span>
				</h1>
				<h3 className='font-base text-normal sm:text-lg text-dark-clr'>
					You got lost in space.
				</h3>
				<Button
					label='Go to Home'
					to='/'
					styles='bg-dark-clr text-white'
				/>
			</section>
		</ScreenWrap>
	);
}
export default NotFound;
