import { 
  CONFIG_URL, 
  SEARCH_URL, 
  GENRES_URL, 
  DISCOVER_URL 
} from '@/constans';

const readToken = process.env.MOVIE_DB_API_TOKEN;
const pubReadToken = process.env.NEXT_PUBLIC_MOVIE_DB_API_TOKEN;

export interface MovieList {
  adult: boolean,
  backdrop_path: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  vote_average: number,
  vote_count: number
}

export interface MovieDbConfig {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: []
  }
}

export interface SearchList {
  results: [];
}

export interface MovieGenre {
  id: number;
  name: string;
} 

export interface GenresList {
    genres: MovieGenre[];
}

interface Options {
  method: string;
  headers: {
    accept: string;
    Authorization: string
  }
}

function getOptions(): Options {
  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${pubReadToken}`
    }
  };
}

async function fetchWrapper<T>(url: string): Promise<T> {
  const options = getOptions();
  try {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  } catch (error: any) {
    return error.message;
  }
};

export async function getContent(url: string): Promise<MovieList | undefined> {
  const data = await fetchWrapper<MovieList>(url);
  return data;
}

export async function getConfig(): Promise<MovieDbConfig | undefined> {
  const data = await fetchWrapper<MovieDbConfig>(CONFIG_URL);
  return data;
};


export async function search(searchWord: string, pageNumber: number = 1): Promise<SearchList> {
  const url = `${SEARCH_URL}/movie?query=${searchWord}&page=${pageNumber}`;
  const data = await fetchWrapper<SearchList>(url);
  return data;
};

export async function genres(): Promise<GenresList> {
  const data = await fetchWrapper<GenresList>(GENRES_URL);
  return data;
}

export async function getDiscover(genre: number): Promise<MovieList> {
  const url = `${DISCOVER_URL}?with_genres=${genre}`;
  const data = await fetchWrapper<MovieList>(url);
  return data;
}
