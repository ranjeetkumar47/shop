import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import ButtonAppBar from '@/components/navbar/TopNav';
import GetHelp from '@/pages/GetHelp';

const AppRoute = () => {
	return (
		<div>
			<Router>
				<ButtonAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/get-help" element={<GetHelp />} />
				</Routes>
			</Router>
		</div>
	);
};

export default AppRoute;
