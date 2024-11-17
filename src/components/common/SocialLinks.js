function SocialLinks({ color, links, newTab }) {
	return (
		<ul className='flex'>
			{links.map((socialItem, index) => {
				return (
					<li
						key={index + '_'}
						className={`inline-flex ${color} font-normal text-sm sm:text-base text-dark-clr`}
					>
						<a
							target={newTab ? '_blank' : ''}
							className='hover:underline hover:underline-offset-2 '
							href={socialItem.link}
							rel='noreferrer'
						>
							{socialItem.name}{' '}
						</a>
						{index !== links.length - 1 && (
							<p className='px-3'>/</p>
						)}
					</li>
				);
			})}
		</ul>
	);
}
export default SocialLinks;
