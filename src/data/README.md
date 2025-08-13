# 📁 Estrutura de Dados do Portfolio

## Organização dos Arquivos

### 1. `portfolioProjects.ts`
Contém os dados dos cards do portfolio (visão resumida dos projetos).

```typescript
interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;        // Caminho da imagem/vídeo de preview
  category: string;     // website | mobile | ecommerce
  technologies: string[];
  link: string;
  github: string;
}
```

### 2. `projectsDetails.ts`
Contém os dados completos de cada projeto para a página de detalhes.

```typescript
interface ProjectDetail {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  date: string;
  url: string;
  github: string;
  technologies: string[];
  images: string[];     // Array de imagens/vídeos/gifs
  description: string;
  features: string[];
  challenges: string;
  results: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}
```

### 3. `categories.ts`
Define as categorias do portfolio e seus labels.

```typescript
interface Category {
  id: string;
  label: string;
}
```

## Como Adicionar um Novo Projeto

### 1. Adicione no `portfolioProjects.ts`:
```typescript
{
  id: 4,
  title: 'Novo Projeto',
  description: 'Descrição breve do projeto',
  image: '/preview-projeto.jpg',
  category: 'website',
  technologies: ['React', 'Node.js'],
  link: '#',
  github: '#'
}
```

### 2. Adicione no `projectsDetails.ts`:
```typescript
'4': {
  title: 'Novo Projeto',
  subtitle: 'Descrição mais detalhada',
  category: 'Website',
  client: 'Nome do Cliente',
  date: '01 de Janeiro, 2024',
  url: 'https://projeto.com',
  github: 'https://github.com/user/projeto',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  images: [
    '/imagem1.jpg',
    '/video.mp4',
    '/animacao.gif'
  ],
  description: `Descrição completa do projeto...`,
  features: [
    'Feature 1',
    'Feature 2'
  ],
  challenges: `Desafios enfrentados...`,
  results: [
    'Resultado 1',
    'Resultado 2'
  ],
  testimonial: {
    text: "Depoimento do cliente",
    author: "Nome",
    role: "Cargo",
    avatar: "URL da foto"
  }
}
```

## Tipos de Mídia Suportados

- **Imagens**: `.jpg`, `.png`, `.webp`
- **Vídeos**: `.mp4`, `.webm`, `.ogg`, `.mov`
- **GIFs**: `.gif`

## Categorias Disponíveis

- `website` → "Websites"
- `mobile` → "Motion Design 3D"
- `ecommerce` → "Dashboards"

## Importação Simplificada

Use o arquivo de índice para importações mais limpas:

```typescript
import { portfolioProjects, projectsDetails, categories } from '../data';
```
