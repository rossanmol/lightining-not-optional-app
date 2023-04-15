import { MetadataRoute } from "next";
import { getFacts } from "./facts/facts.util";


export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
	const facts = await getFacts();
	return [
		{
			url: '/',
			lastModified: new Date()
		},
		{
			url: '/facts',
			lastModified: new Date()
		},
		...facts.map(fact => ({
			url: `/facts/${fact._id}`,
			lastmod: fact.createdAt
		}))
	]
}