export default function Page() {
	return (
		<div className='mx-64 flex h-full flex-col items-center py-14'>
			<h1 className='mb-4 text-3xl font-semibold text-gray-900 dark:text-slate-200 md:text-4xl'>
				AI-Enhanced, User-Friendly Dictionary
			</h1>

			<p className='max-w-lg text-center'>
				SimplerDictionary, powered by AI, uses SimplerLLM and GPT-4 for
				clear, easy-to-understand word definitions. It also includes
				attractive images made by Stable Diffusion for better
				comprehension.
			</p>

			<h2 className='mt-14 text-2xl font-semibold'>A Community Project</h2>
			<p className='max-w-lg text-center'>
				This dictionary is not just a tool, but a community project.
				It's open-source, so anyone can add, change, or explore new
				ideas. It's a creative space for all.
			</p>
			<ul className='mt-4 list-inside list-disc space-y-2'>
				<p className='text-lg font-[500]'>Built with care:</p>
				<li className='max-w-md'>
					Our strong backend uses Python FastAPI. Check out our
					backend on GitHub: SimplerDictionary-API URL
				</li>
				<li className='max-w-md'>
					The frontend is made with Next.js, ensuring a smooth and
					user-friendly experience. Visit our frontend repository:
					[Frontend Repo Link].
				</li>
			</ul>

			<h2 className='mt-14 text-2xl font-semibold'>Rich Data Resource</h2>
			<p className='max-w-lg text-center'>
				We offer our full dataset for anyone interested, from
				researchers to developers. It's a valuable resource for many
				uses. Download it here: [Link to Dataset].
			</p>
		</div>
	)
}
