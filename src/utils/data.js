const data = {
	socials: [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/emanuel-nakeng',
		},
		{ name: 'X', link: 'https://x.com/emanuel_nakeng' },
		{ name: 'Github', link: 'https://github.com/emanuelnakeng/' },
	],
	navigation: [
		{ name: 'Home', link: '/', internal: true },
		{ name: 'About', link: 'about', internal: true },
		{ name: 'Projects', link: 'projects', internal: true },
	],
	projects: [
		{
			featuredImage: require('../assets/Todo App.png'),
			screens: [],
			projectName: 'Todo App',
			type: 'UI/UX Design',
			shortDescription: 'Organise and prioritise your tasks',
			about: `The goal of the Todo App UI design project was to create a minimalist and modern interface that prioritises usability and efficiency. By focusing on simplicity, the design ensures a clean layout, reduces loading times, and enhances user focus.`,
			demo: 'https://www.figma.com/proto/EvjogGr0SuOVpV34dlWJzq/Todo-App?node-id=1-92&node-type=canvas&t=reXMqYNIoC1ZCNIi-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A91&starting-point-node-id=1%3A92',
			date: 'June 2024',
			techStack: ['Figma Design'],
			challenges:
				'One of the main challenges was balancing simplicity with functionality. While the goal was to maintain a minimalist design, it was crucial to ensure that all essential features were easily accessible. Another challenge involved optimising the design for adaptability across various devices and screen sizes.',
			conclusion:
				'The minimalist approach offers a sleek, modern aesthetic while ensuring intuitive navigation and interactive functionality. By incorporating a clear visual hierarchy, the design enhances efficiency, enabling users to manage tasks effectively.',
			id: 1,
			deliverables:
				'The final design includes a clean, minimalist interface that enhances focus and reduces loading times. Intuitive navigation, supported by clear icons and consistent labels, allows users to easily find and manage their tasks.',
		},

		{
			featuredImage: require('../assets/Nibbble Web App.png'),
			projectName: 'Nibbble Recipes',
			type: 'Web Application',
			shortDescription: 'Discover and enjoy delicious recipes',
			about: 'The Nibbble Project focused on developing a recipe web app using React.js and the Free Meal API. It provided hands-on experience with React fundamentals, component-based architecture, and API integration. The app enables users to search for recipes, view detailed meal information, and explore new meals. ',
			demo: 'https://nibbbleapp.netlify.app/',
			date: 'October 2024',
			techStack: [
				'Figma Design',
				'React.js',
				'Fetch API',
				'TailwindCSS',
				'React Router DOM',
			],
			challenges: `During development, I overcame several challenges to enhance functionality and user experience. To address the Free Meal API's limited data, I added error handling to notify users of missing information. Managing asynchronous API requests was streamlined with loading states in React, ensuring users stayed informed during data retrieval. For multi-page navigation, I resolved React Router issues by using URL parameters, enabling smooth transitions and accurate recipe details.`,
			conclusion:
				'Through this project, I gained valuable skills in React fundamentals, improving my understanding of components, props, state management, and using hooks like useState and useEffect. I tackled challenges in managing data flow and React Router, gaining insights into multi-page applications and effective data passing. I also learned responsive design basics using Flexbox and CSS Grid, ensuring a seamless experience on both desktop and mobile. Overall, the Nibbble Project enhanced my React and front-end development knowledge, motivating me to explore more advanced projects and refine my skills.',
			id: 2,
			deliverables: `The app offers a user-friendly experience with features like recipe search by name or ingredient, detailed recipe views with instructions and videos, seamless navigation via React Router, and options to save favorites and revisit recent recipes.`,
		},
		{
			featuredImage: require('../assets/Weru Mobile App.png'),
			projectName: 'Weru Smart Mobile Wallet',
			type: 'Mobile Application',
			shortDescription: 'Keep all your cards in one place',
			about: 'Weru is a cross-platform mobile wallet app developed with React Native and Expo, enabling iOS and Android compatibility. It allows users to store and manage unlimited loyalty cards in one convenient, easy-to-use platform, simplifying access to rewards.',
			demo: '',
			date: 'September 2024',
			techStack: [
				'React Native',
				'Expo SDK',
				'React Navigation',
				'Zustand',
				'Reanimated',
				'React Native Lottie',
				'Firebase',
			],
			challenges:
				'During development, two key challenges emerged. First, implementing a scalable state management solution was initially complex, but adopting Zustand, a minimal and efficient state management tool, streamlined the process and kept the codebase clean. Second, customising the barcode scanning functionality to ensure accuracy across various devices required extensive testing. Leveraging Expo’s Barcode Scanner package, I successfully implemented a reliable solution compatible with both iOS and Android platforms.',
			conclusion:
				'The Weru project emphasised simplicity, modularity, and user-centric design. An intuitive interface, reusable components, and features like anonymous login, barcode scanning, and theme customisation enhanced accessibility and personalisation. Performance optimisations ensured fast, efficient operation, even with multiple cards. This lightweight, scalable app showcases skills in React Native and Expo, serving as a strong template for similar solutions.',
			id: 3,
			deliverables: `Users can add and manage an unlimited number of loyalty cards, with quick access to each card. A built-in barcode scanner simplifies adding new cards, while customisable light and dark themes allow personalisation. The app’s bottom navigation ensures intuitive access to all major sections, and anonymous login enables users to start using the app immediately without the need for account creation, ensuring convenience and accessibility.`,
		},
		{
			featuredImage: require('../assets/Resume Builder.png'),
			screens: [],
			projectName: 'Resume Builder',
			type: 'UI/UX Design',
			shortDescription: 'Craft professional resumes',
			about: 'The Resume Builder UI design aimed to provide users with a streamlined, intuitive platform to create professional resumes quickly and efficiently. The design focused on simplicity, user-friendliness, and an engaging experience, ensuring that users can easily build a polished resume without feeling overwhelmed. The interface features clean layouts and an accessible workflow to help users present their skills and experience in a clear and professional manner.',
			demo: '',
			date: 'March 2024',
			techStack: ['Figma Design'],
			challenges:
				'A key challenge during development was maintaining a balance between flexibility and simplicity. The design needed to support multiple resume templates and customisation options without overwhelming the user. Ensuring accessibility across a variety of devices and screen sizes was another challenge, requiring responsive design elements. Additionally, creating a clean and organised interface that allows users to quickly find and adjust various sections of their resume, such as education, skills, and work experience, without confusion or clutter, required iterative design testing and adjustments.',
			conclusion:
				'The Resume Builder UI design meets the objectives of simplicity, flexibility, and user engagement. The clean layout and intuitive navigation ensure users can create professional resumes with ease, while customisable templates offer flexibility. The design strikes a balance between providing ample customisation options and maintaining a user-friendly experience. This project serves as a foundation for further enhancements, demonstrating the value of efficient UI design in helping users achieve their goals quickly and effectively.',
			id: 4,
			deliverables:
				'The final design delivers a clean and modern UI that simplifies the resume-building process. Intuitive navigation with clear sections and editable templates allows users to easily customise their resumes. The design features smooth transitions between sections and real-time previewing of changes, making it easy for users to visualise their progress. Customisable templates provide flexibility, while predefined sections ensure users can easily enter information in a structured format. Clear typography, priority indicators, and a user-friendly layout contribute to a polished, professional final product.',
		},
	],
	clients: [],
	reviews: [],
	skills: [
		{
			name: 'UI/UX Design',
			experience: '2 years',
			Icon: 'CiPalette',
			description:
				'Wireframing and prototyping to bring ideas to life, followed by testing and refining until the experience is just right.',
		},
		{
			name: 'Web and Mobile App',
			experience: '2 years',
			description:
				'Committed to consistent performance, intuitive interfaces, and engaging user interactions across all platforms.',
		},
		{
			name: 'Soft Skills',
			experience: '12 years',
			description:
				'Delivering results through open communication, collaboration, and a strong focus on problem-solving.',
		},
		{
			name: 'Development',
			experience: '3 years',
			description:
				'Placing a special focus on delivering quality code, scalable experiences, and seamless functionality across platforms.',
		},
	],
};

export default data;
