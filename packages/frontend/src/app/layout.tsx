"use client";

import { Inter } from "next/font/google";
import "./globals.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";

//core
import "primereact/resources/primereact.min.css";

// icons
import "primeicons/primeicons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "SparkChat",
	description: "A chat application with a lot of enhanced features",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
