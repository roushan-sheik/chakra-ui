export type Category = {
  id: number;
  category: string;
  link: string;
  subCategories: Array<{
    name: string;
    link: string;
  }>;
};

export const categories: Category[] = [
  {
    id: 1,
    category: 'Moisturizer',
    link: '/collections/moisturizer/',
    subCategories: [
      { name: 'Essence & Serum', link: '/collections/moisturizer/essence-serum-ampoule/' },
      { name: 'Multi-Balm & Stick', link: '/collections/moisturizer/cream/multi-balm-stick/' },
      { name: 'Toner', link: '/collections/moisturizer/toner/' },
      { name: 'Facial Cream', link: '/collections/moisturizer/cream/facial-cream/' },
      { name: 'Eye & Neck Cream', link: '/collections/moisturizer/cream/eye-neck-cream/' },
      { name: 'Lotion', link: '/collections/moisturizer/lotion/' },
      { name: 'Mist', link: '/collections/moisturizer/mist/' },
      { name: 'Oil', link: '/collections/moisturizer/oil/' },
      { name: 'Gel', link: '/collections/moisturizer/gel/' },
    ],
  },
  {
    id: 2,
    category: 'Cleanser',
    link: '/collections/cleanser/',
    subCategories: [
      { name: 'Cleansing Foam', link: '/collections/cleanser/cleansing-foam/' },
      { name: 'Cleansing Oil', link: '/collections/cleanser/cleansing-oil/' },
      { name: 'Cleansing Gel & Powder', link: '/collections/cleanser/cleansing-gel-powder/' },
      { name: 'Cleansing Soap', link: '/collections/cleanser/cleansing-soap/' },
      { name: 'Lip & Eye Remover', link: '/collections/cleanser/lip-eye-remover/' },
      { name: 'Cleansing Wipes & Sheets', link: '/collections/cleanser/cleansing-wipes-sheets/' },
      { name: 'Cleansing Water', link: '/collections/cleanser/cleansing-water/' },
      { name: 'Cleansing Lotion & Cream', link: '/collections/cleanser/cleansing-lotion-cream/' },
      { name: 'Scrub & Peeling', link: '/collections/cleanser/scrub-peeling/' },
      { name: 'Powder & Scrub', link: '/collections/cleanser/scrub-peeling/powder-scrub/' },
      { name: 'Gel & Gommage', link: '/collections/cleanser/scrub-peeling/gel-gommage-cream/' },
      { name: 'Peeling Pad', link: '/collections/cleanser/scrub-peeling/peeling-pad/' },
      { name: 'Peeling Toner & Cotton Swab', link: '/collections/cleanser/scrub-peeling/peeling-toner-cotton-swab/' },
    ],
  },
  {
    id: 3,
    category: 'Mask',
    link: '/collections/mask-pack/',
    subCategories: [
      { name: 'Sheet Mask', link: '/collections/mask-pack/sheet-mask/' },
      { name: 'Toner Pads', link: '/collections/mask-pack/toner-pads/' },
      { name: 'Wash-Off Mask', link: '/collections/mask-pack/wash-off-mask/' },
      { name: 'Sleeping Mask', link: '/collections/mask-pack/sleeping-mask/' },
      { name: 'Eye Patch', link: '/collections/mask-pack/eye-patch/' },
      { name: 'Rubber & Modeling Mask', link: '/collections/mask-pack/rubber-modeling-mask/' },
      { name: 'Nose Patch', link: '/collections/mask-pack/nose-patch/' },
      { name: 'Peel-Off Mask', link: '/collections/mask-pack/peel-off-mask/' },
      { name: 'Spot Patch', link: '/collections/mask-pack/spot-patch/' },
    ],
  },
  {
    id: 4,
    category: 'Sun Care',
    link: '/collections/sun-care/',
    subCategories: [
      { name: 'Sun Screen', link: '/collections/sun-care/sun-screen/' },
      { name: 'Sun Cushion & Sun Compact', link: '/collections/sun-care/sun-cushion-sun-compact/' },
      { name: 'Sun Stick', link: '/collections/sun-care/sun-stick/' },
    ],
  },
];
