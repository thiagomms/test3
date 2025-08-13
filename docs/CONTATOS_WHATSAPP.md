# 📱 Configuração do Link do WhatsApp

## Como funciona o link do WhatsApp

O link usa o formato: `https://wa.me/NÚMERO`

### Formato do número:
- Código do país + código de área + número
- SEM espaços, hífens ou parênteses
- SEM o símbolo + no início

### Exemplo:
- Número formatado: +55 61 99685-8829
- No link: 5561996858829
- Link completo: https://wa.me/5561996858829

## Adicionar mensagem pré-definida

Você pode adicionar uma mensagem que já aparecerá digitada:

```html
https://wa.me/5561996858829?text=Olá! Vim pelo site da AuLink
```

Para espaços na mensagem, use `%20`:
```html
https://wa.me/5561996858829?text=Olá!%20Gostaria%20de%20um%20orçamento
```

## Onde está configurado

Arquivo: `src/components/Footer.tsx`
Linha: ~52

```tsx
<a 
  href="https://wa.me/5561996858829"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-blue-400 transition-colors"
>
  +55 61 99685-8829
</a>
```

## Para alterar

1. Abra `src/components/Footer.tsx`
2. Encontre a linha com `href="https://wa.me/..."`
3. Substitua apenas os números após `wa.me/`
4. Mantenha o formato sem espaços ou caracteres especiais
