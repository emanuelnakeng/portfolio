import { Link } from 'react-router-dom';

function MenuLinks({ color, links, newTab }) {
	return (
		<ul className='flex'>
			{links.map((linkItem, index) => {
				return (
					<li
						key={index + '_'}
						className={`inline-flex ${color} font-normal text-sm sm:text-base text-dark-clr hover:text-dark-clr`}
					>
						<a
							className='hover:underline hover:underline-offset-2 '
							target={newTab ? '_blank' : ''}
							href={linkItem.link}
							rel='noreferrer'
						>
							{linkItem.name}{' '}
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
export default MenuLinks;
