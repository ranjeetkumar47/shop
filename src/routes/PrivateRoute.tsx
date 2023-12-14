import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
	const navigate = useNavigate();
	const isAuth = true;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!isAuth) {
			navigate('/signin');
		}
	}, [isAuth]);

	return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
