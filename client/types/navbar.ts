// types/navbar.ts
export interface NavItem {
  id: string;
  label: string;
  href: string;
  dropdown?: NavItem[];
  description?: string; 
}

export interface NavbarProps {
  logo?: string;
  companyName: string;
  navItems: NavItem[];
  className?: string;
}