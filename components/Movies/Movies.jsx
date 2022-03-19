import Loader from "../Loader";
import Movie from "./Movie";

const Movies = ({ results }) => {
	const { isLoading, isFetching, isError, error, data } = results;

	if (isLoading || isFetching) {
		return (
			<div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
				{[...Array(8)].map((el, i) => (
					<Loader key={i} />
				))}
			</div>
		);
	}

	if (isError) return error.message;

	if (!data.results?.length) return "No movies found";

	return (
		<div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
			{data.results?.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default Movies;
