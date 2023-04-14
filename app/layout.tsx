export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	icons: "/favicon.png",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
