import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import {ForwardedRef, forwardRef} from "react"; 

const Thumbnail = forwardRef(({ movie }: any, ref:ForwardedRef<any>) => {
  //console.log(movie)
  // Show the movie detail on the image, bring opacity up to 1 on thumbnail hover (use group)
  const BASE_URL = "https://image.tmdb.org/t/p/original/"
  return (
      <div
        ref={ref}    
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image 
          layout="responsive"
          src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` || `${BASE_URL}${movie.poster_path}`} 
          priority={true}
          height={1080}
          width={1980}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{movie.overview}</p>
          <h2 className="text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {movie.title || movie.original_name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {movie.media_type && `${movie.media_type} -`} {" "}
            {movie.release_date || movie.first_air_date} - {" "}
            <ThumbUpIcon className="h-5 mx-2"/> {movie.vote_count}
          </p>
        </div>
      </div>
  )
})

export default Thumbnail