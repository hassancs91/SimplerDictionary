import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { Settings } from 'lucide-react'

export default function Options() {
	return (
		<aside className='h-full flex flex-col w-64 border-r border-gray-200 p-4 dark:border-gray-700 lg:py-8'>
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

			<div className='mt-auto'>
				<Button className='w-full' variant='outline'>
					Clear Cache
				</Button>
			</div>
		</aside>
	)
}
