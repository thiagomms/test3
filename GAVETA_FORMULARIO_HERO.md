# 📋 Gaveta Expansível do Formulário

## Como funciona

A gaveta do formulário na seção Hero tem um comportamento inteligente:

### 1. Estado Inicial
- Apenas o campo de email está visível
- Botão "Quero minha proposta"

### 2. Ao digitar o email
- Assim que o usuário começa a digitar o email, a gaveta se expande
- Aparecem dois campos adicionais:
  - **Nome completo** (com ícone de usuário)
  - **Telefone/WhatsApp** (com ícone do WhatsApp)

### 3. Animação suave
- A gaveta desce com animação de 500ms
- O campo de nome aparece primeiro
- O campo de telefone aparece 100ms depois (efeito cascata)
- Transição suave de opacidade e movimento

### 4. Formatação do telefone
- Máscara brasileira aplicada automaticamente
- Formato: (XX) XXXXX-XXXX
- Aceita apenas números
- Limite de 11 dígitos

### 5. Ao apagar o email
- Se o usuário apagar todo o email, a gaveta se fecha
- Os campos de nome e telefone são limpos

### 6. Após envio
- Mensagem de confirmação por 3 segundos
- Todos os campos são limpos
- Gaveta retorna ao estado inicial

## Dados coletados

```javascript
{
  email: "usuario@email.com",
  nome: "Nome Completo",
  telefone: "(11) 98765-4321",
  data: "01/01/2024 10:30:45"
}
```

## Validações

- **Email**: Campo obrigatório, validação HTML5
- **Nome**: Obrigatório quando visível
- **Telefone**: Obrigatório quando visível, formatação automática

## Personalização

Para ajustar a altura da gaveta:
- Procure por `max-h-56` no código
- Valores disponíveis: `max-h-48`, `max-h-56`, `max-h-64`, `max-h-72`

Para ajustar a velocidade da animação:
- `duration-500` = 500ms (atual)
- `duration-300` = mais rápida
- `duration-700` = mais lenta

## Integração com API

Os dados são logados no console. Para enviar para uma API:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/proposta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        nome: name,
        telefone: phone,
        data: new Date().toISOString()
      })
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      // ... resto do código
    }
  } catch (error) {
    console.error('Erro ao enviar:', error);
  }
};
```
