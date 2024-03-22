import { cn } from '@/lib/utils'
import { Database, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { CachedWordMeaningsType } from '@/app/page'
import { toast } from 'sonner'

type MobileNavProps = {
	setFontSize: (size: number) => void
	setPlaybackSpeed: (speed: number) => void
	playbackSpeed: number
	fontSize: number
	cachedWords: CachedWordMeaningsType
	resetCachedWords: () => void
	setClickedWord: (word: string) => void
}

const MobileNavbar = ({
	setFontSize,
	setPlaybackSpeed,
	playbackSpeed,
	fontSize,
	resetCachedWords,
	cachedWords,
	setClickedWord
}: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const { setTheme } = useTheme()

	const clearCache = () => {
		localStorage.removeItem('cachedWords')
		resetCachedWords()
		toast.success('Cache cleared!')
	}
	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:hidden'>
			<h1 className='text-xl font-semibold text-gray-900 dark:text-slate-200'>
				SimplerDictionary
			</h1>

			<span
				className={cn(
					'cursor-pointer select-none text-gray-500 hover:opacity-80 dark:text-slate-500'
				)}
			>
				<Settings onClick={() => setIsOpen((prev) => !prev)} />
			</span>

			<nav
				className={cn(
					'transition-width hidden w-0 flex-col rounded border border-gray-200 bg-white duration-300 dark:border-slate-800 dark:bg-background',
					{
						'absolute left-0 top-[60px] flex h-[80%] w-64 border-r p-4':
							isOpen
					}
				)}
			>
				<ul className='flex flex-col space-y-4 font-[500] text-gray-700'>
					<li>
						<Link className='rounded dark:text-slate-200' href='#'>
							About
						</Link>
					</li>
					<li>
						<Link className='rounded dark:text-slate-200' href='#'>
							Contact
						</Link>
					</li>
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

					{Object.keys(cachedWords).length > 0 ? (
						<div className='my-6 flex-1 overflow-y-auto rounded-lg bg-gray-100 dark:bg-gray-800 p-4'>
							{Object.keys(cachedWords).map((word: string) => {
								return (
									<p
										onClick={() => setClickedWord(word)}
										key={word}
										className='cursor-pointer p-1 text-sm font-medium capitalize text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-background dark:active:bg-gray-900 rounded'
									>
										{word}
									</p>
								)
							})}
						</div>
					) : (
						<div className='my-6 flex flex-1 flex-col items-center justify-center overflow-y-auto rounded-lg bg-gray-100 p-4 text-gray-500 dark:text-slate-500 dark:bg-gray-900'>
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
