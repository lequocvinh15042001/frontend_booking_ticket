import React, { useState } from 'react';
import MovieCard from './MovieCard';

const productPerRow = 20;
const MovieList = (movies) => {

    const [next, setNext] = useState(productPerRow);
    const handleLoadMoreProduct = () => {
      setNext(next + productPerRow);
    };

  return (
    <div>
    <div>
        <div>
          {/* {movies &&
            movies
              ?.slice(0, next)
              .map((item) => (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  thumbnailUrl={item.thumbnailUrl}
                  name={item.name}
                  quantitySell={item.quantitySell}
                  price={item.price}
                  url={item.url_path}
                ></MovieCard>
              ))} */}
        </div>
        {next < movies?.length && (
          <div className="flex flex-col items-center justify-center bg-white">
            <button
              onClick={handleLoadMoreProduct}
            >
              View more
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieList