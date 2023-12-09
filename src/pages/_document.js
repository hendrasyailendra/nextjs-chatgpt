import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<div className='max-w-5xl mx-auto h-full pt-10'>
					<Main />
					<NextScript />
				</div>
			</body>
		</Html>
	);
}
