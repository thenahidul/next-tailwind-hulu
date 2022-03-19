import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Movie = ({ movie }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	return (
		<div className="sm:p-2 group cursor-pointer transition duration-200 ease-in sm:hover:scale-105 overflow-hidden">
			<Image
				src={`${BASE_URL}/${movie.backdrop_path || movie.poster_path}`}
				layout="responsive"
				width="1920"
				height="1080"
				alt={movie.title}
				className="transition duration-300 sm:group-hover:scale-125"
			/>
			<p className="truncate text-gray-400 py-2 text-sm">
				{movie.overview}
			</p>
			<h2 className="md:text-lg text-base">
				{movie.title || movie.original_title}
			</h2>
			<p className="flex justify-between items-center mt-3 text-sm text-gray-400 transition duration-200 ease-in-out opacity-0 group-hover:opacity-100">
				<span>{movie.release_date}</span>
				<span className="flex items-center space-x-2">
					<ThumbUpIcon className="w-4 mr-1" /> {movie.vote_count}
				</span>
			</p>
		</div>
	);
};

export default Movie;
