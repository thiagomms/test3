# Como Adicionar Projetos de Dashboard

## Estrutura Configurada

O projeto Dashboard já está configurado no sistema com:
- **Categoria**: `ecommerce` (mapeada para "Dashboards" no menu)
- **ID do Projeto**: 3
- **Página de Detalhes**: Configurada em `ProjectDetails.tsx`

## Para Adicionar Mais Dashboards

### 1. No Portfolio (src/components/Portfolio.tsx)

Adicione um novo projeto no array `projects`:

```javascript
{
  id: 7, // próximo ID disponível
  title: 'Dashboard Financeiro',
  description: 'Painel de controle financeiro com indicadores KPI em tempo real.',
  image: '/dashboard-financeiro.jpg', // ou .mp4 para vídeo
  category: 'ecommerce', // mantém esta categoria para Dashboards
  technologies: ['React', 'Recharts', 'Python'],
  link: '#',
  github: '#'
}
```

### 2. Nos Detalhes (src/components/ProjectDetails.tsx)

Adicione os detalhes completos do projeto no objeto `projectData`:

```javascript
'7': {
  title: 'Dashboard Financeiro',
  subtitle: 'Sistema completo de análise financeira empresarial',
  category: 'Dashboard',
  client: 'FinanceCorp',
  date: '15 de Janeiro, 2024',
  url: 'https://finance-dashboard.com',
  github: '#',
  technologies: ['React', 'Recharts', 'Python', 'FastAPI', 'MongoDB'],
  images: [
    '/dashboard-1.jpg',
    '/dashboard-2.jpg',
    '/dashboard-3.mp4', // pode incluir vídeos
    '/dashboard-4.jpg'
  ],
  description: `Descrição detalhada do projeto...`,
  
  features: [
    'Feature 1',
    'Feature 2',
    // ... mais features
  ],
  
  challenges: `Desafios enfrentados...`,
  
  results: [
    'Resultado 1',
    'Resultado 2',
    // ... mais resultados
  ],
  
  testimonial: {
    text: "Depoimento do cliente...",
    author: "Nome do Cliente",
    role: "Cargo do Cliente",
    avatar: "URL da foto"
  }
}
```

## Imagens Recomendadas para Dashboards

### Unsplash (Gratuitas)
- https://images.unsplash.com/photo-1551288049-bebda4e38f71 (Analytics)
- https://images.unsplash.com/photo-1460925895917-afdab827c52f (Business Dashboard)
- https://images.unsplash.com/photo-1551288049-bebda4e38f71 (Data Visualization)
- https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3 (Charts)

### Ou Use Suas Próprias
1. Salve em `public/dashboards/`
2. Reference como `/dashboards/seu-arquivo.jpg`

## Tecnologias Comuns para Dashboards

### Bibliotecas de Gráficos
- **React**: Chart.js, Recharts, Victory, Nivo
- **D3.js**: Para visualizações customizadas
- **ApexCharts**: Gráficos interativos modernos
- **Plotly**: Gráficos científicos e 3D

### Backend
- **Node.js + Express**: APIs REST
- **Python + FastAPI**: Para análise de dados
- **GraphQL**: Para queries complexas

### Bancos de Dados
- **PostgreSQL**: Dados relacionais
- **MongoDB**: Dados não estruturados
- **Redis**: Cache e real-time
- **InfluxDB**: Séries temporais

### Real-time
- **Socket.io**: Atualizações em tempo real
- **WebSockets**: Comunicação bidirecional
- **Server-Sent Events**: Updates unidirecionais

## Dicas para Screenshots/Vídeos

### Para Imagens
- Resolução: 1920x1080 ou 1280x720
- Formato: JPG (menor) ou PNG (qualidade)
- Mostre diferentes views do dashboard

### Para Vídeos
- Duração: 5-15 segundos
- Mostre interações e animações
- Use ferramentas como OBS ou ScreenFlow
- Comprima com HandBrake

## Exemplo de Dashboard Completo

```javascript
// Portfolio.tsx
{
  id: 8,
  title: 'Dashboard de Vendas',
  description: 'Análise completa de vendas com previsões e tendências.',
  image: '/dashboard-vendas-preview.mp4',
  category: 'ecommerce',
  technologies: ['Vue.js', 'ECharts', 'Laravel']
}

// ProjectDetails.tsx
'8': {
  title: 'Dashboard de Vendas E-commerce',
  subtitle: 'Sistema integrado de análise de vendas com IA preditiva',
  // ... resto dos detalhes
}
```

## Categoria no Menu

A categoria "Dashboards" já está configurada:
- ID interno: `ecommerce`
- Label exibido: "Dashboards"
- Isso foi feito para manter compatibilidade com o sistema existente
