"use client";

import { usePathname } from "next/navigation";
import AssignovaNavigation from "./AssignovaNavigation";

export default function ConditionalNav() {
  const pathname = usePathname();

  // Define routes where the navigation should be hidden
  const hideNavRoutes = ["/web-solutions"];
  const showNav = !hideNavRoutes.includes(pathname);

  // If the current route is in the hide list, return nothing
  if (!showNav) return null;

  // Otherwise, render the navigation
  return <AssignovaNavigation />;
}
