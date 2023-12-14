import { useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const useModal = (): ModalProps => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = (): void => {
		setIsOpen(true);
	};

	const closeModal = (): void => {
		setIsOpen(false);
	};

	return {
		isOpen,
		openModal,
		closeModal,
	};
};

export default useModal;
