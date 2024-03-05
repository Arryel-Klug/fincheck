import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController(){
  const {areValuesVisible} = useDashboard();

  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);

  function handleOpenFiltersModal(){
    setFiltersModalOpen(true);
  }


  function handleCloseFiltersModal(){
    setFiltersModalOpen(false);
  }

  return{
    areValuesVisible,
    transactions: [],
    isInitialLoading: false,
    isLoading: false,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen,
  }
}
