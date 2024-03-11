"use client"

import Link from 'next/link'

function Navbar() {
	return (
		<>
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

