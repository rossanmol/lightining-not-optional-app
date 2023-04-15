export default function Loading() {
	const facts = new Array(5).fill(undefined)
	return <div className="container mx-auto flex gap-2 mt-20 flex-col">
			{facts.map((_fact, i) =>
				<article key={i} className="rounded bg-indigo-200 p-5 text-indigo-900 text-center w-100">

					<div role="status" className="space-y-2.5 animate-pulse">
						<div className="h-6">
						</div>
					</div>

				</article>)
			}
		</div>
  }