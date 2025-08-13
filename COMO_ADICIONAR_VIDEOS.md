# Como Adicionar Vídeos ao Site

## Suporte para Vídeos MP4 (Recomendado)

O site agora suporta vídeos MP4, WebM, OGG e MOV tanto no **Portfolio** (grade de projetos) quanto nos **Detalhes do Projeto**. Os vídeos são mais eficientes que GIFs em termos de:
- **Qualidade**: Melhor resolução e cores
- **Tamanho**: Arquivos muito menores
- **Performance**: Carregamento mais rápido

## Como Adicionar Vídeos

### No Portfolio (Grade de Projetos)

Para adicionar um vídeo como preview do projeto no Portfolio:

```javascript
// Em src/components/Portfolio.tsx
{
  id: 2,
  title: 'Motion Design 3D',
  description: 'Animações 3D profissionais',
  image: '/meu-video.mp4',  // Vídeo aqui!
  category: 'mobile',
  technologies: ['After Effects', 'Cinema 4D']
}
```

**Comportamento no Portfolio:**
- Reprodução automática (sem som)
- Loop contínuo
- Sem controles (para visual limpo)
- Efeito hover mantido

### Nos Detalhes do Projeto

### 1. Salve seus vídeos na pasta `public`
```
public/
  ├── videos/
  │   ├── demo-ecommerce.mp4
  │   ├── animation-3d.mp4
  │   └── app-demo.webm
```

### 2. Adicione o caminho do vídeo no array de imagens
No arquivo `src/components/ProjectDetails.tsx`, adicione o caminho do vídeo:

```javascript
images: [
  '/imagem1.jpg',
  '/videos/demo-app.mp4',  // Seu vídeo aqui
  '/imagem2.jpg'
],
```

**Importante**: Use `/` no início do caminho, não `public/`

## Configurações do Vídeo

Os vídeos são configurados com:
- `controls`: Mostra controles de play/pause
- `autoPlay`: Inicia automaticamente (sem som)
- `muted`: Começa sem som (necessário para autoplay)
- `loop`: Repete automaticamente
- `playsInline`: Funciona bem em dispositivos móveis

## Formatos Suportados
- `.mp4` (recomendado - funciona em todos navegadores)
- `.webm` (boa compressão)
- `.ogg` (alternativa open source)
- `.mov` (formato Apple)

## Dicas de Otimização

### Para Vídeos:
1. **Comprima seus vídeos**: Use ferramentas como HandBrake
2. **Resolução**: 1920x1080 máximo para web
3. **Duração**: Mantenha curtos (15-30 segundos)
4. **Tamanho**: Tente manter abaixo de 10MB

### Converter Vídeo para Web:
```bash
# Usando ffmpeg para comprimir MP4
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 output.mp4

# Remover áudio se não for necessário
ffmpeg -i input.mp4 -c copy -an output.mp4
```

## Opção 2: Usar GIFs (Não Recomendado)

Se ainda preferir GIFs, simplesmente adicione como imagem normal:
```javascript
images: [
  '/animacao.gif',
  '/demo.gif'
],
```

**Desvantagens dos GIFs:**
- Arquivos muito grandes (10-50x maior que MP4)
- Qualidade inferior (256 cores apenas)
- Sem controles de reprodução
- Carregamento mais lento

## Exemplo Prático

Para adicionar um vídeo de demonstração ao projeto "Motion Design 3D":

1. Salve o vídeo: `public/videos/motion-3d-demo.mp4`
2. No ProjectDetails.tsx, encontre o projeto '2' e atualize:

```javascript
'2': {
  title: 'Motion Design 3D',
  images: [
    'https://example.com/imagem1.jpg',
    '/videos/motion-3d-demo.mp4',  // Adicione aqui
    'https://example.com/imagem2.jpg'
  ],
  // ... resto do código
}
```

O vídeo aparecerá automaticamente na galeria com todos os controles!
