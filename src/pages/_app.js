import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next.js TODO APP</title>
				<meta name="description" content="Criado com create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-center text-lg font-bold my-5">TODO LIST</h1>
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
