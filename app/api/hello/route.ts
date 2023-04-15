export async function GET() {
	await new Promise(resolve => setTimeout(resolve, 5000));

	const secretCatWords = [
		"miaow", "mrruh", "prrrup", "mrow", "yowl",  "mrrrrrr"
	]
  	return new Response(secretCatWords[Math.floor(Math.random() * secretCatWords.length)])
}
