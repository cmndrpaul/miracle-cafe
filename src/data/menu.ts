export type MenuItem = {
  id: string; name: string; category: string;
  description: string; price: number | null; soldOut?: boolean;
  options?: [label: string, price: number][];
};

export const menuItems: MenuItem[] = [
  { id: 'americano', name: 'Americano', category: 'Coffee', description: '', price: 110, options: [['Hot · 12 oz', 110], ['Iced · 16 oz', 130], ['Iced · 22 oz', 150]] },
  { id: 'cafe-latte', name: 'Cafe Latte', category: 'Coffee', description: '', price: 135, options: [['Hot · 12 oz', 135], ['Iced · 16 oz', 155], ['Iced · 22 oz', 175]] },
  { id: 'cappuccino', name: 'Cappuccino', category: 'Coffee', description: '', price: 135, options: [['Hot · 12 oz', 135], ['Iced · 16 oz', 155], ['Iced · 22 oz', 175]] },
  { id: 'spanish-latte', name: 'Spanish Latte', category: 'Coffee', description: '', price: 150, options: [['Hot · 12 oz', 150], ['Iced · 16 oz', 170], ['Iced · 22 oz', 190]] },
  { id: 'vanilla-almond-latte', name: 'Vanilla Almond Latte', category: 'Coffee', description: '', price: 160, options: [['Hot · 12 oz', 160], ['Iced · 16 oz', 180], ['Iced · 22 oz', 200]] },
  { id: 'hazelnut-latte', name: 'Hazelnut Latte', category: 'Coffee', description: '', price: 160, options: [['Hot · 12 oz', 160], ['Iced · 16 oz', 180], ['Iced · 22 oz', 200]] },
  { id: 'french-vanilla-latte', name: 'French Vanilla Latte', category: 'Coffee', description: '', price: 160, options: [['Hot · 12 oz', 160], ['Iced · 16 oz', 180], ['Iced · 22 oz', 200]] },
  { id: 'caramel-macchiato', name: 'Caramel Macchiato', category: 'Coffee', description: '', price: 160, options: [['Hot · 12 oz', 160], ['Iced · 16 oz', 180], ['Iced · 22 oz', 200]] },
  { id: 'dark-mocha', name: 'Dark Mocha', category: 'Coffee', description: '', price: 165, options: [['Hot · 12 oz', 165], ['Iced · 16 oz', 185], ['Iced · 22 oz', 205]] },
  { id: 'white-mocha', name: 'White Mocha', category: 'Coffee', description: '', price: 160, options: [['Hot · 12 oz', 160], ['Iced · 16 oz', 180], ['Iced · 22 oz', 200]] },
  { id: 'chocomallows', name: 'ChocoMallows', category: 'Non-Coffee', description: '', price: 120, options: [['Hot · 12 oz', 120], ['Iced · 16 oz', 150]] },
  { id: 'caramel-popcorn', name: 'Caramel Popcorn', category: 'Non-Coffee', description: 'Iced · 16 oz', price: 150 },
  { id: 'milky-berry', name: 'Milky Berry', category: 'Non-Coffee', description: 'Iced · 16 oz', price: 150 },
  { id: 'cookies-cream', name: 'Cookies & Cream', category: 'Non-Coffee', description: 'Iced · 16 oz', price: 150 },
  { id: 'matcha-latte', name: 'Matcha Latte', category: 'Matcha Series', description: 'Hot or iced', price: 160 },
  { id: 'berry-matcha-latte', name: 'Berry Matcha Latte', category: 'Matcha Series', description: 'Iced', price: 170 },
  { id: 'oreo-matcha-latte', name: 'Oreo Matcha Latte', category: 'Matcha Series', description: 'Iced', price: 170 },
  { id: 'dirty-matcha-latte', name: 'Dirty Matcha Latte', category: 'Matcha Series', description: 'Hot or iced', price: 175 },
  { id: 'java-chip', name: 'Java Chip', category: 'Frappe', description: '', price: 180, options: [['Non-coffee · 22 oz', 180], ['Coffee · 22 oz', 210]] },
  { id: 'chocolate-chip', name: 'Chocolate Chip', category: 'Frappe', description: '', price: 180, options: [['Non-coffee · 22 oz', 180], ['Coffee · 22 oz', 210]] },
  { id: 'salted-caramel', name: 'Salted Caramel', category: 'Frappe', description: '', price: 180, options: [['Non-coffee · 22 oz', 180], ['Coffee · 22 oz', 210]] },
  { id: 'vanilla-almond', name: 'Vanilla Almond', category: 'Frappe', description: '', price: 190, options: [['Non-coffee · 22 oz', 190], ['Coffee · 22 oz', 220]] },
  { id: 'nutella-oreo', name: 'Nutella Oreo', category: 'Frappe', description: '', price: 200, options: [['Non-coffee · 22 oz', 200], ['Coffee · 22 oz', 230]] },
  { id: 'biscoff', name: 'Biscoff', category: 'Frappe', description: '', price: 225, options: [['Non-coffee · 22 oz', 225], ['Coffee · 22 oz', 255]] },
  { id: 'matcha', name: 'Matcha', category: 'Frappe', description: 'Non-coffee · 22 oz', price: 180 },
  { id: 'mango-luxe-blend', name: 'Mango Luxe Blend', category: 'Smoothies', description: '16 oz', price: 180 },
  { id: 'banana-loco', name: 'Banana Loco', category: 'Smoothies', description: '16 oz', price: 150 },
  { id: 'cucumber-royale', name: 'Cucumber Royale', category: 'Smoothies', description: '16 oz', price: 150 },
  { id: 'sunkist-rush', name: 'Sunkist Rush', category: 'Fresh Juice', description: '16 oz', price: 150 },
  { id: 'honey-citrus-cucumber', name: 'Honey Citrus Cucumber', category: 'Fresh Juice', description: '16 oz', price: 140 },
  { id: 'golden-calamansi', name: 'Golden Calamansi', category: 'Fresh Juice', description: '16 oz', price: 120 },
  { id: 'yakult-lemon-chill', name: 'Yakult Lemon Chill', category: 'Fresh Juice', description: '16 oz', price: 140 },
  { id: 'green-apple', name: 'Green Apple', category: 'Fruit Teas', description: '', price: 130, options: [['16 oz', 130], ['22 oz', 180]] },
  { id: 'strawberry', name: 'Strawberry', category: 'Fruit Teas', description: '', price: 130, options: [['16 oz', 130], ['22 oz', 180]] },
  { id: 'lychee', name: 'Lychee', category: 'Fruit Teas', description: '', price: 130, options: [['16 oz', 130], ['22 oz', 180]] },
  { id: 'blueberry', name: 'Blueberry', category: 'Fruit Teas', description: '', price: 130, options: [['16 oz', 130], ['22 oz', 180]] },
  { id: "cookies-dubai-chewy-choco", name: "Dubai Chewy Choco", category: "Cookies", description: "", price: 150 },
  { id: "cookies-oatmeal-cookies", name: "Oatmeal Cookies", category: "Cookies", description: "", price: 70 },
  { id: "cookies-chocolate-chip-cookies", name: "Chocolate Chip Cookies", category: "Cookies", description: "", price: 80 },
  { id: "cookies-smores-cookies", name: "S'mores Cookies", category: "Cookies", description: "", price: 80 },
  { id: "cookies-red-velvet", name: "Red Velvet", category: "Cookies", description: "", price: 80 },
  { id: "cookies-biscoff-cookies", name: "Biscoff Cookies", category: "Cookies", description: "", price: 90 },
  { id: "cakes-biscoff-cheesecake", name: "Biscoff Cheesecake", category: "Cakes", description: "", price: 120 },
  { id: "cakes-biscoff-cheesecake-big", name: "Biscoff Cheesecake Big", category: "Cakes", description: "", price: 150 },
  { id: "cakes-blueberry-cheesecake", name: "Blueberry Cheesecake", category: "Cakes", description: "", price: 90 },
  { id: "cakes-strawberry-cheesecake", name: "Strawberry Cheesecake", category: "Cakes", description: "", price: 90 },
  { id: "muffins-banana-muffin", name: "Banana Muffin", category: "Muffins", description: "", price: 90 },
  { id: "muffins-chocolate-muffin", name: "Chocolate Muffin", category: "Muffins", description: "", price: 90 },
  { id: "muffins-corn-muffin", name: "Corn Muffin", category: "Muffins", description: "", price: 90 },
  { id: "dessert-leche-flan", name: "Leche Flan", category: "Dessert", description: "", price: 180 },
  { id: "rice-favorites-beef-tapa", name: "Beef Tapa", category: "Rice Favorites", description: "Signature beef tapa with fried rice and egg.", price: 180 },
  { id: "rice-favorites-home-made-tocino", name: "Home-made Tocino", category: "Rice Favorites", description: "House-made pork tocino with fried rice and egg.", price: 160 },
  { id: "rice-favorites-liempo", name: "Liempo", category: "Rice Favorites", description: "Crispy liempo with fried rice and egg.", price: 160 },
  { id: "rice-favorites-fried-chicken", name: "Fried Chicken", category: "Rice Favorites", description: "Classic fried chicken with fried rice and egg.", price: 160 },
  { id: "rice-favorites-hungarian-sausage", name: "Hungarian Sausage", category: "Rice Favorites", description: "Hungarian sausage with fried rice and egg.", price: 130 },
  { id: "rice-favorites-chicken-ala-king", name: "Chicken Ala King", category: "Rice Favorites", description: "Savory chicken à la king with rice.", price: 160 },
  { id: "classic-favorites-miracles-crispy-pata", name: "Miracle’s Crispy Pata", category: "Classic Favorites", description: "Signature crispy pata, golden and tender.", price: 1200 },
  { id: "classic-favorites-fried-chicken", name: "Fried Chicken", category: "Classic Favorites", description: "Classic deep-fried chicken served with mojos.", price: 300, options: [["Half",300],["Whole",600]] },
  { id: "classic-favorites-crispy-kare-kare", name: "Crispy Kare-Kare", category: "Classic Favorites", description: "Golden crispy liempo with classic kare-kare sauce.", price: 399 },
  { id: "classic-favorites-chopsuey", name: "Chopsuey", category: "Classic Favorites", description: "Crisp vegetable chopsuey.", price: 250 },
  { id: "classic-favorites-pakbet-with-crispy-liempo", name: "Pakbet with Crispy Liempo", category: "Classic Favorites", description: "Crispy pork belly with a classic Filipino vegetable medley.", price: 250 },
  { id: "classic-favorites-beef-broccoli", name: "Beef Broccoli", category: "Classic Favorites", description: "Beef stir-fried with fresh broccoli and a savory soy-based sauce.", price: 280 },
  { id: "rice-platter-plain-rice", name: "Plain Rice", category: "Rice Platter", description: "", price: 90 },
  { id: "signature-pastas-baked-macaroni-solo", name: "Baked Macaroni Solo", category: "Signature Pastas", description: "", price: 150 },
  { id: "signature-pastas-baked-macaroni-with-chicken", name: "Baked Macaroni with Chicken", category: "Signature Pastas", description: "", price: 220 },
  { id: "signature-pastas-spicy-tuna-pasta", name: "Spicy Tuna Pasta", category: "Signature Pastas", description: "", price: 150 },
  { id: "signature-pastas-chicken-ala-king-pasta", name: "Chicken Ala King Pasta", category: "Signature Pastas", description: "", price: 180 },
  { id: "signature-pastas-pancit-guisado", name: "Pancit Guisado", category: "Signature Pastas", description: "Bihon, canton or mix.", price: 200 },
  { id: "snacks-flavored-fries", name: "Flavored Fries", category: "Snacks", description: "Cheese, sour cream, sweet corn or barbeque.", price: 100 },
  { id: "snacks-chicken-poppers", name: "Chicken Poppers", category: "Snacks", description: "Cheese, sour cream, sweet corn or barbeque.", price: 200 },
  { id: "snacks-loaded-nachos", name: "Loaded Nachos", category: "Snacks", description: "Tortilla chips with seasoned meat, cheese, tomatoes and onions.", price: 190 },
  { id: "sandwiches-clubhouse-sandwich", name: "Clubhouse Sandwich", category: "Sandwiches", description: "", price: 180 },
  { id: "sandwiches-cheesy-sausage-sandwich", name: "Cheesy Sausage Sandwich", category: "Sandwiches", description: "", price: 110 },
  { id: "burgers-classic-burger", name: "Classic Burger", category: "Burgers", description: "", price: 140 },
  { id: "burgers-classic-burger-with-fries", name: "Classic Burger with Fries", category: "Burgers", description: "", price: 180 },
  { id: "burgers-cheese-burger", name: "Cheese Burger", category: "Burgers", description: "", price: 150 },
  { id: "burgers-cheese-burger-with-fries", name: "Cheese Burger with Fries", category: "Burgers", description: "", price: 190 },
  { id: "other-beverages-coke-in-can", name: "Coke in can", category: "Other Beverages", description: "", price: 50 },
  { id: "other-beverages-coke-zero-in-can", name: "Coke Zero in can", category: "Other Beverages", description: "", price: 50 },
  { id: "other-beverages-royal-in-can", name: "Royal in can", category: "Other Beverages", description: "", price: 50 },
  { id: "other-beverages-sprite-in-can", name: "Sprite in can", category: "Other Beverages", description: "", price: 50 },
  { id: "other-beverages-coke-1-5-l", name: "Coke 1.5 L", category: "Other Beverages", description: "", price: 130 },
  { id: "other-beverages-pineapple-juice", name: "Pineapple Juice", category: "Other Beverages", description: "", price: 50 },
  { id: "other-beverages-san-mig-lights", name: "San Mig Lights", category: "Other Beverages", description: "", price: 90 },
  { id: "other-beverages-red-wine", name: "Red Wine", category: "Other Beverages", description: "", price: 150 },
  { id: "add-ons-espresso", name: "Espresso", category: "Add-ons", description: "", price: 80 },
  { id: "add-ons-flavored-sauce", name: "Flavored Sauce", category: "Add-ons", description: "", price: 40 },
  { id: "add-ons-flavored-syrup", name: "Flavored Syrup", category: "Add-ons", description: "", price: 40 },
  { id: "add-ons-crushed-oreo", name: "Crushed Oreo", category: "Add-ons", description: "", price: 40 },
  { id: "add-ons-fruit-jelly", name: "Fruit Jelly", category: "Add-ons", description: "", price: 40 },
  { id: "add-ons-fried-rice", name: "Fried Rice", category: "Add-ons", description: "", price: 25 },
  { id: "add-ons-egg", name: "Egg", category: "Add-ons", description: "", price: 25 },
  { id: "add-ons-atsara", name: "Atsara", category: "Add-ons", description: "", price: 25 },
  { id: "add-ons-atsara-jar", name: "Atsara Jar", category: "Add-ons", description: "", price: 180 },
];

// Optional: if MENU_CSV_URL is set (published Google Sheet), the menu is pulled at build time.
// Columns: id,name,category,description,price,soldout  (soldout = yes/true/1)
export async function getMenu(): Promise<MenuItem[]> {
  const url = import.meta.env.MENU_CSV_URL;
  if (!url) return menuItems;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const [head, ...rows] = parseCsv(await res.text());
    const names = head.map((h) => h.trim().toLowerCase());
    const [iId, iName, iCat, iDesc, iPrice, iSold] = ['id', 'name', 'category', 'description', 'price', 'soldout'].map((n) => names.indexOf(n));
    const items = rows
      .filter((r) => r[iName]?.trim())
      .map((r, i) => ({
        id: r[iId]?.trim() || `item-${i}`,
        name: r[iName].trim(),
        category: r[iCat]?.trim() || 'Other',
        description: r[iDesc]?.trim() || '',
        price: Number(r[iPrice]?.replace(/[^\d.]/g, '')) || 0,
        soldOut: ['yes', 'true', '1'].includes((r[iSold] || '').trim().toLowerCase()),
      }));
    return items.length ? items : menuItems;
  } catch (e) {
    console.warn('Menu CSV failed, using local menu:', e);
    return menuItems;
  }
}

function parseCsv(t: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], f = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && t[i + 1] === '\n') i++;
      row.push(f); rows.push(row); row = []; f = '';
    } else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
