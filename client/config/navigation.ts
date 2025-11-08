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
      id: 'menu',
      label: 'Our Menu',
      href: '/menu',
      dropdown: [
        {
          id: 'burgers',
          label: 'Burgers & Sandwiches',
          href: '/menu/burgers',
          description: 'Juicy burgers & delicious sandwiches'
        },
        {
          id: 'pizzas',
          label: 'Pizzas',
          href: '/menu/pizzas',
          description: 'Freshly baked pizzas with various toppings'
        },
        {
          id: 'pasta',
          label: 'Pasta & Noodles',
          href: '/menu/pasta',
          description: 'Italian & Asian pasta dishes'
        },
        {
          id: 'rice',
          label: 'Rice Dishes',
          href: '/menu/rice',
          description: 'Biryani, Fried Rice & more'
        },
        {
          id: 'appetizers',
          label: 'Appetizers',
          href: '/menu/appetizers',
          description: 'Starters & snacks'
        },
        {
          id: 'desserts',
          label: 'Desserts',
          href: '/menu/desserts',
          description: 'Sweet treats & ice creams'
        },
        {
          id: 'beverages',
          label: 'Beverages',
          href: '/menu/beverages',
          description: 'Cold & hot drinks'
        },
      ],
    },
    {
      id: 'varieties',
      label: 'Varieties',
      href: '/varieties',
      dropdown: [
        {
          id: 'veg',
          label: 'Vegetarian Special',
          href: '/varieties/veg',
          description: 'Pure vegetarian delights'
        },
        {
          id: 'non-veg',
          label: 'Non-Vegetarian',
          href: '/varieties/non-veg',
          description: 'Chicken, Mutton & Seafood'
        },
        {
          id: 'healthy',
          label: 'Healthy Options',
          href: '/varieties/healthy',
          description: 'Low-calorie & diet food'
        },
        {
          id: 'chef-special',
          label: "Chef's Special",
          href: '/varieties/chef-special',
          description: 'Exclusive chef creations'
        },
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
