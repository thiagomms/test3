# 🚀 Exemplo: Adicionando um Novo Projeto

## Projeto: Sistema de Gestão Escolar

### Passo 1: Adicionar Preview no Portfolio

Em `src/data/portfolioProjects.ts`, adicione ao final do array:

```typescript
{
  id: 4,
  title: 'Sistema Escolar Online',
  description: 'Plataforma completa de gestão escolar com portal do aluno e professor.',
  image: '/escola-preview.jpg',  // ou .mp4 para vídeo
  category: 'website',
  technologies: ['Vue.js', 'Laravel', 'MySQL'],
  link: '#',
  github: '#'
}
```

### Passo 2: Adicionar Detalhes Completos

Em `src/data/projectsDetails.ts`, adicione no objeto:

```typescript
'4': {
  title: 'Sistema Escolar Online',
  subtitle: 'Plataforma completa de gestão escolar com portal do aluno, professor e administrativo.',
  category: 'Sistema Web',
  client: 'Colégio Educação Plus',
  date: '15 de Março, 2024',
  url: 'https://escola.educacaoplus.com.br',
  github: 'https://github.com/aulink/sistema-escolar',
  technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker', 'AWS'],
  
  images: [
    '/escola-dashboard.jpg',
    '/escola-demo.mp4',        // Vídeo demonstrativo
    '/escola-mobile.gif',      // GIF animado
    '/escola-relatorios.png'
  ],
  
  description: `O Sistema Escolar Online revolucionou a gestão educacional do Colégio Educação Plus. 
  
  Desenvolvemos uma plataforma integrada que conecta alunos, professores, pais e administração em um ambiente digital moderno e intuitivo.`,
  
  features: [
    'Portal do aluno com notas e frequência em tempo real',
    'Sistema de mensagens entre pais e professores',
    'Gestão completa de turmas e horários',
    'Lançamento de notas e faltas online',
    'Geração automática de boletins e relatórios',
    'App mobile para alunos e responsáveis',
    'Sistema de matrículas online',
    'Biblioteca digital integrada'
  ],
  
  challenges: `O maior desafio foi migrar dados de 10 anos do sistema legado mantendo a integridade e criando uma interface que atendesse desde professores experientes até alunos do ensino fundamental.`,
  
  results: [
    'Redução de 80% no tempo de processamento de notas',
    '95% de adoção pelos professores no primeiro mês',
    'Economia de R$ 50.000/ano em papel e impressão',
    'Aumento de 60% na comunicação escola-família'
  ],
  
  testimonial: {
    text: "A AuLink transformou completamente nossa gestão escolar. O sistema é intuitivo, rápido e os pais adoraram poder acompanhar tudo pelo celular.",
    author: "Dra. Patricia Mendes",
    role: "Diretora do Colégio Educação Plus",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"
  }
}
```

### Passo 3: Adicionar Arquivos de Mídia

Salve os arquivos em `public/`:

```
public/
  ├── escola-dashboard.jpg     (screenshot do dashboard)
  ├── escola-demo.mp4          (vídeo de 15-30 segundos)
  ├── escola-mobile.gif        (animação do app mobile)
  └── escola-relatorios.png    (tela de relatórios)
```

### Passo 4: Testar

1. Abra o site em desenvolvimento
2. Vá até a seção Portfolio
3. O novo projeto deve aparecer
4. Clique no olho para ver os detalhes

## 📌 Dicas Importantes

### Imagens
- Resolução recomendada: 1920x1080 ou 1280x720
- Formato: JPG para fotos, PNG para screenshots
- Tamanho máximo: 500KB por imagem

### Vídeos
- Duração: 15-30 segundos
- Formato: MP4 (H.264)
- Resolução: 1280x720
- Tamanho máximo: 5MB

### GIFs
- Use para mostrar interações
- Mantenha abaixo de 3MB
- 10-15 fps é suficiente

### Categorias Disponíveis
- `website` → Aparece em "Websites"
- `mobile` → Aparece em "Motion Design 3D"
- `ecommerce` → Aparece em "Dashboards"

### Checklist Final
- [ ] Preview adicionado em `portfolioProjects.ts`
- [ ] Detalhes completos em `projectsDetails.ts`
- [ ] Imagens/vídeos salvos em `public/`
- [ ] IDs são únicos e sequenciais
- [ ] Caminhos das imagens começam com `/`
- [ ] Testado no navegador

## 🎯 Resultado Esperado

1. **No Portfolio**: Card com preview do projeto
2. **Ao clicar no olho**: Página detalhada com galeria
3. **Galeria**: Suporta imagens, vídeos e GIFs
4. **Responsivo**: Funciona em desktop e mobile
