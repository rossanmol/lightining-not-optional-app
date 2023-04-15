import { MetadataRoute } from "next";

export default async function Robots(): Promise<MetadataRoute.Robots> {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${process.env.HOSTNAME}/sitemap.xml`,
	}
}