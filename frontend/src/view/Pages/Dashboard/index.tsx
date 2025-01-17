import { useAuth } from "../../../app/hooks/useAuth"
import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { Accounts } from "./components/Accounts";
import { DashboardProvider } from "./components/DashboardContext";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";
import { NewAccountModal } from "./modals/NewAccountModal";

export function Dashboard() {
  const { signout } = useAuth();

  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between ">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>
        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
        <NewAccountModal />
      </div>
    </DashboardProvider>
  )
}
