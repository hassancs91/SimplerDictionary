'use client'

import { SimpleMobileNav } from '@/components/layout/mobilenav'

export default function Page() {
	return (
		<>
			<SimpleMobileNav />
			<div className='mx-4 flex h-full flex-col md:justify-center py-14 md:items-center lg:mx-64'>
				<h1 className='mb-4 flex gap-2 text-3xl font-semibold text-gray-900 dark:text-slate-200 md:items-center md:text-4xl'>
					Contact Us
				</h1>
				<h2 className='text-lg'>
					Have questions, suggestions, or feedback? We're here to
					listen.
				</h2>
				<h2 className='mt-10 text-xl font-semibold'>Reach Out to Us</h2>
				<p className='mt-1 md:max-w-lg md:text-center'>
					Your thoughts and insights are important to us. If there’s
					anything you'd like to share or inquire about, please don't
					hesitate to reach out.
				</p>

				<p className='mt-8 md:max-w-lg md:text-center'>
					You can email <b>Hasan</b>, the founder of&nbsp;
					<b>SimplerDictionary</b> directly at &nbsp;
					<a
						target='_blank'
						href='mailto:hasan@learnwithhasan.com'
						className='text-blue-600 hover:text-blue-500'
					>
						hasan@learnwithhasan.com
					</a>
				</p>
			</div>
		</>
	)
}
