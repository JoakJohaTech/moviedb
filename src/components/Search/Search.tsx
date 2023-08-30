'use client';
import { ChangeEvent, useEffect, useState } from "react";
import { search, SearchList, MovieList } from "@/lib/movieDb";
import Block from "../Block/Block";

const Search = () => {

  const [searchString, setSearchString] = useState<string>('');
  const [focus, setFocus] = useState(false);
  const [searchResponse, setSearchResponse] = useState<SearchList[]>([]);

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
      const searchResult = await search(searchString);
      let searchArray = [searchResult];
      setSearchResponse(searchArray);
      return searchArray;
    };
    getSearchResult();
  }, [searchString]);

  if(!searchResponse) {
    return(<></>);
  }

  return(
    <div className="flex max-xs:w-full w-[385px] h-10">
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
        <div className="absolute w-screen h-4/5 bg-black opacity-100 z-20 max-xs:top-32 top-20">
          <div className="max-xs:flex max-xs:flex-col">
            <h3 className="font-bold text-xl pb-4">Search</h3>
            {searchResponse?.map((item: any, index: number) => {
              return(
                <div className="grid grid-cols-3 max-xs:gap-6 gap-10 w-1/2 max-xs:grid-cols-2 max-xs:w-full max-xs:h-full" key={index}>
                  <Block content={item} variant='small' />
                </div>
              );
            })}
          </div>

        </div>
      }
    </div>
  );
};

export default Search;
