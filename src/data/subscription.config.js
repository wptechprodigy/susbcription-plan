import { v4 as uuidv4 } from 'uuid';

const subscriptionPlans = [
	{
		id: uuidv4(),
		name: 'Bronze',
		color: 'bg-pink-600',
		description:
			'Ideal for one-person email teams who want to design and build beautiful emails that look great in every inbox.',
		price: 45.99,
		features: ['Builder', 'Instant email reviews', 'Checklist', 'Page testing'],
	},
	{
		id: uuidv4(),
		name: 'Silver',
		color: 'bg-indigo-600',
		description:
			'Ideal for email teams of 2-3 people who want to automate testing and improve campaign effectiveness.',
		price: 65.99,
		features: ['Builder', 'Instant email reviews', 'Checklist', 'Page testing'],
	},
	{
		id: uuidv4(),
		name: 'Gold',
		color: 'bg-teal-600',
		description:
			'Ideal for agencies and email teams of 4+ people who want to boost collaboration and drive the best results at scale.',
		price: 95.99,
		features: ['Builder', 'Instant email reviews', 'Checklist', 'Page testing'],
	},
];


export default subscriptionPlans;
