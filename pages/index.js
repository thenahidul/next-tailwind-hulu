import Head from "next/head";
import Movies from "../components/Movies/Movies";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const fetchMovies = async (URI) => {
	return await fetch(URI).then((r) => r.json());
};

const generateURL = (genre) => {
	let URL = `${process.env.NEXT_PUBLIC_TMDB_API_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

	if (genre) {
		URL = `${process.env.NEXT_PUBLIC_TMDB_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genre}`;
	}

	return URL;
};

export default function Home({ movies }) {
	const router = useRouter();
	const { genre } = router.query;

	const URL = generateURL(genre);

	const results = useQuery("movies", () => fetchMovies(URL), {
		initialData: movies,
		refetchOnMount: false,
		enabled: false
	});

	useEffect(() => {
		results.refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [genre]);

	// console.log(results);
	return (
		<>
			<Head>
				<title>Hulululu</title>
				<meta name="description" content="A movie streaming app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Movies results={results} />
			</main>
		</>
	);
}

export const getServerSideProps = async (ctx) => {
	const { genre } = ctx.query;

	const URL = generateURL(genre);

	const movies = await fetchMovies(URL);

	return {
		props: { movies: movies.results }
	};
};
