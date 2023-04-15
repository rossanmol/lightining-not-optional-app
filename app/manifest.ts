import { MetadataRoute } from "next";

export default async function Manifest(): Promise<MetadataRoute.Manifest> {
	return {
		name: "Meow!",
		short_name: "Meow!",
		description: "A simple app that shows you cat facts",
		theme_color: "#3730a3",
		background_color: "#3730a3",
		icons: [
			{ src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
	};
}
