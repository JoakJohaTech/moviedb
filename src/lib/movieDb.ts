const readToken = process.env.MOVIE_DB_API_TOKEN;
const test = process.env.NEXT_PUBLIC_MOVIE_DB_API_TOKEN;

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

export async function getConfig() {
  const url = 'https://api.themoviedb.org/3/configuration';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${test}`
    }
  };
  const response: MovieDbConfig = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
};

export async function loadRated() {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${readToken}`
    }
  };
  const response: MovieList = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
};

export async function loadTrending() {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${readToken}`
    }
  };
  const response: MovieList = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
};

export async function loadPlaying() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${readToken}`
    }
  };
  const response: MovieList = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
};

export async function search(searchWord: string, pageNumber: number = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchWord}&page=${pageNumber}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${test}`
    }
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
};

export async function genres() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${readToken}`
    }
  };
  const response: GenresList = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
}

export async function getDiscover(genre: number) {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${test}`
    }
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
  
  return response;
}
