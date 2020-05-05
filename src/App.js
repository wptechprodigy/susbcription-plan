import React from 'react';
import subscriptionPlans from './data/subscription.config'
import Plans from './components/plans';

function App() {
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
