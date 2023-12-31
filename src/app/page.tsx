import { getContent } from '@/lib/movieDb';
import Block from '@/components/Block/Block';
import Search from '@/components/Search/Search';
import { PLAYING_URL, RATED_URL, TRENDING_URL } from '@/constans';

export default async function Home() {

  const topRated = await getContent(RATED_URL);
  const trending = await getContent(TRENDING_URL);
  const playing = await getContent(PLAYING_URL);

  const topRatedArray = [topRated];        
  const trendingArray = [trending];
  const playingArray = [playing];

  return (
    <main className="w-4/5 px-6 max-xs:px-4 relative max-xs:pt-8">
      <div className="sm:fixed sm:top-4 sm:left-24 max-xs:pb-2">
        <h3 className="font-bold text-xl w-24">Movies</h3>
      </div>
      <div className="sm:p-3">
        <Search />
        <div className="flex flex-col">
          <div className="font-bold text-3xl pr-4 py-6">
            <h3>Trending</h3>
          </div>
          <div className="flex md:flex-col sm:justify-center sm:items-center">
            {trendingArray.map((item, index: number) => {
              return(
                <div className="grid grid-rows-1 md:grid-cols-2 gap-3" key={index}>
                  <Block content={item} variant='big' />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="place-self-start font-bold text-3xl pr-4 py-6">
            <h3>Now Playing</h3>
          </div>
          <div className="flex">
            {playingArray.map((item, index: number) => {
              return(
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full h-full" key={index}>
                  <Block content={item} variant='small' />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="place-self-start font-bold text-3xl pr-4 py-6">
            <h3>TopRated</h3>
          </div>
          <div className="flex">
            {topRatedArray.map((item, index: number) => {
              return(
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full h-full" key={index}>
                  <Block content={item} variant='small'/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-gray-500 opacity-70">
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
      </div>
    </main>
  );
}
