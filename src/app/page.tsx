import Link from 'next/link'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings, Volume2 } from 'lucide-react'

export default function Home() {
	return (
		<main className='flex flex-1'>
			<aside className='w-64 border-r border-gray-200 p-4 dark:border-gray-700'>
				<div className='flex items-center justify-between'>
					<h2 className='text-lg font-medium text-gray-900 dark:text-white'>
						Options
					</h2>
					<Settings className='text-gray-500 dark:text-gray-300' />
				</div>
				<div className='mt-4'>
					<label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Speed
					</label>
					<input
						className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
						type='range'
					/>
				</div>
				<div className='mt-4'>
					<Switch id='dark-mode' />
					<Label htmlFor='dark-mode'>dark mode</Label>
				</div>
				<div className='mt-4'>
					<label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Font size
					</label>
					<input
						className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
						type='range'
					/>
				</div>
				<Button className='mt-4 w-full' variant='outline'>
					Clear Cache
				</Button>
			</aside>
			<section className='flex-1 p-6'>
				<div className='flex flex-col items-center'>
					<h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-white'>
						Enter your word
					</h2>
					<Input className='mb-6' placeholder='Type a word...' />
					<div className='mb-6 flex items-center space-x-2'>
						<Volume2 className='text-gray-500 dark:text-gray-300' />
						<Volume2 className='text-gray-500 dark:text-gray-300' />
					</div>
					<p className='mb-4 text-lg text-gray-900 dark:text-white'>
						Meaning: The meaning goes here
					</p>
					<div className='mb-4 grid grid-cols-3 gap-4'>
						<img
							alt='Meaning related image'
							className='aspect-square'
							height='100'
							src='/placeholder.svg'
							width='100'
						/>
						<img
							alt='Meaning related image'
							className='aspect-square'
							height='100'
							src='/placeholder.svg'
							width='100'
						/>
						<img
							alt='Meaning related image'
							className='aspect-square'
							height='100'
							src='/placeholder.svg'
							width='100'
						/>
					</div>
					<div className='mb-6 flex items-center space-x-2'>
						<Volume2 className='text-gray-500 dark:text-gray-300' />
					</div>
					<p className='text-lg text-gray-900 dark:text-white'>
						Sentence: A sentence using the word...
					</p>
				</div>
			</section>
		</main>
	)
}
