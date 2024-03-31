'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ExternalLink } from 'lucide-react'

function Navbar() {
	return (
		<>
			<header className='hidden items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800 md:flex'>
				<Link href={'/'} className='flex items-center gap-2'>
					<Image
						src='/logo.png'
						width={500}
						height={500}
						alt='logo image'
						className='w-[30px]'
					/>
					<h1 className='text-xl font-semibold text-gray-900 hover:opacity-90 dark:text-slate-200'>
						SimplerDictionary
					</h1>
				</Link>
				<nav>
					<ul className='flex space-x-2 text-sm'>
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
									<a
										className='rounded p-2 cursor-pointer hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800'
									>
										Others
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
				</nav>
			</header>
		</>
	)
}

export default Navbar
