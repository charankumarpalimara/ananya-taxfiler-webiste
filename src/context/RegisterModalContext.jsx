"use client";

import { createContext, useContext, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

const defaultValue = {
  isOpen: false,
  modalStep: 1,
  setModalStep: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
};

const RegisterModalContext = createContext(defaultValue);

export function RegisterModalProvider({ children }) {
  const router = useRouter();

  const openRegisterModal = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const closeRegisterModal = useCallback(() => {}, []);

  const contextValue = useMemo(() => ({
    isOpen: false,
    modalStep: 1,
    setModalStep: () => {},
    openRegisterModal,
    closeRegisterModal,
  }), [openRegisterModal, closeRegisterModal]);

  return (
    <RegisterModalContext.Provider value={contextValue}>
      {children}
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const context = useContext(RegisterModalContext);
  return context || defaultValue;
}
