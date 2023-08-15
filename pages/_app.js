
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom-bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import Head from "next/head";
import { Roboto, Montserrat, Open_Sans, Source_Sans_Pro } from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
});

const openSans = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

const sourceSansPro = Source_Sans_Pro({
	weight: "400",
	subsets: ["latin"],
});

function App({ Component, pageProps }) {
	return (
		<>
			<SSRProvider>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</SSRProvider>
		</>
	);
}

// Wrap your App with appWithTranslation
export default appWithTranslation(App, nextI18NextConfig);





//import { appWithTranslation } from 'next-i18next'
/*
import "../styles/globals.css" ;
import "bootstrap/dist/css/bootstrap.css"; 
import "../styles/custom-bootstrap.css";
import { SSRProvider } from "react-bootstrap";
import Head from "next/head";
import { Roboto, Montserrat, Open_Sans, Source_Sans_Pro } from "next/font/google";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect } from 'react';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
});

const openSans = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

const sourceSansPro = Source_Sans_Pro({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	
	

	return (
		<>
		<SSRProvider>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
			</SSRProvider>
		</>
	);
}
*/