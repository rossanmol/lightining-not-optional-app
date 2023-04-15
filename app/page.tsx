import Link from "next/link";

export const metadata = {
	title: "Meow!",
	description: "Making the world a better place with daily cat facts! Meow! 😻",
};

export default function Home() {
	return (
		<>
			<div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-800 via-purple-600 to-indigo-800 px-4 py-[12vh]">
				<h1 className="mx-auto max-w-[800px] text-[5vw] font-black text-white md:text-5xl text-center">
					Making the world a better place with daily cat facts!{" "}
					<span className="text-yellow-200">Meow! 😻</span>
				</h1>
			</div>

			<Link className="mt-20 flex justify-center" href="/facts">
				<button className="bg-indigo-600 text-white p-6 rounded md:text-2xl text-[4vw]">EXPLORE</button>
			</Link>
		</>
	);
}
