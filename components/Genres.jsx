import Link from "next/link";
import { useQuery } from "react-query";

const URI = `${process.env.NEXT_PUBLIC_TMDB_API_URL}/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`;

const fetchGenres = async () => {
	return await fetch(URI).then((r) => r.json());
};

const Genres = () => {
	const { isLoading, isFetching, isError, error, data } = useQuery(
		"genres",
		fetchGenres
	);

	if (isLoading || isFetching) return "Loading...";
	if (isError) return error.message;

	const genres = [
		{ id: 0, name: "Trending" },
		...(data.genres ? data.genres : [])
	];

	return (
		<ul className="flex py-5 gap-x-2 overflow-x-scroll scrollbar-hide whitespace-nowrap">
			{genres.map((genre) => (
				<li
					key={genre.id}
					className="px-2 sm:px-5 last:pr-7 cursor-pointer transition duration-150 hover:scale-125 hover:text-red-400 active:text-red-700">
					<Link href={!genre.id ? "/" : `/?genre=${genre.id}`}>
						{genre.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Genres;
