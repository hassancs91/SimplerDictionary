import { cn } from '@/lib/utils'
import { Database, ExternalLink, Settings, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { CachedWordMeaningsType } from '@/app/page'
import { toast } from 'sonner'
import { SelectVoice } from '../choose-voice'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

type MobileNavProps = {
	setFontSize: (size: number) => void
	setPlaybackSpeed: (speed: number) => void
	playbackSpeed: number
	fontSize: number
	cachedWords: CachedWordMeaningsType
	resetCachedWords: () => void
	setClickedWord: (word: string) => void
	setSelectedVoice: React.Dispatch<
		React.SetStateAction<SpeechSynthesisVoice | undefined>
	>
	availableVoices: SpeechSynthesisVoice[]
	selectedVoice: SpeechSynthesisVoice
}

const MobileNavbar = ({
	setFontSize,
	setPlaybackSpeed,
	playbackSpeed,
	fontSize,
	resetCachedWords,
	cachedWords,
	setClickedWord,
	setSelectedVoice,
	availableVoices,
	selectedVoice
}: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const { setTheme } = useTheme()
	const modalRef = useRef<HTMLElement | null>(null)

	const clearCache = () => {
		localStorage.removeItem('cachedWords')
		resetCachedWords()
		toast.success('Cache cleared!')
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			isOpen &&
			modalRef.current &&
			!modalRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [isOpen])

	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:hidden'>
			<Link href={'/'} className='flex items-center gap-2'>
				<Image
					src='/logo.png'
					width={500}
					height={500}
					alt='logo image'
					className='w-[25px]'
				/>
				<h1 className='text-lg font-semibold tracking-tighter text-gray-900 hover:opacity-90 dark:text-slate-200'>
					SimplerDictionary
				</h1>
			</Link>
			<span
				className={cn(
					'cursor-pointer select-none text-gray-500 hover:opacity-80 dark:text-slate-500'
				)}
			>
				<Settings onClick={() => setIsOpen((prev) => !prev)} />
			</span>
			{isOpen && (
				<div className='fixed bottom-0 left-0 right-0 top-0 z-10 overflow-hidden bg-black/40'></div>
			)}
			<nav
				ref={modalRef}
				className={cn(
					'transition-width z-20 hidden h-full w-0 flex-col overflow-y-auto rounded border border-gray-200 bg-background duration-300 dark:border-slate-800',
					{
						'fixed bottom-0 left-0 top-0 flex w-64 border-r p-4':
							isOpen
					}
				)}
			>
				<div className='flex items-center justify-between gap-2'>
					<h1 className='text-lg font-semibold tracking-tighter text-gray-900 hover:opacity-90 dark:text-slate-200'>
						SimplerDictionary
					</h1>{' '}
					<X
						onClick={() => setIsOpen(false)}
						className='rounded-md border text-gray-700 dark:text-slate-400'
					/>
				</div>

				<ul className='mt-4 flex flex-col space-y-4 font-[500] text-gray-700'>
					<li>
						<Link
							className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
							href='/about'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
							href='/contact'
						>
							Contact
						</Link>
					</li>
					<li>
						<a
							target='_blank'
							className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
							href='https://www.patreon.com/heducate'
						>
							Donate
						</a>
					</li>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<li>
								<a className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'>
									More
								</a>
							</li>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='mr-8 flex w-40 flex-col gap-2 p-3'>
							<a
								href='https://simplerml.com/'
								target='_blank'
								className='flex cursor-pointer items-center justify-between gap-1 text-sm hover:underline'
							>
								<span>SimplerMl</span>
								<ExternalLink size={16} />
							</a>
							<a
								href='https://github.com/hassancs91/SimplerLLM'
								target='_blank'
								className='flex cursor-pointer items-center justify-between gap-1 text-sm hover:underline'
							>
								<span>SimplerLLM</span>
								<ExternalLink size={16} />
							</a>
							<a
								href='https://learnwithhasan.com/'
								target='_blank'
								className='flex cursor-pointer items-center justify-between gap-1 text-sm hover:underline'
							>
								<span>Author's Site</span>
								<ExternalLink size={16} />
							</a>
						</DropdownMenuContent>
					</DropdownMenu>
				</ul>

				<hr className='my-4' />

				<div
					className={cn('flex h-full flex-col', { hidden: !isOpen })}
				>
					<div className=''>
						<label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
							Speed
						</label>
						<input
							min={0.5}
							max={2.0}
							step={0.1}
							onChange={(e) =>
								setPlaybackSpeed(parseFloat(e.target.value))
							}
							className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-slate-700'
							type='range'
						/>
						<span className='rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700 dark:bg-slate-800 dark:text-slate-500'>
							{playbackSpeed}x
						</span>
					</div>

					<div className='mt-4 flex items-center gap-2'>
						<Switch
							id='dark-mode'
							onCheckedChange={(isDark) => {
								isDark ? setTheme('dark') : setTheme('light')
							}}
						/>
						<Label htmlFor='dark-mode'>Dark mode</Label>
					</div>

					<div className='mt-4'>
						<label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
							Font size
						</label>
						<input
							min={12}
							max={26}
							onChange={(e) =>
								setFontSize(parseInt(e.target.value))
							}
							value={fontSize}
							className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-slate-700'
							type='range'
						/>
						<span className='rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700 dark:bg-slate-800 dark:text-slate-500'>
							{fontSize}
						</span>
					</div>

					{availableVoices.length > 0 && (
						<div
							className={cn('mt-4 flex w-full items-end md:mt-0')}
						>
							<SelectVoice
								availabeVoices={availableVoices}
								selectedVoice={selectedVoice!}
								setSelectedVoice={setSelectedVoice}
							/>
						</div>
					)}

					{Object.keys(cachedWords).length > 0 ? (
						<div className='my-6 h-[130px] overflow-y-scroll rounded-lg bg-gray-100 p-4 dark:bg-gray-800'>
							{Object.keys(cachedWords).map((word: string) => {
								return (
									<p
										onClick={() => setClickedWord(word)}
										key={word}
										className='cursor-pointer rounded p-1 text-sm font-medium capitalize text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-background dark:active:bg-gray-900'
									>
										{word}
									</p>
								)
							})}
						</div>
					) : (
						<div className='my-6 flex flex-1 flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-500 dark:bg-gray-900 dark:text-slate-500'>
							<Database size={20} className='' />
							<p>No cached words</p>
						</div>
					)}

					<div className='mt-auto'>
						<Button
							onClick={clearCache}
							className='w-full'
							variant='outline'
						>
							Clear Cache
						</Button>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default MobileNavbar

export function SimpleMobileNav() {
	const [isOpen, setIsOpen] = useState(false)
	const navRef = useRef<HTMLDivElement | null>(null)

	function handleOutsideClick(e: MouseEvent) {
		if (
			isOpen &&
			navRef.current &&
			!navRef.current.contains(e.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick, true)

		return () => {
			document.removeEventListener('click', handleOutsideClick, true)
		}
	}, [isOpen])
	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:hidden'>
			<Link href={'/'} className='flex items-center gap-2'>
				<Image
					src='/logo.png'
					width={500}
					height={500}
					alt='logo image'
					className='w-[25px]'
				/>
				<h1 className='text-lg font-semibold tracking-tighter text-gray-900 hover:opacity-90 dark:text-slate-200'>
					SimplerDictionary
				</h1>
			</Link>

			<nav className='flex items-center font-[500] text-gray-700'>
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className='rounded-full bg-gray-100 p-1 dark:bg-slate-900 dark:text-slate-500'
				>
					<Settings />
				</button>
				{isOpen && (
					<div className='fixed bottom-0 left-0 right-0 top-0 z-10 overflow-hidden bg-black/40'></div>
				)}

				<div
					ref={navRef}
					className={cn(
						'fixed left-0 top-0 z-20 hidden h-full w-64  flex-col rounded-none rounded-r-lg border bg-background px-4 pb-12 pt-2 text-gray-700 shadow-none dark:text-slate-200',
						{ flex: isOpen }
					)}
				>
					<div className='flex items-center justify-between gap-2'>
						<h1 className='text-lg font-semibold tracking-tighter text-gray-900 hover:opacity-90 dark:text-slate-200'>
							SimplerDictionary
						</h1>{' '}
						<X
							onClick={() => setIsOpen(false)}
							className='rounded-md border text-gray-700 dark:text-slate-400'
						/>
					</div>
					<Link
						className='mt-4 rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
						href='/'
					>
						Home
					</Link>

					<Link
						className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
						href='/about'
					>
						About
					</Link>
					<Link
						className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
						href='/contact'
					>
						Contact
					</Link>
					<a
						target='_blank'
						className='flex items-center justify-between rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
						href='https://www.patreon.com/heducate'
					>
						Donate
					</a>
					<a
						href='https://simplerml.com/'
						target='_blank'
						className='flex items-center justify-between rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
					>
						<span>SimplerMl</span>
						<ExternalLink size={16} />
					</a>
					<a
						href='https://github.com/hassancs91/SimplerLLM'
						target='_blank'
						className='flex items-center justify-between rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
					>
						<span>SimplerLLM</span>
						<ExternalLink size={16} />
					</a>
					<a
						href='https://learnwithhasan.com/'
						target='_blank'
						className='flex items-center justify-between rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
					>
						<span>Author's Site</span>
						<ExternalLink size={16} />
					</a>
				</div>
			</nav>
		</header>
	)
}
