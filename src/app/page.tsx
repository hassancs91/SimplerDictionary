'use client'

import Options from '@/components/options-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Volume2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [fontSize, setFontSize] = useState(16)
	return (
		<div className='flex flex-1'>
			<Options setFontSize={(size) => setFontSize(size)} />

			<section className='flex-1 p-6 pt-8 md:px-10 lg:mx-60'>
				<div className='flex flex-col items-center'>
					<h2 className='mb-4 text-center text-4xl font-semibold text-gray-900 dark:text-slate-200 md:text-5xl'>
						Enter your word
					</h2>

					<div className='mt-4 flex w-full flex-col gap-4 md:flex-row'>
						<Input
							className='flex-1 focus-visible:ring-gray-200 dark:focus-visible:ring-slate-800 md:mb-6'
							placeholder='Type a word...'
						/>
						<div className='flex gap-2 md:gap-4'>
							<Button
								className='flex-1 dark:text-slate-200'
								variant='outline'
							>
								Submit
							</Button>
							<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'>
								<Volume2 className='text-gray-500 dark:text-slate-500' />
							</span>
						</div>
					</div>

					<div className='my-4 mb-4 flex w-full items-center justify-between py-4 text-lg text-gray-800 dark:text-white md:mt-0'>
						<p
							style={{ fontSize: fontSize }}
							className='flex max-w-md flex-col text-xl lg:flex-row'
						>
							<span className='font-[500] dark:text-slate-200'>
								Meaning :
							</span>&nbsp;
							The meaning goes here
						</p>
						<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'>
							<Volume2 className='text-gray-500 dark:text-slate-500' />
						</span>{' '}
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
						<p
							style={{ fontSize: fontSize }}
							className='flex max-w-md flex-col text-xl lg:flex-row'
						>
							<span className='flex font-[500]  dark:text-slate-200'>
								Sentence : &nbsp;
							</span>
							A sentence goes here
						</p>
						<span className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'>
							<Volume2 className='text-gray-500 dark:text-slate-500' />
						</span>
					</div>
				</div>
			</section>
		</div>
	)
}
