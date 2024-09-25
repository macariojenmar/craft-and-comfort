export const PESO_SYMBOL = '₱';
export const SHOW_IN_MOBILE = { xs: 'flex', md: 'none' };
export const SHOW_IN_DESKTOP = { xs: 'none', md: 'flex' };

export const NAVIGATION = Object.freeze([
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/shop',
    title: 'Shop'
  },
  {
    path: '/wishlist',
    title: 'Wishlist'
  },
  {
    path: '/about',
    title: 'About'
  },
]);

export const SORT_DEFAULT = 'default';
export const SORT_PRICE_HIGH_TO_LOW = 'price-low-to-high';
export const SORT_PRICE_LOW_TO_HIGH = 'price-high-to-low';
export const SORT_TYPES = [SORT_DEFAULT, SORT_PRICE_HIGH_TO_LOW, SORT_PRICE_LOW_TO_HIGH]