"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import RegisterModal from "../components/RegisterModal";

const defaultValue = {
  isOpen: false,
  modalStep: 1,
  setModalStep: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
};

const RegisterModalContext = createContext(defaultValue);

export function RegisterModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  const openRegisterModal = useCallback((step = 1) => {
    setModalStep(step);
    setIsOpen(true);
  }, []);

  const closeRegisterModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo(() => ({
    isOpen,
    modalStep,
    setModalStep,
    openRegisterModal,
    closeRegisterModal,
  }), [isOpen, modalStep, openRegisterModal, closeRegisterModal]);

  return (
    <RegisterModalContext.Provider value={contextValue}>
      {children}
      <RegisterModal />
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const context = useContext(RegisterModalContext);
  return context || defaultValue;
}
