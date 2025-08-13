// Categorias do portfolio
export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: 'todos', label: 'Todos os Projetos' },
  { id: 'website', label: 'Websites' },
  { id: 'mobile', label: 'Motion Design 3D' },
  { id: 'ecommerce', label: 'Dashboards' },    
];

// Mapeamento de categorias para facilitar
export const categoryMap = {
  website: 'Websites',
  mobile: 'Motion Design 3D',
  ecommerce: 'Dashboards'
} as const;
