// types/navbar.ts
export interface NavItem {
  id: string;
  label: string;
  href: string;
  dropdown?: NavItem[];
  description?: string; // Add this line
}

export interface NavbarProps {
  logo?: string;
  companyName: string;
  navItems: NavItem[];
  className?: string;
}