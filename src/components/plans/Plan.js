import React from 'react';
import Feature from '../feature';

function Plan({ subscriptionPlan }) {
  const { price, name, color, description, features } = subscriptionPlan;

	return (
		<>
			<div className={`flex flex-col justify-center align-middle ${color} w-full pt-10 pb-4 pl-10 pr-10`}>
				<p className='text-center font-semibold text-2xl'>{name}</p>
				<h3 className='font-bold text-center text-4xl'>${price}</h3>
				<p className='text-center font-medium text-white my-5'>
					{description}
				</p>
				<button className='bg-green-700 hover:bg-white hover:text-green-700 text-white font-bold py-2 pb-3 px-4 rounded'>
					Sign up
				</button>
			</div>
			<div className='w-full text-center p-5'>
				{features.map(feature => <Feature key={feature} feature={feature} />)}
			</div>
		</>
	);
}

export default Plan;
