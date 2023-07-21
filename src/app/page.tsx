import { loadPlaying, loadRated, loadTrending, MovieList } from '@/lib/movieDb';
import Block from '@/components/Block/Block';
import Search from '@/components/Search/Search';

export default async function Home() {
  const topRated: MovieList = await loadRated();
  const trending: MovieList = await loadTrending();
  const playing: MovieList = await loadPlaying();

  const topRatedArray = [topRated];        
  const trendingArray = [trending];
  const playingArray = [playing];

  return (
    <main className="h-screen w-full max-xs:px-4">
      <div className="relative top-14">
        <Search />
        <div className="flex flex-col">
          <div className="font-bold text-3xl pr-4 py-6">
            <h3>Trending</h3>
          </div>
          <div className="flex justify-center items-center">
            {trendingArray.map((item, index: number) => {
              return(
                <div className="grid grid-rows-1 gap-3 overflow-hidden" key={index}>
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
                <div className="grid grid-cols-2 gap-3 w-full h-full" key={index}>
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
                <div className="grid grid-cols-2 gap-3 w-full h-full" key={index}>
                  <Block content={item} variant='small'/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
