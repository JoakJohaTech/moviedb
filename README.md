# CompileIt Case

This is a webpage made for compileIt's work case.

## Getting Started

### Requirments

- Node 18

Install dependencies:

```bash
npm install
```

For this project to work correctly you will need to get both an API key and a read-only token from MovieDb.
Put these two keys an a file called `.env.local` in the root of the project.

```bash
MOVIE_DB_API_KEY={YOUR_API_KEY_HERE}
NEXT_PUBLIC_MOVIE_DB_API_TOKEN={YOUR_TOKEN_HER}
```

Get the API key from [themoviedb](https://www.themoviedb.org/settings/api)

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production

```bash
npm run build
npm run start
```
