import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { Settings } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

type OptionsProps = {
	setFontSize: (size: number) => void
}

export default function Options({ setFontSize }: OptionsProps) {
	const [isOpen, setIsOpen] = useState(true)
	const { setTheme } = useTheme()

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
						className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-slate-700'
						type='range'
					/>
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
						type='range'
					/>
				</div>

				<div className='mt-auto'>
					<Button className='w-full' variant='outline'>
						Clear Cache
					</Button>
				</div>
			</div>
		</aside>
	)
}
