import Search from "@/components/Search/Search";
import Genres from './Genres';
import { GenresList, genres } from '@/lib/movieDb';

export default async function Discover() {
  const allGenres: GenresList = await genres();

  return(
    <main className="w-full h-screen px-6">
      <div className="sm:fixed sm:top-3 sm:left-24">
        <h3 className="font-bold text-xl">Movies</h3>
      </div>
      <div className="pt-6">
        <div>
          <Search />
        </div>
        <div className="font-bold text-lg pt-8">
          <h3>Discover</h3>
        </div>
        <div className="pt-4">
          <Genres data={allGenres}/>
        </div>
      </div>
    </main>
  );
};
