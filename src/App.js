import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Plans from './components/plans';

function App() {
	const subscriptionPlans = [
		{
			id: uuidv4(),
      name: 'Bronze',
      color: 'bg-pink-400',
			description:
				'Ideal for one-person email teams who want to design and build beautiful emails that look great in every inbox.',
			price: 45.99,
			features: [
				'Builder',
				'Instant email reviews',
				'Checklist',
				'Page testing',
			],
		},
		{
			id: uuidv4(),
      name: 'Silver',
      color: 'bg-indigo-400',
			description:
				'Ideal for email teams of 2-3 people who want to automate testing and improve campaign effectiveness.',
			price: 65.99,
			features: [
				'Builder',
				'Instant email reviews',
				'Checklist',
				'Page testing',
			],
		},
		{
			id: uuidv4(),
      name: 'Gold',
      color: 'bg-teal-400',
			description:
				'Ideal for agencies and email teams of 4+ people who want to boost collaboration and drive the best results at scale.',
			price: 95.99,
			features: [
				'Builder',
				'Instant email reviews',
				'Checklist',
				'Page testing',
			],
		},
	];

	return (
		<section className='flex flex-col justify-center align-middle m-20'>
			<h1 className='flex justify-center text-center align-middle text-4xl font-bold'>
				Our Subscription Plans
			</h1>
			<span className='flex col-gap-5 justify-center align-middle pt-20'>
				{subscriptionPlans.map((subscriptionPlan) => (
					<Plans key={subscriptionPlan.id} subscriptionPlan={subscriptionPlan} />
				))}
			</span>
		</section>
	);
}

export default App;
