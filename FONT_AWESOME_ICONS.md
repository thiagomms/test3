# 🎨 Uso do Font Awesome no Projeto

## Instalação
Font Awesome foi adicionado via CDN no arquivo `index.html`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

## Como Usar Ícones

### Formato Básico
```html
<i className="fab fa-whatsapp"></i>
```

### Prefixos de Categorias
- `fas` - Solid (ícones sólidos)
- `far` - Regular (ícones vazados)
- `fab` - Brands (marcas e redes sociais)
- `fal` - Light (ícones leves - Pro)
- `fad` - Duotone (duas cores - Pro)

### Tamanhos
Use classes Tailwind CSS para controlar o tamanho:
- `text-sm` - Pequeno
- `text-base` - Normal
- `text-lg` - Grande
- `text-xl` - Extra grande
- `text-2xl` - 2x grande

### Cores
Use classes Tailwind CSS:
- `text-blue-400` - Azul
- `text-gray-300` - Cinza
- `text-white` - Branco

## Ícones Usados no Projeto

### Redes Sociais (Footer)
```html
<i className="fab fa-whatsapp text-blue-400 text-lg"></i>
<i className="fab fa-facebook-f text-xl"></i>
<i className="fab fa-instagram text-xl"></i>
<i className="fab fa-linkedin-in text-xl"></i>
```

## Encontrar Mais Ícones
Acesse: https://fontawesome.com/icons

### Exemplos Úteis
- WhatsApp: `fab fa-whatsapp`
- Telefone: `fas fa-phone`
- Email: `fas fa-envelope`
- Localização: `fas fa-map-marker-alt`
- GitHub: `fab fa-github`
- YouTube: `fab fa-youtube`
- Twitter/X: `fab fa-x-twitter`

## Misturando com Lucide React

O projeto usa ambos:
- **Lucide React**: Para ícones gerais da interface
- **Font Awesome**: Para ícones de marcas/redes sociais

Exemplo no Footer:
```tsx
// Lucide React para ícones gerais
<Mail size={18} className="text-blue-400 mr-3" />

// Font Awesome para marcas
<i className="fab fa-whatsapp text-blue-400 mr-3 text-lg"></i>
```
