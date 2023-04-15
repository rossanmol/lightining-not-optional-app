export default function FactsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>
		<div className="bg-indigo-300 px-4 py-[1vh]">
			<h1 className="text-center text-lg text-indigo-800">
				Random Facts
			</h1>
		</div>
		{children}
	</>
}