export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  course: "brunch" | "appetizer" | "main" | "dessert" | "cocktail";
  dietary: ("gf" | "v" | "vg" | "sf" | "n")[];
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // Brunch
  { id: "m1", name: "Lobster Benedict", desc: "Poached eggs, toasted brioche, citrus hollandaise, fresh lobster", price: "24", course: "brunch", dietary: ["n"], featured: true },
  { id: "m2", name: "Harbor Grain Bowl", desc: "Farro, roasted squash, poached egg, tahini, pickled onions", price: "18", course: "brunch", dietary: ["vg", "gf"] },
  { id: "m3", name: "Salt-Cod Hash", desc: "Crispy potatoes, confit garlic, fried egg, chimichurri", price: "20", course: "brunch", dietary: ["gf"] },
  { id: "m4", name: "Brioche French Toast", desc: "Brown butter, bourbon maple, crème fraîche, seasonal berries", price: "17", course: "brunch", dietary: ["v"] },
  { id: "m5", name: "Oyster Po'Boy", desc: "Cornmeal-fried oysters, shaved fennel, rémoulade, house-cut fries", price: "19", course: "brunch", dietary: ["n"] },

  // Appetizers
  { id: "m6", name: "Oysters on the Half Shell", desc: "Mignonette, lemon, cocktail sauce — flown in daily", price: "18", course: "appetizer", dietary: ["gf", "n"], featured: true },
  { id: "m7", name: "Charred Octopus", desc: "Smoked paprika, lemon, olive oil, shaved fennel", price: "22", course: "appetizer", dietary: ["gf"] },
  { id: "m8", name: "Heirloom Tomato Salad", desc: "Burrata, basil, aged balsamic, sea salt", price: "16", course: "appetizer", dietary: ["v", "gf"] },
  { id: "m9", name: "Roasted Bone Marrow", desc: "Parsley salad, toasted sourdough, mustard", price: "20", course: "appetizer", dietary: ["n"] },

  // Mains
  { id: "m10", name: "Seared Scallops", desc: "Cauliflower purée, brown butter, capers, micro greens", price: "32", course: "main", dietary: ["gf", "n"] },
  { id: "m11", name: "Heritage Pork Ragu", desc: "Pappardelle, slow-cooked pork, pecorino, gremolata", price: "28", course: "main", dietary: ["n"] },
  { id: "m12", name: "Grilled Local Halibut", desc: "Saffron broth, fingerling potatoes, fennel, lemon oil", price: "36", course: "main", dietary: ["gf", "n"] },
  { id: "m13", name: "Dry-Aged Ribeye", desc: "Charred broccolini, roasted shallot, bone marrow butter", price: "48", course: "main", dietary: ["gf"], featured: true },
  { id: "m14", name: "Wood-Fired Branzino", desc: "Whole fish, salsa verde, grilled lemon, herbs", price: "34", course: "main", dietary: ["gf", "n"] },
  { id: "m15", name: "Wild Mushroom Risotto", desc: "Arborio, porcini, truffle oil, aged parmesan", price: "26", course: "main", dietary: ["v", "gf"] },

  // Desserts
  { id: "m16", name: "Salted Caramel Pot de Crème", desc: "Dark chocolate, fleur de sel, whipped cream", price: "14", course: "dessert", dietary: ["gf", "v"] },
  { id: "m17", name: "Olive Oil Cake", desc: "Citrus glaze, mascarpone, candied pistachio", price: "15", course: "dessert", dietary: ["v"] },
  { id: "m18", name: "Hazelnut Panna Cotta", desc: "Honey, figs, toasted hazelnut", price: "14", course: "dessert", dietary: ["gf", "v"] },

  // Cocktails
  { id: "m19", name: "Sea Smoke", desc: "Mezcal, lime, jalapeño, smoked salt, agave", price: "16", course: "cocktail", dietary: ["gf", "vg"] },
  { id: "m20", name: "Saltwater Spritz", desc: "Aperol, prosecco, grapefruit, sea salt rim", price: "15", course: "cocktail", dietary: ["gf", "vg"] },
  { id: "m21", name: "The Mariner", desc: "Bourbon, amaro, orange, bitters, cherry", price: "18", course: "cocktail", dietary: ["gf", "vg"] },
  { id: "m22", name: "Tidal Wave", desc: "Vodka, cucumber, mint, lime, ginger beer", price: "15", course: "cocktail", dietary: ["gf", "vg"] },
];

export const courses = [
  { id: "brunch", label: "Brunch" },
  { id: "appetizer", label: "Appetizers" },
  { id: "main", label: "Mains" },
  { id: "dessert", label: "Desserts" },
  { id: "cocktail", label: "Cocktails" },
];

export const dietFilters = [
  { id: "gf", label: "Gluten-Free" },
  { id: "v", label: "Vegetarian" },
  { id: "vg", label: "Vegan" },
  { id: "sf", label: "Shellfish-Free" },
  { id: "n", label: "Contains Nuts" },
];