import Link from 'next/link'

function Navbar() {
	return (
		<header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700'>
			<h1 className='text-xl font-semibold text-gray-900 dark:text-white'>
				SimplerDictionary
			</h1>
			<nav>
				<ul className='flex space-x-4'>
					<li>
						<Link
							className='text-blue-600 dark:text-blue-300'
							href='#'
						>
							Link1
						</Link>
					</li>
					<li>
						<Link
							className='text-blue-600 dark:text-blue-300'
							href='#'
						>
							Link2
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
