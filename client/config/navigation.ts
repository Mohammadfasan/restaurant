// config/navigation.ts
import { NavItem } from '@/types/navbar';

export const navConfig = {
  companyName: "FoodExpress",
  navItems: [
    {
      id: 'home',
      label: 'Home',
      href: '/',
    },
    {
      id: 'Pages',
      label: 'Our Pages',
      href: '/Pages',
      dropdown: [
        {
          id: 'AboutUs',
          label: 'About Us',
          href: '/Pages/AboutUs',
         
        },
        {
          id: 'Testimonials',
          label: 'Testimonials',
          href: '/Pages/Testimonials',
        },
        {
          id: 'faqs',
          label: 'FAQs',
          href: '/Pages/Faqs',
        },
        {
          id: 'contact',
          label: 'Contact Us',
          href: '/Pages/Contact',
        }
      ],
    },
    {
      id: 'Menu',
      label: 'Menu',
      href: '/menu',
      dropdown: [
        {
          id: 'Menu',
          label: 'Menu',
          href: '/menu',
        },
        {
          id: 'Menu-items',
          label: 'Menu Items',
          href: '/menu/menu-items',
        }
      ],
    },
    {
      id: 'deals',
      label: 'Deals & Offers',
      href: '/deals',
    },

    {
      id: 'feedback',
      label: 'Feedback',
      href: '/feedback',
    },
  ] as NavItem[],
};
