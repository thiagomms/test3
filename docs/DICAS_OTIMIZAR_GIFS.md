# Dicas para Otimizar GIFs no Site

## Ajuste Automático Implementado

O sistema agora detecta automaticamente arquivos GIF e ajusta a exibição:
- **GIFs**: Usam `object-contain` (mantém proporção original)
- **Imagens normais**: Usam `object-cover` (preenche o espaço)
- **Fundo branco** para GIFs (melhor visualização)

## Como Otimizar seus GIFs

### 1. Tamanho Recomendado
- **Largura**: 1920px ou 1280px
- **Altura**: Proporcional ao conteúdo
- **Tamanho do arquivo**: Máximo 5MB (ideal: 2-3MB)

### 2. Ferramentas de Otimização

#### Online (Gratuitas)
- **EZGIF.com**: https://ezgif.com/optimize
  - Reduz cores
  - Remove frames duplicados
  - Ajusta velocidade

- **ILoveIMG**: https://www.iloveimg.com/compress-image/compress-gif
  - Compressão automática
  - Mantém qualidade

#### Desktop
- **ScreenToGif** (Windows)
  - Grava e edita GIFs
  - Otimização integrada
  
- **GIPHY Capture** (Mac)
  - Captura de tela em GIF
  - Upload direto

### 3. Configurações Ideais para Dashboards

```bash
# Usando ffmpeg para converter vídeo em GIF otimizado
ffmpeg -i dashboard-demo.mp4 -vf "fps=10,scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif

# Parâmetros:
# fps=10: 10 frames por segundo (suave e leve)
# scale=1280: Largura de 1280px
# loop=0: Loop infinito
```

### 4. Proporções Recomendadas

Para dashboards, use uma dessas proporções:
- **16:9** - Padrão widescreen (1920x1080, 1280x720)
- **4:3** - Mais quadrado (1024x768)
- **16:10** - Meio termo (1920x1200, 1280x800)

### 5. Conteúdo do GIF

#### DO ✅
- Mostre interações importantes
- Use transições suaves
- Destaque dados changing em tempo real
- Loop perfeito (início = fim)

#### DON'T ❌
- Movimentos muito rápidos
- Textos pequenos demais
- Cores muito vibrantes
- Duração > 30 segundos

### 6. Exemplo de Estrutura

```
1. Estado inicial do dashboard (2s)
2. Hover sobre gráfico (1s)
3. Clique e expansão (2s)
4. Dados atualizando (2s)
5. Volta ao estado inicial (1s)
Total: ~8 segundos
```

### 7. Alternativa: Use MP4

Se o GIF ficar muito grande, considere MP4:
- 90% menor que GIF
- Melhor qualidade
- Suporte nativo no site

```javascript
// Basta trocar a extensão
images: [
  '/dashboard-demo.mp4', // Vídeo ao invés de GIF
  '/dashboard-static.png'
]
```

### 8. Script para Otimizar GIFs em Lote

```bash
#!/bin/bash
# optimize-gifs.sh

for gif in *.gif; do
  # Cria backup
  cp "$gif" "${gif%.gif}_original.gif"
  
  # Otimiza com gifsicle
  gifsicle -O3 --colors 128 "$gif" -o "$gif"
  
  echo "Otimizado: $gif"
done
```

### 9. Teste de Performance

Após adicionar GIFs:
1. Abra o DevTools (F12)
2. Aba Network
3. Recarregue a página
4. Verifique o tempo de carregamento

**Meta**: Cada GIF deve carregar em < 2 segundos

### 10. Fallback para Imagem Estática

Para melhor performance, considere:

```javascript
// Mostra imagem estática primeiro, GIF ao hover
const [showGif, setShowGif] = useState(false);

<img 
  src={showGif ? '/dashboard.gif' : '/dashboard-static.jpg'}
  onMouseEnter={() => setShowGif(true)}
  onMouseLeave={() => setShowGif(false)}
/>
```

## Resultado Final

Com essas otimizações:
- ✅ GIFs carregam rapidamente
- ✅ Mantém proporção correta
- ✅ Boa qualidade visual
- ✅ Performance otimizada
