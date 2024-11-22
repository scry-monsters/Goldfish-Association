import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Goldfish Association",
	description: "Path to Aquatic Enlightenment",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg=[#DCD7C9]`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
