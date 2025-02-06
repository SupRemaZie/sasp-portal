"use client"
import { Calendar, Home,  Search, Settings, Archive } from "lucide-react";
import { useState, useEffect } from "react";
import { jwtVerify } from "jose";  // Importer la fonction jwtVerify de jose

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";


// Menu items.
const items = [
  {
    title: "Accueil",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Casiers Judiciaires",
    url: "/casiers",
    icon: Archive,
  },
  {
    title: "Fine",
    url: "/amendes",
    icon: Calendar,
  },
  {
    title: "Officier",
    url: "/staff",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [userRank, setUserRank] = useState('');
  const [userBadge, setUserBadge] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cookiesData = await cookies();
      const token = cookiesData.get('auth-token')?.value;
      console.log(token);

      if (token) {
        try {
          const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
          const { rank, badge } = payload as { rank: string; badge: string };
          
          setUserRank(rank);
          setUserBadge(badge);
        } catch (error) {
          console.error("Erreur de décodage du token:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4 text-lg font-semibold">
          {userRank && userBadge ? `${userRank} ${userBadge}` : "Chargement..."}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
