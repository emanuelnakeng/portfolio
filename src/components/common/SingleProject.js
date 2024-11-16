function SingleProject({ props }) {
	return (
		<article className='w-40 sm:w-8/12 h-auto '>
			<img
				src={props.featuredImage}
				alt={props.projectName}
				className='w-full h-full object-contain rounded-2xl overflow-clip'
			/>
		</article>
	);
}
export default SingleProject;
