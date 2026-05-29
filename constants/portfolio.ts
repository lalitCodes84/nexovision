export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  href?: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  { title: "SaaS Dashboard", category: "Product",   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
  { title: "E-Commerce Platform", category: "Storefront", image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80" },
  { title: "Business Website", category: "Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" },
  { title: "Creative Portfolio", category: "Personal", image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80" },
];
