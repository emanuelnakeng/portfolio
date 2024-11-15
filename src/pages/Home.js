import Button from '../components/common/Button';
import ScreenWrap from '../components/common/ScreenWrap';
import data from '../utils/data';
import { CiPalette, CiMobile1, CiDesktop, CiTrophy } from 'react-icons/ci';

function Home() {
	return (
		<ScreenWrap>
			<section className='container mx-auto px-5 flex flex-col gap-8 py-16'>
				<h3 className='text-xl font-semibold text-dark-clr'>
					Hello! I'm Emanuel.
				</h3>
				<h1 className='font-bold text-4xl sm:text-8xl text-dark-clr sm:w-11/12'>
					Building efficient solutions with quality code and{' '}
					<span className='text-light-clr'>creative solutions</span>
				</h1>
				<div className='flex pt-10 gap-5'>
					<Button label='WhatsApp' styles='bg-dark-clr text-white' />
					<Button
						label='Email me'
						styles='border-2 border-border-clr '
					/>
				</div>
			</section>
			<section className='container mx-auto px-5 flex flex-col gap-5 pt-16 pb-10'>
				<h2 className='font-bold text-3xl sm:text-6xl text-dark-clr'>
					Discover my popular work
				</h2>
				<p>Work goes here</p>
			</section>
			<section className='container mx-auto px-5 flex flex-col gap-8 py-16'>
				<h2 className='font-bold text-3xl sm:text-6xl text-dark-clr sm:w-5/6'>
					Creating intuitive and engaging user experiences
				</h2>
				<h3 className='font-base text-base sm:text-lg text-dark-clr sm:w-5/6'>
					I'm a software developer based in Gauteng - South Africa,
					dedicated to creating digital solutions that inspire,
					delight, and solve real-world problems. I focus on building
					impactful, user-centered experiences that make a difference.
				</h3>
				<div className='flex'>
					<Button
						label='Talk to me'
						styles='bg-dark-clr text-white'
					/>
				</div>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-4 pt-5'>
					{data.skills.map((skill, index) => {
						let icon;
						const size = 42;
						const color = '#030712';
						if (skill.name === 'UI/UX Design') {
							icon = <CiPalette size={size} color={color} />;
						} else if (skill.name === 'Web and Mobile App') {
							icon = <CiMobile1 size={size} color={color} />;
						} else if (skill.name === 'Development') {
							icon = <CiDesktop size={size} color={color} />;
						} else if (skill.name === 'Soft Skills') {
							icon = <CiTrophy size={size} color={color} />;
						}
						return (
							<div className='flex flex-col gap-2'>
								{icon}
								<h4 className='font-semibold text-lg hover:cursor-pointer'>
									{skill.name}
								</h4>
								<p className='text-base text-light-clr hover:cursor-pointer font-normal'>
									{skill.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>
			<section className='container mx-auto px-5 flex flex-col gap-8 border-t-[0.1px] border-t-border-clr/40  justify-center items-center gap-8 py-16'>
				<h3 className='text-xl font-semibold text-dark-clr'>
					Have an idea?
				</h3>
				<h2 className='font-bold text-4xl sm:text-8xl text-dark-clr text-center'>
					Talk to me about your{' '}
					<span className='text-light-clr'>next project</span>
				</h2>
				<div className='flex pt-10 gap-5'>
					<Button label='WhatsApp' styles='bg-dark-clr text-white' />
					<Button
						label='Email me'
						styles='border-2 border-border-clr '
					/>
				</div>
			</section>
		</ScreenWrap>
	);
}
export default Home;
