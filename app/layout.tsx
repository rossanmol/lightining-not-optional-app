import "./globals.css";
import { Roboto } from "next/font/google";
import Search from "@/components/search/search";
import Link from "next/link";

export const metadata = {
	themeColor: "#3730a3",
	openGraph: {
		title: "Meow! Cat facts for everyone!",
		description: "Making the world a better place with daily cat facts! Meow! 😻",
		url: process.env.HOSTNAME,
		siteName: "Meow!",
		images: [
			{
				url: "/og.png",
				width: 800,
				height: 600,
			},
			{
				url: "/og-alt.png",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "en-US",
		type: "website",
	},
};

const font = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<header className="h-[61px] relative flex items-center justify-between gap-2 border-b-2 border-indigo-700 bg-indigo-800 p-3">
					<Link className="text-xl font-black text-pink-50" href="/">
						Meow!
					</Link>
					<Search className="flex w-full max-w-xl" />
					<div></div>
				</header>
				<main className="col-span-3 min-h-screen bg-purple-50 dark:border-l-pink-700 xl:col-span-4">
					{children}
				</main>
			</body>
		</html>
	);
}
