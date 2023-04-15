export default function Loading() {
	return <>
			<div className="container mx-auto flex gap-2 mt-20 flex-col">
			<article className="rounded bg-indigo-200 p-5 text-indigo-900 text-center w-100">
				<div role="status" className="space-y-2.5 animate-pulse">
					<div className="flex items-center w-full space-x-2 h-6">
					</div>
				</div>
			</article>
		</div>

		<div className="bg-indigo-600 text-indigo-200 mt-10 mb-10 container mx-auto text-center">
			<div>The secret cat sound is: ...</div>
		</div>
	</>
  }