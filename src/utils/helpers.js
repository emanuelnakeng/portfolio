const scrollTo = id => {
	const element = document.getElementById(id);
	element?.scrollIntoView({
		behavior: 'smooth',
	});
};

const getRandomArrayItems = (arr, items) => {
	const shuffled = arr.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, items);
};

export { scrollTo, getRandomArrayItems };
