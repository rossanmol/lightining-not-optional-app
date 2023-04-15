"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useComponentVisible from "@/utils/use-outside";
import { FaSearch, FaTimes } from "react-icons/fa";

import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Search({ className }: { className: string }) {
	const router = useRouter();
	const [term, setTerm] = useState<string>("");
	const [isSearchVisible, setIsSearchVisible] = useState(false);
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible<HTMLDivElement>(false);

	useEffect(() => setIsComponentVisible(!!term.length), [term, setIsComponentVisible]);

	const submitSearch = () => {
		setIsComponentVisible(false);
		setIsSearchVisible(false);
		return router.push(`/fact/${term}`);
	};

	return (
		<>
			<form
				className={`block  ${isSearchVisible ? "@container-normal" : "@container"} ${className} @xl:relative`}
				onSubmit={(e) => {
					e.preventDefault();
					submitSearch();
				}}
			>
				<Command
					ref={ref}
					shouldFilter={false}
					className={`absolute top-[-22px] ${
						isSearchVisible ? "absolute left-0 top-0 w-full" : "hidden"
					} z-10 h-auto w-full overflow-visible rounded-none border border-indigo-100 shadow-md @xl:block @xl:rounded-lg dark:border-indigo-800`}
				>
					<CommandInput
						data-testid="search-input"
						className="h-[61px] w-5/6 @xl:h-auto @xl:w-full"
						onKeyDown={(event) => {
							if (event.key === "Enter") {
								submitSearch();
							}
						}}
						onFocus={() => setIsComponentVisible(!!term.length)}
						placeholder="This search is here, just to make the site look cool and real 😭"
						onValueChange={(value) => {
							const sanitizedValue = value.trim();

							setTerm(sanitizedValue);
						}}
					/>

					{isComponentVisible && (
						<CommandList data-testid="search-results">
							<CommandGroup>
								<CommandItem disabled>
									<span>No results found :(</span>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					)}
				</Command>

				{isSearchVisible ? (
					<Button
						data-testid="mobile-close-button"
						className="absolute inset-y-0 right-0 z-10 h-full"
						type="button"
						variant="ghost"
						onClick={() => setIsSearchVisible(false)}
					>
						<FaTimes />
					</Button>
				) : (
					<div className="flex w-full justify-end @xl:hidden" data-testid="mobile-button-container">
						<Button
							aria-label="Search for a cat fact"
							data-testid="mobile-button"
							type="button"
							className="bg-indigo-700 text-white"
							onClick={() => setIsSearchVisible(true)}
						>
							<FaSearch />
						</Button>
					</div>
				)}
			</form>
		</>
	);
}
