import Button from '../components/common/Button';
import ScreenWrap from '../components/common/ScreenWrap';
import SingleProject from '../components/common/SingleProject';
import data from '../utils/data';
import { scrollTo, getRandomArrayItems } from '../utils/helpers';
import {
	CiPalette,
	CiMobile1,
	CiDeliveryTruck,
	CiTrophy,
} from 'react-icons/ci';

function Home() {
	const randomProjects = getRandomArrayItems(data.projects, 4);

	return (
		<ScreenWrap>
			<section className='container mx-auto px-5 flex flex-col gap-8 py-16'>
				<h3 className='text-xl font-semibold text-dark-clr'>
					Hello! I'm a Software Developer.
				</h3>
				<h1 className='font-bold text-6xl sm:text-8xl text-dark-clr lg:w-11/12'>
					Building efficient solutions with quality code and{' '}
					<span className='text-light-clr'>creative solutions</span>
				</h1>
				<div className='flex pt-10 gap-5'>
					<Button
						label='WhatsApp'
						styles='bg-dark-clr text-white'
						to='https://wa.me/27680682916?text=Hi'
						newTab
					/>
					<Button
						label='About me'
						styles='border-2 border-border-clr'
						onClick={() => scrollTo('about')}
					/>
				</div>
			</section>
			<section
				className='container mx-auto px-5 flex flex-col gap-5 pt-16 pb-10'
				id='projects'
			>
				<h2 className='font-bold text-3xl sm:text-6xl text-dark-clr'>
					Discover my popular work
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-8'>
					{randomProjects.map(project => (
						<SingleProject props={project} key={project.id} />
					))}
				</div>
			</section>
			<section
				className='container mx-auto px-5 flex flex-col gap-8 py-16'
				id='about'
			>
				<h2 className='font-bold text-3xl sm:text-6xl text-dark-clr sm:w-5/6'>
					Creating intuitive and engaging user experiences
				</h2>
				<h3 className='font-normal text-base sm:text-lg text-light-clr sm:w-5/6'>
					I’m a software developer based in Gauteng, South Africa,
					dedicated to creating digital solutions that inspire,
					delight, and address real-world problems. My focus is on
					building impactful, user-centered experiences that truly
					make a difference.
				</h3>
				<div className='flex'>
					<Button
						label='My projects'
						styles='bg-dark-clr text-white'
						onClick={() => scrollTo('projects')}
					/>
				</div>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-4 pt-8'>
					{data.skills.map((skill, index) => {
						let icon;
						const size = 42;
						const color = '#030712';
						if (skill.name === 'UI/UX Design') {
							icon = <CiPalette size={size} color={color} />;
						} else if (skill.name === 'Web and Mobile App') {
							icon = <CiMobile1 size={size} color={color} />;
						} else if (skill.name === 'Development') {
							icon = <CiTrophy size={size} color={color} />;
						} else if (skill.name === 'Soft Skills') {
							icon = (
								<CiDeliveryTruck size={size} color={color} />
							);
						}
						return (
							<div
								className='flex flex-col gap-3'
								key={index + '_'}
							>
								{icon}
								<h4 className='font-semibold text-lg hover:cursor-pointer'>
									{skill.name}
								</h4>
								<p className='text-base text-light-clr hover:cursor-pointer font-base'>
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
				<h2 className='font-bold text-6xl sm:text-8xl text-dark-clr text-center'>
					Talk to me about your{' '}
					<span className='text-light-clr'>next project</span>
				</h2>
				<div className='flex pt-10 gap-5'>
					<Button
						label='WhatsApp'
						styles='bg-dark-clr text-white'
						to='https://wa.me/27680682916?text=Hi'
						newTab
					/>
					<Button
						label='My projects'
						styles='border-2 border-border-clr '
						onClick={() => scrollTo('projects')}
					/>
				</div>
			</section>
		</ScreenWrap>
	);
}
export default Home;
