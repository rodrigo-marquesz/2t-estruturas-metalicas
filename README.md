# Dordetti Landing Page

Esta é uma landing page moderna desenvolvida com React e Vite para a empresa 2T Estruturas Metálicas. O objetivo é apresentar serviços, informações de contato e dicas úteis para clientes.

## Funcionalidades

- Layout responsivo e moderno
- Seção de apresentação
- Galeria de imagens
- Informações de contato com formulário
- Seções de serviços, header e footer

## Estrutura do Projeto

```Bash
├── public/           # Arquivos públicos e imagens
├── src/
│   ├── components/   # Componentes React organizados por função
│   ├── data/         # Informações variadas
│   ├── App.tsx       # Componente principal
│   └── main.tsx      # Ponto de entrada
├── package.json      # Dependências e scripts
├── vite.config.ts    # Configuração do Vite
├── tsconfig*.json    # Configuração do TypeScript
```

## Como executar o projeto

1. **Clone o repositório:**

   ```Bash
   git clone https://github.com/seu-usuario/dordetti-landing-page.git
   cd dordetti-landing-page
   ```

2. **Instale as dependências:**

   ```Bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```Bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra `http://localhost:5173` para visualizar a landing page.

## Personalização

- Edite os componentes em `src/components` para alterar textos, imagens ou estilos.
- As dicas de cuidado com materiais metálicos podem ser ajustadas em `Contact.tsx`.

## Build para produção

```powershell
npm run build
```

Os arquivos finais estarão na pasta `dist/`.

## Licença

Este projeto é de uso pessoal e pode ser adaptado conforme necessidade.
