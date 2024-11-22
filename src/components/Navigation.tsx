"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-[#3F72AF] text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Goldfish Association
				</Link>
				{/* Hamburger menu button */}
				<button
					className="lg:hidden text-white"
					onClick={() => {
						setIsOpen(!isOpen);
						console.log("working");
					}}
				>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>

				{/* Navigation Links */}
				<div
					className={`${
						isOpen ? "block" : "hidden"
					} lg:flex space-y-4 lg:space-y-0 lg:space-x-6 lg:items-center lg:flex-row flex flex-col`}
				>
					<Link href="/teachings" className="hover:text-orange-200">
						Teachings
					</Link>
					<Link href="/practices" className="hover:text-orange-200">
						Practices
					</Link>
					<Link href="/events" className="hover:text-orange-200">
						Events
					</Link>
					<Link href="/contact" className="hover:text-orange-200">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
