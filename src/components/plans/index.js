import React from 'react';
import Plan from './Plan';

function Plans({ subscriptionPlan }) {
	return (
		<section className='max-w-sm flex flex-col justify-center align-middle rounded overflow-hidden shadow-lg'>
			<Plan subscriptionPlan={subscriptionPlan} />
		</section>
	);
}

export default Plans;
