import Link from "next/link";
import { getFacts } from "./facts.util";

export const metadata = {
	title: "List of facts about cats",
	description: "A list of facts about cats, quite random ones.",
};

export default async function RandomFactPage() {
	const fact = await getFacts();

	return (
		<>
			<div className="container mx-auto flex gap-2 mt-20 flex-col">
				{fact.map((fact) => (
					<Link
						aria-label="Open a cat fact"
						key={fact._id}
						className="rounded bg-indigo-200 p-5 text-indigo-900 text-center w-100 text-ellipsis whitespace-nowrap overflow-hidden"
						href={`/facts/${fact._id}`}
					>
						{fact.text}
					</Link>
				))}
			</div>
		</>
	);
}
