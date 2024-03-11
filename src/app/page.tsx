"use client"

import Options from '@/components/options-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Volume2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex flex-1'>
			<Options />

			<section className='mx-60 flex-1 p-6 px-10 pt-8'>
				<div className='flex flex-col items-center'>
					<h2 className='mb-4 text-5xl font-semibold text-gray-900 dark:text-white'>
						Enter your word
					</h2>

					<div className='mt-4 flex w-full gap-4'>
						<Input
							className='mb-6 flex-1 focus-visible:ring-gray-200'
							placeholder='Type a word...'
						/>
						<Button className='' variant='outline'>
							Submit
						</Button>
						<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200'>
							<Volume2 className='text-gray-500 dark:text-gray-300' />
						</span>
					</div>

					<div className='mb-4 flex w-full items-center justify-between py-4 text-lg text-gray-800 dark:text-white'>
						<p className='max-w-md text-xl'>
							<span className='font-[500]'>Meaning:</span> The
							meaning goes here
						</p>

						<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200'>
							<Volume2 className='text-gray-500 dark:text-gray-300' />
						</span>
					</div>

					<div
						draggable={false}
						className='mb-4 grid select-none grid-cols-3 gap-4'
					>
						<Image
							src='/placeholder.svg'
							height='250'
							width='250'
							draggable={false}
							alt='Meaning related image'
							className='aspect-square'
						/>
						<Image
							src='/placeholder.svg'
							width='250'
							height='250'
							draggable={false}
							alt='Meaning related image'
							className='aspect-square'
						/>
						<Image
							src='/placeholder.svg'
							height='250'
							width='250'
							draggable={false}
							alt='Meaning related image'
							className='aspect-square'
						/>
					</div>

					<div className='mb-4 flex w-full items-center justify-between py-4 text-lg text-gray-800 dark:text-white'>
						<p className='max-w-md text-xl'>
							<span className='font-[500]'>Sentence: </span>A
							sentence goes here
						</p>

						<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200'>
							<Volume2 className='text-gray-500 dark:text-gray-300' />
						</span>
					</div>
				</div>
			</section>
		</div>
	)
}
