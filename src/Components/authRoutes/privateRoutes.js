import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({
	user,
	// renaming, can't use lower case for reference equal to Dashboard,
	component: Comp,
	// take whatever other properties were defined on props and collect them into a new object assigned to the variable we name rest.
	...rest
}) => {
	return (
		<Route
			{...rest}
			// this props is from react router dom, becasue we use Route component
			component={props =>
				user ? <Comp {...props} user={user} /> : <Redirect to='/sign_in' />
			}
		/>
	);
};

export default PrivateRoutes;
