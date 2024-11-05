import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

// Menu items with children.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    children: [
      { title: "Sub Inbox 1", url: "#sub1" },
      { title: "Sub Inbox 2", url: "#sub2" },
    ],
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  // State to manage hover
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)} // Manage hover state
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {hoveredItem === item.title &&
                    item.children && ( // Show children on hover
                      <div className="children-sidebar">
                        {item.children.map((child, index) => (
                          <SidebarMenuButton className="" key={index} asChild>
                            <a href={child.url}>
                              {/* <child.icon /> */}
                              <span>{child.title}</span>
                            </a>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
