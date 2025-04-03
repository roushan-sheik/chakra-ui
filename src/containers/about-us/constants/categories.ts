import type { Category } from '@/types/product';

const categories: Category[] = [
  {
    id: 1,
    category: 'Moisturizer',

    subCategories: [
      { name: 'Toner', link: '/categories/moisturizer/toner' },
      { name: 'Lotion', link: '/categories/moisturizer/lotion' },
      { name: 'Essence & Serum', link: '/categories/moisturizer/essence-serum' },
      { name: 'Mist', link: '/categories/moisturizer/mist' },
      { name: 'Oil', link: '/categories/moisturizer/oil' },
      { name: 'Gel', link: '/categories/moisturizer/gel' },
      { name: 'Cream', link: '/categories/moisturizer/cream' },
      { name: 'Facial Cream', link: '/categories/moisturizer/facial-cream' },
      { name: 'Eye & Neck Cream', link: '/categories/moisturizer/eye-neck-cream' },
      { name: 'Multi-Balm & Stick', link: '/categories/moisturizer/multi-balm-stick' },
    ],
  },
  {
    id: 2,
    category: 'Cleanser',

    subCategories: [
      { name: 'Cleansing Foam', link: '/categories/cleanser/cleansing-foam' },
      { name: 'Cleansing Gel & Powder', link: '/categories/cleanser/cleansing-gel-powder' },
      { name: 'Cleansing Soap', link: '/categories/cleanser/cleansing-soap' },
      { name: 'Cleansing Oil', link: '/categories/cleanser/cleansing-oil' },
      { name: 'Cleansing Water', link: '/categories/cleanser/cleansing-water' },
      { name: 'Lip & Eye Remover', link: '/categories/cleanser/lip-eye-remover' },
      { name: 'Cleansing Wipes & Sheets', link: '/categories/cleanser/cleansing-wipes-sheets' },
      { name: 'Cleansing Lotion & Cream', link: '/categories/cleanser/cleansing-lotion-cream' },
      { name: 'Scrub & Peeling', link: '/categories/cleanser/scrub-peeling' },
      { name: 'Gel & Gommage', link: '/categories/cleanser/gel-gommage' },
      { name: 'Peeling Toner & Cotton Swab', link: '/categories/cleanser/peeling-toner-cotton-swab' },
      { name: 'Peeling Pad', link: '/categories/cleanser/peeling-pad' },
      { name: 'Powder & Scrub', link: '/categories/cleanser/powder-scrub' },
    ],
  },
  {
    id: 3,
    category: 'Mask',

    subCategories: [
      { name: 'Sheet Mask', link: '/categories/mask/sheet-mask' },
      { name: 'Wash-Off Mask', link: '/categories/mask/wash-off-mask' },
      { name: 'Peel-Off Mask', link: '/categories/mask/peel-off-mask' },
      { name: 'Sleeping Mask', link: '/categories/mask/sleeping-mask' },
      { name: 'Rubber & Modeling Mask', link: '/categories/mask/rubber-modeling-mask' },
      { name: 'Toner Pads', link: '/categories/mask/toner-pads' },
      { name: 'Nose Patch', link: '/categories/mask/nose-patch' },
      { name: 'Spot Patch', link: '/categories/mask/spot-patch' },
      { name: 'Eye Patch', link: '/categories/mask/eye-patch' },
    ],
  },
  {
    id: 4,
    category: 'Sun Care',

    subCategories: [
      { name: 'Sun Screen', link: '/categories/sun-care/sun-screen' },
      { name: 'Sun Stick', link: '/categories/sun-care/sun-stick' },
      { name: 'Sun Cushion & Sun Compact', link: '/categories/sun-care/sun-cushion-sun-compact' },
    ],
  },
  {
    id: 5,
    category: 'Shop Page',

    subCategories: [
      { name: 'Best Sellers', link: '/shop/best-sellers' },
      { name: 'Trend', link: '/shop/trend' },
    ],
  },
];

export default categories;
