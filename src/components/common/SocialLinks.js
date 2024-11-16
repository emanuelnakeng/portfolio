import data from '../../utils/data';

function SocialLinks({ color }) {
	return (
		<ul className='flex'>
			{data.socials.map((social, index) => {
				return (
					<li
						key={index + '_'}
						className={`inline-flex ${color} font-normal text-sm sm:text-base text-dark-clr hover:text-dark-clr`}
					>
						<a
							className='hover:underline hover:underline-offset-2 '
							href={social.link}
							target='_blank'
							rel='noreferrer'
						>
							{social.name}{' '}
						</a>
						{index !== data.socials.length - 1 && (
							<p className='px-3'>/</p>
						)}
					</li>
				);
			})}
		</ul>
	);
}
export default SocialLinks;
