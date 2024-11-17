import { useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import ScreenWrap from '../components/common/ScreenWrap';
import data from '../utils/data';

function ProjectDetails() {
	const { id } = useParams();
	const project = data.projects.find(project => project.id == id);

	return (
		<ScreenWrap>
			<section className='container lg:max-w-5xl  mx-auto px-5 lg:px-0 flex flex-col gap-5 py-8'>
				<h3 className='text-xl font-semibold text-dark-clr'>
					{project.projectName}
				</h3>
				<h2 className='font-bold text-3xl sm:text-6xl text-dark-clr'>
					{project.shortDescription}
				</h2>
			</section>
			<section className='container lg:max-w-5xl mx-auto px-5 lg:px-0 py-8 '>
				<img
					src={project.featuredImage}
					alt={project.projectName}
					className='object-cover rounded-2xl hover:cursor-pointer w-full h-[55vh] overflow-clip'
				/>
			</section>
			<section className='container lg:max-w-5xl  mx-auto px-5 lg:px-0 flex flex-col md:flex-row gap-16 pt-8 pb-16 '>
				<div className='w-full md:w-3/12 flex flex-col gap-5'>
					<div>
						<h3 className='text-xl font-semibold text-dark-clr'>
							Completed
						</h3>
						<p className='font-normal text-base sm:text-lg text-light-clr py-2 cursor-pointer'>
							{project.date}
						</p>
					</div>
					<div>
						<h3 className='text-xl font-semibold text-dark-clr'>
							Tech Stack
						</h3>
						<ul>
							{project.techStack.map((tech, index) => (
								<li
									className='font-normal text-base sm:text-lg text-light-clr py-2 cursor-pointer'
									key={index + '_'}
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
					{project.demo && (
						<div>
							<Button
								label='Open project'
								styles='bg-dark-clr text-white'
								newTab
								to={project.demo}
							/>
						</div>
					)}
				</div>
				<div className='w-full md:w-9/12 flex flex-col gap-10'>
					<div>
						<h3 className='text-2xl sm:text-4xl font-bold text-dark-clr'>
							Introduction
						</h3>
						<p className='font-normal text-base sm:text-lg text-dark-clr py-2'>
							{project.about}
						</p>
					</div>
					<div>
						<h3 className='text-2xl sm:text-4xl font-bold text-dark-clr'>
							Deliverables
						</h3>
						<p className='font-normal text-base sm:text-lg text-dark-clr py-2'>
							{project.deliverables}
						</p>
					</div>
					<div>
						<h3 className='text-2xl sm:text-4xl font-bold text-dark-clr'>
							Challenges
						</h3>
						<p className='font-normal text-base sm:text-lg text-dark-clr py-2'>
							{project.challenges}
						</p>
					</div>
					<div>
						<h3 className='text-2xl sm:text-4xl font-bold text-dark-clr'>
							Conclusion
						</h3>
						<p className='font-normal text-base sm:text-lg text-dark-clr py-2'>
							{project.conclusion}
						</p>
					</div>
				</div>
			</section>
		</ScreenWrap>
	);
}
export default ProjectDetails;
