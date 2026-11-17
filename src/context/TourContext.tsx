import React, { createContext, useContext, useState } from 'react';

interface TourContextType {
  isTourModalOpen: boolean;
  openTourModal: (preferredProgram?: string) => void;
  closeTourModal: () => void;
  selectedProgram: string;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openTourModal = (preferredProgram?: string) => {
    if (preferredProgram) setSelectedProgram(preferredProgram);
    setIsTourModalOpen(true);
  };

  const closeTourModal = () => {
    setIsTourModalOpen(false);
  };

  return (
    <TourContext.Provider
      value={{
        isTourModalOpen,
        openTourModal,
        closeTourModal,
        selectedProgram,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};
