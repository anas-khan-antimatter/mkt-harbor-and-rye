export interface WineItem {
  id: string;
  name: string;
  vineyard: string;
  region: string;
  vintage: string;
  type: "red" | "white" | "sparkling" | "rose" | "dessert";
  bottlePrice: string;
  glassPrice?: string;
  pairsWith: string[];
  notes: string;
}

export const wineList: WineItem[] = [
  { id: "w1", name: "Chardonnay 'Sonoma Coast'", vineyard: "Littorai", region: "Sonoma, CA", vintage: "2021", type: "white", bottlePrice: "68", glassPrice: "16", pairsWith: ["Grilled Halibut", "Seared Scallops", "Lobster Benedict"], notes: "Bright acidity, citrus and green apple with a subtle minerality." },
  { id: "w2", name: "Sancerre", vineyard: "Domaine Vacheron", region: "Loire, France", vintage: "2022", type: "white", bottlePrice: "54", glassPrice: "13", pairsWith: ["Oysters", "Branzino", "Heirloom Tomato Salad"], notes: "Crisp, flinty, with notes of lemon zest and white flowers." },
  { id: "w3", name: "Riesling Kabinett", vineyard: "Joh. Jos. Prüm", region: "Mosel, Germany", vintage: "2020", type: "white", bottlePrice: "72", glassPrice: "17", pairsWith: ["Heritage Pork Ragu", "Oyster Po'Boy", "Salt-Cod Hash"], notes: "Off-dry with beautiful balance of fruit and acidity." },
  { id: "w4", name: "Albariño", vineyard: "Zarate", region: "Rías Baixas, Spain", vintage: "2022", type: "white", bottlePrice: "44", glassPrice: "11", pairsWith: ["Branzino", "Octopus", "Grain Bowl"], notes: "Saline, zesty, with stone fruit and bright citrus." },

  { id: "w5", name: "Pinot Noir 'Russian River'", vineyard: "Kosta Browne", region: "Sonoma, CA", vintage: "2019", type: "red", bottlePrice: "88", glassPrice: "20", pairsWith: ["Ribeye", "Roasted Bone Marrow", "Halibut"], notes: "Elegant and structured with dark cherry, earth, and spice." },
  { id: "w6", name: "Bordeaux Blend", vineyard: "Château Margaux", region: "Margaux, France", vintage: "2015", type: "red", bottlePrice: "195", pairsWith: ["Dry-Aged Ribeye", "Heritage Pork Ragu"], notes: "Full-bodied with cassis, cedar, and velvety tannins. A cellar treasure." },
  { id: "w7", name: "Barbera d'Alba", vineyard: "Giacomo Conterno", region: "Piedmont, Italy", vintage: "2019", type: "red", bottlePrice: "62", glassPrice: "15", pairsWith: ["Heritage Pork Ragu", "Mushroom Risotto", "Bone Marrow"], notes: "Bright red fruit, baking spice, and lively acidity." },
  { id: "w8", name: "Syrah", vineyard: "Saxum Broken Stones", region: "Paso Robles, CA", vintage: "2018", type: "red", bottlePrice: "120", pairsWith: ["Ribeye", "Branzino", "Octopus"], notes: "Intense dark fruit, black pepper, smoked meat — a power house." },
  { id: "w9", name: "Cabernet Sauvignon", vineyard: "Dunn Howell Mountain", region: "Napa, CA", vintage: "2017", type: "red", bottlePrice: "145", pairsWith: ["Dry-Aged Ribeye", "Heritage Pork Ragu"], notes: "Massive yet refined, with cassis, graphite, and mountain tannins." },

  { id: "w10", name: "Blanc de Blancs", vineyard: "Pierre Péters", region: "Champagne, France", vintage: "NV", type: "sparkling", bottlePrice: "88", glassPrice: "21", pairsWith: ["Oysters", "Lobster Benedict", "Scallops"], notes: "Elegant, chalky, with brioche and green apple. Grand Cru." },
  { id: "w11", name: "Rosé", vineyard: "Château d'Esclans 'Garrus'", region: "Provence, France", vintage: "2021", type: "rose", bottlePrice: "74", glassPrice: "18", pairsWith: ["Tomato Salad", "Octopus", "Grain Bowl"], notes: "The benchmark for Provence rosé — dry, complex, and luxurious." },
  { id: "w12", name: "Late Harvest Riesling", vineyard: "Egon Müller Scharzhof", region: "Mosel, Germany", vintage: "2018", type: "dessert", bottlePrice: "65", glassPrice: "15", pairsWith: ["Pot de Crème", "Panna Cotta", "Olive Oil Cake"], notes: "Honeyed apricot, peach, and crystalline acidity." },
];