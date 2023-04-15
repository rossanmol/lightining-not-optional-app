
import z from "zod";

export const Fact = z.object({
	_id: z.string(),
	text: z.string(),
	type: z.string(),
	user: z.object({
		_id: z.string(),
		name: z.object({ first: z.string(), last: z.string() }),
		photo: z.string()
	}),
	createdAt: z.string(),
});

export const Facts = z.array(z.object({
	_id: z.string(),
	text: z.string(),
	type: z.string(),
	user: z.string(),
	createdAt: z.string(),
}));

export async function getFacts() {
	const response = await fetch('https://cat-fact.herokuapp.com/facts?amount=10', {
		headers: {
			Authorization: "Bearer 5f1b0b9b-7b1f-4c5f-8c1a-1b1b1b1b1b1b" // uh wow, this is a real token
		},
		next: {
			revalidate: 10
		}
	})
	const unsafeData = await response.json();
	return Facts.parse(unsafeData);
}

export async function getFact(id: string) {
	const response = await fetch(`https://cat-fact.herokuapp.com/facts/${id}`, {
		headers: {
			Authorization: "Bearer 5f1b0b9b-7b1f-4c5f-8c1a-1b1b1b1b1b1b" // uh wow, this is a real token
		},
		next: {
			revalidate: 86400
		}
	})
	const unsafeData = await response.json();

	return Fact.parse(unsafeData);
}


export async function getCatSound() {
	const response = await fetch(`${process.env.HOSTNAME}/api/hello`, {
		next: {
			revalidate: 10
		}
	})
	const unsafeData = await response.text();
	return unsafeData;
}