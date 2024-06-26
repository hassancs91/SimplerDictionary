'use client'

import { SimpleMobileNav } from '@/components/layout/mobilenav'

export default function Page() {
	return (
		<>
			<SimpleMobileNav />
			<div className='mx-4 flex flex-col py-8 md:h-full md:items-center md:py-14 lg:mx-64 lg:mb-16'>
				<h1 className='text-3xl font-semibold text-gray-900 dark:text-slate-200 md:mb-4 md:text-4xl'>
					About
				</h1>

				<h2 className='mt-6 text-2xl font-semibold md:mt-8'>
					A Community Project, User-Friendly Dictionary
				</h2>
				<p className='max-w-xl md:text-center'>
					SimplerDictionary, powered by AI, uses{' '}
					<a
						target='_blank'
						href='https://github.com/hassancs91/SimplerLLM'
						className='text-blue-600 underline-offset-2 hover:underline'
					>
						SimplerLLM{' '}
					</a>
					and{' '}
					<a
						target='_blank'
						href='https://openai.com/gpt-4'
						className='text-blue-600 underline-offset-2 hover:underline'
					>
						GPT-4{' '}
					</a>
					for clear, easy-to-understand word definitions. It also
					includes attractive images made by Stable Diffusion for
					better comprehension.
				</p>

				<h2 className='mt-8 text-2xl font-semibold md:mt-14'>
					A Community Project
				</h2>
				<p className='max-w-xl md:text-center'>
					This dictionary is not just a tool, but a community project.
					It's open-source, so anyone can add, change, or explore new
					ideas. It's a creative space for all.
				</p>
				<ul className='mt-4 list-inside list-disc space-y-2'>
					<p className='text-lg font-[500]'>Built with care:</p>
					<li className='max-w-xl'>
						Our strong backend uses Python FastAPI. Check out our
						backend on GitHub:{' '}
						<a
							target='_blank'
							href='https://github.com/hassancs91/SimplerDictionary-API'
							className='text-blue-600 underline-offset-2 hover:underline'
						>
							SimplerDictionary-API
						</a>
					</li>
					<li className='max-w-md'>
						The frontend is made with Next.js, ensuring a smooth and
						user-friendly experience. Visit our frontend repository:
						<a
							target='_blank'
							href='https://github.com/hassancs91/SimplerDictionary'
							className='text-blue-600 underline-offset-2 hover:underline'
						>
							SimplerDictionary Frontend
						</a>
					</li>
				</ul>

				<h2 className='mt-8 text-2xl font-semibold md:mt-14'>
					Rich Data Resource
				</h2>
				<p className='max-w-xl md:text-center'>
					We offer our full dataset for anyone interested, from
					researchers to developers. It's a valuable resource for many
					uses. Download it{' '}
					<a
						target='_blank'
						href='https://github.com/hassancs91/SimplerDictionary-API'
						className='text-blue-600 underline-offset-2 hover:underline'
					>
						here
					</a>
					.
				</p>
			</div>
		</>
	)
}
