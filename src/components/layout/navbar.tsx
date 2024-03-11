'use client'

import { cn } from '@/lib/utils'
import { Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function Navbar() {
	return (
		<>
			<MobileNavbar />
			<header className='hidden items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:flex'>
				<h1 className='text-xl font-semibold text-gray-900 dark:text-slate-200'>
					SimplerDictionary
				</h1>
				<nav>
					<ul className='flex space-x-2 text-sm'>
						<li>
							<Link
								className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
								href='#'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className='rounded p-2 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
								href='#'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Navbar

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(true)
	const { setTheme } = useTheme()
	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:hidden'>
			<h1 className='text-xl font-semibold text-gray-900 dark:text-slate-200'>
				SimplerDictionary
			</h1>

			<span
				className={cn(
					'cursor-pointer text-gray-500 hover:opacity-80 select-none dark:text-slate-500'
				)}
			>
				<Settings onClick={() => setIsOpen((prev) => !prev)} />
			</span>

			<nav
				className={cn(
					'hidden transition-width flex-col w-0 border rounded border-gray-200 duration-300 bg-white dark:bg-background dark:border-slate-800',
					{
						'absolute flex top-[60px] h-[80%] left-0 w-64 border-r p-4':
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
			</nav>
		</header>
	)
}
