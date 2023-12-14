import CustomModal from '@/components/common/CustomModal';

const Home = () => {
	return (
		<div>
			<CustomModal buttonText="Open Custom Modal" modalTitle="Custom Modal Title">
				<p>This is the content of the custom modal.</p>
			</CustomModal>
		</div>
	);
};

export default Home;
