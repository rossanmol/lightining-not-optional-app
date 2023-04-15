import { MetadataRoute } from "next";

export default async function Manifest(): Promise<MetadataRoute.Manifest> {
	return {
		name: "Cat Facts",
		short_name: "Cat Facts",
		description: "A simple app that shows you cat facts",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "64x64 32x32 24x24 16x16",
				type: "image/x-icon",
			},
		],
	}
}