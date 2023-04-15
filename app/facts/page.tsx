import Link from "next/link";
import { getFacts } from "./facts.util";

export default async function RandomFactPage() {
	const fact = await getFacts();

	return (
	  <>
			<div className="container mx-auto flex gap-2 mt-20 flex-col">
				{fact.map((fact) =>
					<Link key={fact._id} className="rounded bg-indigo-200 p-5 text-indigo-900 text-center w-100 text-ellipsis whitespace-nowrap overflow-hidden" href={`/facts/${fact._id}`}>
						{fact.text}
					</Link>)
				}
			</div>
	  </>
	)
  }