import Link from 'next/link'

function Navbar() {
	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700'>
			<h1 className='text-xl font-semibold text-gray-900 dark:text-white'>
				SimplerDictionary
			</h1>
			<nav>
				<ul className='flex space-x-2 text-sm'>
					<li>
						<Link
							className='hover:bg-gray-100 p-2 rounded dark:text-blue-300'
							href='#'
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className='hover:bg-gray-100 p-2 rounded dark:text-blue-300'
							href='#'
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
