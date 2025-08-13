# 🎬 Adicionando Vídeos de Produção no Portfolio

## Novo Projeto Adicionado: Captura e Vídeos

### Onde está:
- **Portfolio (Card)**: `src/data/portfolioProjects.ts` - ID 4
- **Detalhes Completos**: `src/data/projectsDetails.ts` - ID 4
- **Categoria**: `video` - "Captura e Vídeos"

## Como Adicionar Seus Próprios Vídeos

### 1. Vídeos de Preview (Card do Portfolio)
Em `src/data/portfolioProjects.ts`:
```typescript
{
  id: 4,
  title: 'Captura Audiovisual',
  image: '/seu-video-preview.mp4', // ou imagem
  // ...
}
```

### 2. Galeria de Vídeos (Página de Detalhes)
Em `src/data/projectsDetails.ts`:
```typescript
'4': {
  // ...
  images: [
    '/video-producao-1.mp4',
    '/video-producao-2.mp4', 
    '/thumbnail-projeto.jpg',
    '/making-of.gif'
  ],
  // ...
}
```

## Formatos Recomendados

### Para Vídeos de Produção:
- **Resolução**: 1920x1080 (Full HD) ou 1280x720 (HD)
- **Formato**: MP4 (H.264)
- **Taxa de bits**: 5-10 Mbps
- **Duração**: 
  - Preview: 5-10 segundos (loop)
  - Galeria: 30-60 segundos

### Para Showcases/Portfólio:
- **Showreel**: 1-2 minutos com melhores trabalhos
- **Cases individuais**: 30-90 segundos
- **Making of**: GIFs de 5-10 segundos

## Otimização

### Comprimir Vídeos:
```bash
# Usando FFmpeg
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k output.mp4
```

### Criar Thumbnails:
```bash
# Extrair frame do vídeo
ffmpeg -i video.mp4 -ss 00:00:05 -frames:v 1 thumbnail.jpg
```

## Estrutura de Arquivos

```
public/
├── producao/
│   ├── showreel-2024.mp4
│   ├── case-empresa-x.mp4
│   ├── making-of-projeto.gif
│   └── thumbnails/
│       ├── thumb-case-1.jpg
│       └── thumb-case-2.jpg
```

## Exemplo de Showcase

### Vídeo Institucional:
```typescript
images: [
  '/producao/video-final.mp4',      // Vídeo completo
  '/producao/making-of.gif',        // Bastidores
  '/producao/storyboard.jpg',       // Planejamento
  '/producao/color-grading.jpg'     // Processo
]
```

### Motion Graphics:
```typescript
images: [
  '/producao/animacao-logo.mp4',
  '/producao/vinheta-abertura.mp4',
  '/producao/lower-thirds.gif',
  '/producao/style-frames.jpg'
]
```

## Dicas Profissionais

1. **Ordem dos Vídeos**: Comece com o mais impactante
2. **Variedade**: Misture vídeos finais, processos e bastidores
3. **Qualidade > Quantidade**: Melhor poucos vídeos excelentes
4. **Loading**: Considere lazy loading para performance
5. **Autoplay**: Use com moderação (muted, loop)

## Metadados Importantes

Atualize também as informações do projeto:
- **Tecnologias**: After Effects, Premiere, DaVinci, etc.
- **Cliente**: Nome da empresa
- **Resultados**: Views, engajamento, ROI
- **Depoimento**: Feedback do cliente

## Performance

Para sites com muitos vídeos:
1. Use CDN (Cloudinary, Vimeo, YouTube)
2. Implemente lazy loading
3. Ofereça qualidades adaptativas
4. Considere placeholders/thumbnails
