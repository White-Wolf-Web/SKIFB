import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="fr">
				<Head>
					<meta name="robots" content="noindex" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="author" content=" Benoit Decré & Stephane Gamot" />

					<link rel="icon" type="image/png" sizes="48x48" href="/assets/images/favicons/48x48.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicons/96x96.png" />
					<link rel="icon" type="image/png" sizes="144x144" href="/assets/images/favicons/144x144.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicons/192x192.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/assets/images/favicons/152x152.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/assets/images/favicons/167x167.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/assets/images/favicons/180x180.png" />

					<meta name="theme-color" content="#840104" />
					<meta property="og:title" content="SKIFB - Shotokan Karate International Federation - Belgique" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.karate-skifb.be" />
					<meta property="og:image" content="../public/images/Webp/skib-but-2022.webp" />
					<meta property="og:description" content="Notre fédération entretient des liens étroits avec les instructeurs de karaté japonais qui régulièrement viennent donner des cours de haut niveau en Belgique" />
					<meta property="fb:app_id" content="124325430968790" />

					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@XXXX" />
					<meta name="twitter:title" content="SKIFB - Shotokan Karate International Federation - Belgique" />
					<meta name="twitter:description" content="XXXX" />
					<meta name="twitter:creator" content="@XXXX" />
					<meta name="twitter:image" content="https://www.XXXX-twitter.jpg" />

					<link rel="manifest" href="/manifest.json" />
					<meta name="google-site-verification" content="" />

					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
