import type { Metadata, Viewport } from 'next'
import { Inter, ABeeZee } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const aBeeZee = ABeeZee({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
	title: 'SimplerDictionary',
	description: 'The modern dictionary',
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	category: 'Dictionary'
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={aBeeZee.className}>
				<ThemeProvider
					attribute='class'
					enableSystem={false}
					defaultTheme='light'
					disableTransitionOnChange
				>
					<main className='max-w-screen flex h-screen flex-1 flex-col antialiased'>
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
