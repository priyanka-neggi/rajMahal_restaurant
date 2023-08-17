import images from './images';

const wines = [
  {
    title: 'MANGO LASS',
    price: '$3.00',
    tags: ' 500 mL',
  },
  {
    title: 'SWEET LASSI',
    price: '$3.00',
    tags: '500 mL',
  },
  {
    title: 'MASALA CHAI',
    price: '$3.00',
    tags: '250 mL',
  },
  {
    title: 'BOTTLED WATER',
    price: '$1.00',
    tags: '1000 mL',
  },
  {
    title: 'SALT LASSI',
    price: '$3.00',
    tags: '500 mL',
  },
  {
    title: 'CANNED COKE PRODUCTS',
    price: '$2.00',
    tags: ' 500 mL',
  },
  
];

const cocktails = [
  {
    title: 'DAAL MAKHANY',
    price: '$12.00',
    tags: 'Slow cooked lentil with fresh ginger, garlic, herbs and spices.',
  },
  {
    title: "BAIGAN BHARTA",
    price: '$13.00',
    tags: 'Smoked eggplant in garlic, tomato and spices.',
  },
  {
    title: 'CHANA MASALA',
    price: '$12.00',
    tags: 'Garbanzo beans with curry sauce. Try it today!',
  },
  {
    title: 'NAVRATNA KORMA',
    price: '$13.00',
    tags: 'Mixed vegetables in creamy nutty sauce. Try it today!',
  },
  {
    title: 'RAJ SPECIAL PANEER',
    price: '$14.00',
    tags: 'Paneer cooked in onion masala and mango sauce.',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Our Choma',
    subtitle: 'Well-Seasoned Choma In Northern Bypass, Nairobi Area.',
  },
  {
    imgUrl: images.award01,
    title: 'Ample Parking',
    subtitle: 'Adequate Parking Space Available For Our Customers.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Quality Customer Service And Great Security.',
  },
  {
    imgUrl: images.award03,
    title: 'Reasonable Prices',
    subtitle: 'Have An Amazing Time Without Digging Too Deep.',
  },
];

const data = { wines, cocktails, awards };

export default data;
