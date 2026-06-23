# Chef Claude

Chef Claude is a React + Vite web app that suggests recipes from ingredients you already have.
It uses the Hugging Face Inference API (Llama 3.1 Instruct) to generate recipe responses in Markdown, then renders them in the UI.

## Features

- Add ingredients through a simple form
- View your current ingredient list
- Generate an AI recipe when you have enough ingredients
- Render AI response as formatted Markdown
- Clean, responsive UI styling

## Tech Stack

- React 19
- Vite 8
- react-markdown
- @huggingface/inference
- ESLint (flat config)

## Project Structure

```text
chef-claude/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── chef-claude-icon.png
│   ├── components/
│   │   ├── ClaudeRecipe.jsx
│   │   ├── Header.jsx
│   │   ├── IngredientsList.jsx
│   │   └── Main.jsx
│   ├── ai.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variable

Create a `.env` file in the project root:

```env
VITE_HF_ACCESS_TOKEN=your_huggingface_token_here
```

This token is required for Hugging Face chat completion requests.

### 3) Start development server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production bundle
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## How It Works

1. User adds ingredients in the form.
2. Ingredients are stored in React state.
3. After more than 3 ingredients, a **Get a recipe** button appears.
4. Clicking it calls `getRecipeFromMistral()` in `src/ai.js`.
5. The app sends:
   - a system prompt (recipe assistant behavior)
   - a user prompt with ingredient list
6. Response Markdown is rendered by `react-markdown` in `ClaudeRecipe`.

## Notes

- `.env` files are gitignored.
- Default ingredient examples are preloaded in `Main.jsx` for quick testing.

## License

No license file is currently included in this repository.
