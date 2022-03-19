import Link from "next/link";
import {
	HomeIcon,
	CollectionIcon,
	UserIcon,
	SearchIcon
} from "@heroicons/react/outline";

const HeaderTop = () => {
	return (
		<div className="bg-gray-900">
			<div className="container">
				<div className="flex flex-col sm:flex-row justify-between items-center py-2">
					<Link href="/" passHref>
						<a className="text-3xl">Hulu</a>
					</Link>
					<ul className="my-2 text-center flex justify-between items-center gap-6">
						<li className="group">
							<Link href="#" passHref>
								<a>
									<HomeIcon className="w-5 mx-auto mb-2 sm:relative top-3 group-hover:top-0 sm:group-hover:animate-bounce" />
									<span className="opacity-100 sm:opacity-0 relative  group-hover:text-red-400 group-hover:opacity-100">
										Home
									</span>
								</a>
							</Link>
						</li>
						<li className="group">
							<Link href="#" passHref>
								<a>
									<CollectionIcon className="w-5 mx-auto mb-2 sm:relative top-3 group-hover:top-0 sm:group-hover:animate-bounce" />
									<span className="opacity-100 sm:opacity-0 relative group-hover:text-red-400 group-hover:opacity-100">
										Collection
									</span>
								</a>
							</Link>
						</li>
						<li className="group">
							<Link href="#" passHref>
								<a>
									<UserIcon className="w-5 mx-auto mb-2 sm:relative top-3 group-hover:top-0 sm:group-hover:animate-bounce" />
									<span className="opacity-100 sm:opacity-0 relative group-hover:text-red-400 group-hover:opacity-100">
										Profile
									</span>
								</a>
							</Link>
						</li>
						<li className="group">
							<Link href="#" passHref>
								<a>
									<SearchIcon className="w-5 mx-auto mb-2 sm:relative top-3 group-hover:top-0 sm:group-hover:animate-bounce" />
									<span className="opacity-100 sm:opacity-0 relative group-hover:text-red-400 group-hover:opacity-100">
										Search
									</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
