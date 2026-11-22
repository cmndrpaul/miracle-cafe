// Single source of truth for cafe info. Search "TODO" for placeholders.
export const cafe = {
  name: "Miracle's Cafe",
  tagline: 'A cozy coffee shop in San Roque, Naic, Cavite, serving coffee, matcha, Filipino meals, and desserts.',
  motto: 'Warmth in every cup',
  address: {
    streetAddress: '9037 Sitio Maname, San Roque',
    addressLocality: 'Naic',
    addressRegion: 'Cavite',
    addressCountry: 'PH',
  },
  plusCode: '8Q7F+2P Naic, Cavite',
  lat: 14.3126054,
  lng: 120.7742688,
  mapsShortLink: 'https://maps.app.goo.gl/9xbCY8yx5Wrj4aWo6',
  heroImage: '/miracles-cafe-wordmark.webp',
  heroWordmarkSrcset: '/miracles-cafe-wordmark-40.webp 40w, /miracles-cafe-wordmark-80.webp 80w, /miracles-cafe-wordmark-120.webp 120w',
  heroProductImage: '/miracles-cafe-branded-cup-280.webp',
  heroProductSrcset: '/miracles-cafe-branded-cup-280.webp 280w, /miracles-cafe-branded-cup-560.webp 560w',
  orderingNote: 'Please order and pay at the counter.',
  services: ['Coffee cart', 'Events venue', 'Catering', 'Food packages'],
  amenities: [
    { icon: 'outdoor', label: 'Outdoor seating' },
    { icon: 'dineIn', label: 'Dine-in' },
    { icon: 'takeout', label: 'Takeout' },
    { icon: 'delivery', label: 'Delivery' },
  ],
  visitorInfo: ['Restroom', 'Good for kids', 'Free lot and street parking'],
  googleRating: { score: 4.8, count: 34 },
  social: {
    facebook: '', // TODO: https://facebook.com/...
    instagram: '', // TODO: https://instagram.com/...
  },
  // Index 0 = Sunday ... 6 = Saturday. [open, close] in 24h Manila time, or null if closed.
  // Google Maps shows 10 AM. TODO: confirm the 8 AM opening printed on the menu.
  hours: [
    ['10:00', '00:00'], ['10:00', '00:00'], ['10:00', '00:00'], ['10:00', '00:00'],
    ['10:00', '00:00'], ['10:00', '00:00'], ['10:00', '00:00'],
  ] as ([string, string] | null)[],
  hoursLabel: 'Daily, 10:00 AM – midnight (Google Maps)',
};

export const reviews = [
  { name: 'Raquel Ledesma', text: 'Awesome place! The food was delicious and the ambiance was spot on. Great spot to chill out and unwind at night.' },
  { name: 'Fred Calimquim', text: 'Perfect place for quick coffee date.' },
  { name: 'Ma. Cecilia Perea', text: 'The ambiance is incredibly relaxing, perfect for a quiet afternoon. Staff were super friendly and efficient.' },
  { name: 'Jethro Mabangis', text: 'Drove all the way from Bacoor to Naic just to try Miracle Cafe—and it was worth it!' },
  { name: 'Reden Mesina', text: 'Feel relaxed. It is a pleasant place. Stress reliever....' },
  { name: 'Archer Cabillar', text: 'We visited the place yesterday, staffs were friendly and accomodating, the food was good specially their frappe I highly recommend this place.' },
  { name: 'Eimee Doctor', text: 'Good food, good ambiance ✨' },
  { name: 'Juan Paolo Pagtakhan', text: 'Good food, relaxing place' },
  { name: 'Jaya Fulgar', text: 'Especially their alfresco style is super nice. My sister and I went at night, even though it was raining it was still okay.' },
  { name: 'Kayr Nathalie Chin', text: 'Amazing cafe! Great staff and they are super friendly.' },
  { name: 'Fangirling is Hard', text: 'Service is excellent. The staff is very accommodating. Atmosphere/ambiance is superb, very homey feeling.' },
  { name: 'Van Viloria', text: 'It was a comfortable and relaxing experience including the good coffee and overload nachos.' },
];
