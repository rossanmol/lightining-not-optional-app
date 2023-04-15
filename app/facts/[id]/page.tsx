import { Metadata } from "next";
import { getCatSound, getFact } from "../facts.util"

type Props = {
	params: { id: string };
  };


export const revalidate = 10;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const fact = await getFact(params.id);
	return {
		title: `Fact: ${fact._id}`,
		description: fact.text
	};
}

export default async function FactPage({ params }: Props) {
	const [fact, catSound] = await Promise.all([
		getFact(params.id),
		getCatSound()
	])

	return (
	  <>
		  <div className="bg-indigo-300 px-4 py-[1vh]">
			  <h1 className="text-center text-lg text-indigo-800">
				 	Selected Fact: ${fact._id}
			  </h1>
		  </div>

			<div className="container mx-auto flex gap-2 mt-20 flex-col">
				<article key={fact._id} className="rounded bg-indigo-200 p-5 text-indigo-900 text-center w-100">
					{fact.text} by {fact.user.name.first} {fact.user.name.last}
				</article>
			</div>

			<div className="bg-indigo-600 text-indigo-200 mt-10 mb-10 container mx-auto text-center">
				<div>The secret cat sound is: {catSound}</div>
			</div>
	  </>
	)
  }