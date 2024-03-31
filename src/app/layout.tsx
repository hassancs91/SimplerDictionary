import type { Metadata, Viewport } from 'next'
import { Inter, ABeeZee } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })
const aBeeZee = ABeeZee({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
	title: 'AI Powered Dictionary',
	description: 'An Open-Source Dictionary Powered With AI and SimplerLLM for Everyone!',
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
					<Toaster
						toastOptions={{
							unstyled: true,
							classNames: {
								error: 'p-4 rounded-lg border border-red-700 gap-2 flex items-center text-sm text-red-700 bg-red-200',
								success:
									'p-4 rounded-lg border border-green-700 gap-2 flex items-center text-sm text-green-700 bg-green-200',
								warning:
									'p-4 rounded-lg border border-yellow-700 gap-2 flex items-center text-sm text-yellow-700 bg-yellow-200',
								info: 'p-4 rounded-lg border border-blue-700 gap-2 flex items-center text-sm bg-blue-200 text-blue-700'
							}
						}}
					/>
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
