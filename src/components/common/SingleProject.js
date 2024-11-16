import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';

function SingleProject({ props }) {
	return (
		<article className='flex flex-col gap-8'>
			<Link
				className='h-auto hover:opacity-100 opacity-90 transition duration-200 ease-in-out '
				to={`/project/${props.id}`}
			>
				<img
					src={props.featuredImage}
					alt={props.projectName}
					className='w-full h-full object-cover rounded-2xl hover:cursor-pointer '
				/>
			</Link>
			<div className='flex justify-between items-center'>
				<div>
					<h3 className='text-xl font-semibold text-dark-clr'>
						{props.projectName}
					</h3>
					<p className='font-base text-base sm:text-lg text-light-clr'>
						{props.type}
					</p>
				</div>
				<Link
					className='border-2 border-border-clr transition ease-in-out delay-200 px-5 py-4 rounded-full sm:hover:scale-110'
					to={`/project/${props.id}`}
				>
					<MdArrowOutward size={20} />
				</Link>
			</div>
		</article>
	);
}
export default SingleProject;
