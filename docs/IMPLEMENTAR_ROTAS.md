# Como Implementar Rotas no Projeto

## 1. Instalar React Router

```bash
npm install react-router-dom
```

## 2. Estrutura de Pastas Sugerida

```
src/
  ├── pages/
  │   ├── Home.tsx          # Página principal com todas seções
  │   ├── ProjectDetails.tsx # Detalhes do projeto (já existe)
  │   └── NotFound.tsx      # Página 404
  ├── components/           # Componentes já existentes
  └── App.tsx              # Configuração de rotas
```

## 3. Configurar Rotas no App.tsx

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 4. URLs dos Projetos

- `/` - Home com todas seções
- `/projeto/1` - WebSites Corporativos
- `/projeto/2` - Motion Design 3D
- `/projeto/3` - Dashboards

## 5. Alternativa: URLs Amigáveis

```typescript
// URLs mais amigáveis
<Route path="/projeto/websites-corporativos" element={<ProjectDetails projectId="1" />} />
<Route path="/projeto/motion-design-3d" element={<ProjectDetails projectId="2" />} />
<Route path="/projeto/dashboards" element={<ProjectDetails projectId="3" />} />
```

## 6. Navegação no Portfolio

```typescript
// Em Portfolio.tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// No botão do olho
onClick={() => navigate(`/projeto/${project.id}`)}
```

## 7. Botão Voltar

```typescript
// Em ProjectDetails.tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// No botão voltar
onClick={() => navigate('/')}
```

## Opção Simples: Manter Como Está

Se preferir manter simples por enquanto, o sistema atual funciona bem para:
- Sites pequenos
- Portfolios simples
- MVPs rápidos

Você sempre pode adicionar rotas depois quando precisar de:
- SEO melhor
- Links compartilháveis
- Analytics por página
