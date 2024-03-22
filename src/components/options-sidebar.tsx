import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { Database, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { CachedWordMeaningsType } from '@/app/page'
import { toast } from 'sonner'

type OptionsProps = {
	setFontSize: (size: number) => void
	setPlaybackSpeed: (speed: number) => void
	playbackSpeed: number
	fontSize: number
	cachedWords: CachedWordMeaningsType
	resetCachedWords: () => void
	setClickedWord: (word: string) => void
}

export default function Options({
	setFontSize,
	setPlaybackSpeed,
	playbackSpeed,
	fontSize,
	cachedWords,
	resetCachedWords,
	setClickedWord
}: OptionsProps) {
	const [isOpen, setIsOpen] = useState(true)
	const { setTheme } = useTheme()

	const clearCache = () => {
		localStorage.removeItem('cachedWords')
		resetCachedWords()
		toast.success('Cache cleared!')
	}

	return (
		<aside
			className={cn(
				'transition-width hidden flex-col border-gray-200 bg-white duration-300 dark:border-slate-800 dark:bg-background md:flex md:h-full lg:py-8',
				{
					'absolute bottom-[46px] top-[60px] w-64 border-r p-4  md:static':
						isOpen
				},
				{ 'relative py-4 md:w-0': !isOpen }
			)}
		>
			<div className='flex items-center justify-between'>
				<h2
					className={cn(
						'text-lg font-medium text-gray-900 dark:text-white',
						{ hidden: !isOpen }
					)}
				>
					Options
				</h2>
				<span
					className={cn(
						'cursor-pointer text-gray-500 hover:opacity-80 dark:text-slate-500',
						{ 'rotate-180 transform p-2': isOpen },
						{
							'absolute left-6 top-6 rounded-full bg-gray-100 p-2 dark:bg-slate-800 dark:text-slate-500':
								!isOpen
						}
					)}
				>
					<Settings onClick={() => setIsOpen((prev) => !prev)} />
				</span>
			</div>

			<div className={cn('flex h-full flex-col', { hidden: !isOpen })}>
				<div className='mt-4'>
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
						onChange={(e) => setFontSize(parseInt(e.target.value))}
						className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-slate-700'
                        value={fontSize}
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
		</aside>
	)
}
