import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Toaster } from 'react-hot-toast';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <><Toaster position="top-right"/><SidebarProvider>
          <AppSidebar/>
          <main className={"w-full"}>
              <SidebarTrigger/>

              {children}
          </main>
      </SidebarProvider></>
  )
}
