'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { search, SearchList, MovieList } from "@/lib/movieDb";
import Block from "../Block/Block";

const Search = () => {

  const [searchString, setSearchString] = useState<string>('');
  const [focus, setFocus] = useState(false);
  const [searchResponse, setSearchResponse] = useState<MovieList[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e) {
      setSearchString(e.target.value);
    }
  };

  const handleClick = () => {
    setFocus(!focus);
    if(!focus){
      setSearchResponse([]);
    }
  };

  useEffect(() => {
    const getSearchResult = async () => {
      if(!searchString) {
        return [];
      }
      const searchResult: MovieList = await search(searchString);
      const searchArray = [searchResult];
      setSearchResponse(searchArray);
      return searchArray;
    };
    getSearchResult();
  }, [searchString]);

  if(!searchResponse) {
    return(<></>);
  }

  return(
    <div className="flex w-full h-10 cursor-pointer">
      <label className="relative block w-full z-30">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </span>
        <input 
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm text-black" 
          type="text" 
          placeholder="Search movie titles"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
          onFocus={() => handleClick()}
        />
      </label>

      {focus &&
        <div className="flex w-full h-screen fixed bg-black opacity-100 z-20 top-32 overflow-y-auto">
          {searchResponse?.map((item: any, index: number) => {
            return(
              <div className="grid grid-cols-2 gap-2 w-full h-full" key={index}>
                <Block content={item} variant='small' />
                {item.title}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Search;
