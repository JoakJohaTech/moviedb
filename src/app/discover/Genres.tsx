'use client';
import { useEffect, useState } from "react";
import Block from "@/components/Block/Block";
import { GenresList, MovieGenre, MovieList, getDiscover } from '@/lib/movieDb';
import { ApprovedGenres } from '@/constans';

interface Props {
  data: GenresList;
}

const Genres = (props: Props) => {

  const [discover, setDiscover] = useState<MovieList[]>();
  const [focusedGenre, setFocusedGenre] = useState<number | null>();

  const handelClick = (genre: number) => {
    setFocusedGenre(genre);
  };

  useEffect(() => {
    if(!focusedGenre) {
      return;
    }
    const getDiscoverResult = async () => {
      setDiscover([]);
      const discoverResult: MovieList = await getDiscover(focusedGenre);
      const discoverArray = [discoverResult];
      setDiscover(discoverArray);
      return discoverArray;
    };
    getDiscoverResult();
  }, [focusedGenre]);

  const { data } = props;

  return(
    <div className="flex flex-col justify-center items-center">
      <div className="md:flex md:flex-row md:flex-wrap grid grid-cols-3 gap-4">
        {data.genres?.map((item: MovieGenre, index: number) => {
          if(ApprovedGenres.includes(item.name)) {
            return(
              <div className="p-1" key={index}>
                <span className="border-solid border-2 rounded-3xl w-28 h-9 focus-within:bg-white p-2 focus-within:text-black cursor-pointer">
                  <input
                    className="w-full overflow-hidden font-bold text-sm text-ellipsis cursor-pointer" 
                    type={'button'}
                    onClick={() => handelClick(item.id)}
                    value={item.name}
                  >
                  </input>
                </span>
              </div>
            );
          }
          return(<></>);
        })}
      </div>
      {focusedGenre &&
        <div className="flex flex-col justify-center items-center pt-10">
          <div className="flex">
            {discover?.map((item: MovieList, index: number) => {
              return(
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full h-full" key={index}>
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

export default Genres;
