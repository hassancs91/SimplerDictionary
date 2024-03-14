'use client'

import { getWordMeaning } from '@/api/word-search'
import MobileNavbar from '@/components/layout/mobilenav'
import Options from '@/components/options-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Speech, Volume2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type WordMeaningType = {
	user_input: string
	corrected_word: string
	simple_meaning: string
	detailed_meaning: string
	sentence: string
	images: string[]
}

type TextSpeechType =
	| 'corrected_word'
	| 'simple_meaning'
	| 'detailed_meaning'
	| 'sentence'

export default function Home() {
	const [fontSize, setFontSize] = useState(16)
	const [playbackSpeed, setPlaybackSpeed] = useState<number>(1)
	const [wordMeaning, setWordMeaning] = useState<WordMeaningType | null>(null)
	const [isSearching, setIsSearching] = useState(false)
	const [isSpeaking, setIsSpeaking] = useState<TextSpeechType | null>(null)

	const speakText = (
		text:
			| 'corrected_word'
			| 'simple_meaning'
			| 'detailed_meaning'
			| 'sentence'
	) => {
		if ('speechSynthesis' in window) {
			const synth = window.speechSynthesis
			if (!wordMeaning) {
				const utterance = new SpeechSynthesisUtterance(
					'No text to read! Please search word again.'
				)
				synth.speak(utterance)
				return
			}

			setIsSpeaking(text)
			let readText = wordMeaning[text]
			const utterance = new SpeechSynthesisUtterance(readText)
			utterance.rate = playbackSpeed

			// Event handler for when the speech has finished
			utterance.onend = () => {
				setIsSpeaking(null)
			}

			// Also consider handling errors
			utterance.onerror = () => {
				setIsSpeaking(null)
			}

			synth.speak(utterance)
		}
	}

	const getMeaning = async () => {
		setIsSearching(true)

		let response = await getWordMeaning('hello')
		setWordMeaning(response)

		setIsSearching(false)
	}

	return (
		<>
			<MobileNavbar
				setFontSize={(size) => setFontSize(size)}
				setPlaybackSpeed={(speed) => setPlaybackSpeed(speed)}
				playbackSpeed={playbackSpeed}
				fontSize={fontSize}
			/>
			<div className='flex flex-1'>
				<Options
					setFontSize={(size) => setFontSize(size)}
					setPlaybackSpeed={(speed) => setPlaybackSpeed(speed)}
					playbackSpeed={playbackSpeed}
					fontSize={fontSize}
				/>

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
									onClick={getMeaning}
									disabled={isSearching ? true : false}
									className='flex-1 disabled:cursor-not-allowed dark:text-slate-200'
									variant='outline'
								>
									{isSearching ? 'Searching...' : 'Search'}
								</Button>
								<span
									onClick={() => speakText('corrected_word')}
									className={cn(
										'h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'
									)}
								>
									{isSpeaking == 'corrected_word' ? (
										<Speech className='text-gray-500 dark:text-slate-500' />
									) : (
										<Volume2 className='text-gray-500 dark:text-slate-500' />
									)}
								</span>
							</div>
						</div>

						<div className='my-4 mb-4 flex w-full items-center justify-between py-4 text-lg text-gray-800 dark:text-white md:mt-0'>
							<div className='flex flex-col'>
								<p
									style={{ fontSize: fontSize }}
									className='font-[500] dark:text-slate-200'
								>
									Meaning :
								</p>
								<p
									style={{ fontSize: fontSize }}
									className='text-xl lg:flex-row'
								>
									{wordMeaning?.detailed_meaning}
								</p>
							</div>
							<span
								onClick={() => speakText('detailed_meaning')}
								className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'
							>
								{isSpeaking == 'detailed_meaning' ? (
									<Speech className='text-gray-500 dark:text-slate-500' />
								) : (
									<Volume2 className='text-gray-500 dark:text-slate-500' />
								)}
							</span>
						</div>

						<div
							draggable={false}
							className='mb-4 grid select-none grid-cols-3 gap-4'
						>
							<Image
								src={
									wordMeaning?.images[0] ?? '/placeholder.svg'
								}
								height='250'
								width='250'
								draggable={false}
								alt='Meaning related image'
								className='aspect-square'
							/>
							<Image
								src={
									wordMeaning?.images[1] ?? '/placeholder.svg'
								}
								width='250'
								height='250'
								draggable={false}
								alt='Meaning related image'
								className='aspect-square'
							/>
							<Image
								src={
									wordMeaning?.images[2] ?? '/placeholder.svg'
								}
								height='250'
								width='250'
								draggable={false}
								alt='Meaning related image'
								className='aspect-square'
							/>
						</div>

						<div className='mb-4 flex w-full items-center justify-between py-4 text-lg text-gray-800 dark:text-white'>
							<div className='flex flex-col'>
								<p
									style={{ fontSize: fontSize }}
									className='flex font-[500]  dark:text-slate-200'
								>
									Sentence :
								</p>
								<p
									style={{ fontSize: fontSize }}
									className='flex flex-col text-xl lg:flex-row'
								>
									{wordMeaning?.sentence}
								</p>
							</div>
							<span
								onClick={() => speakText('sentence')}
								className='h-fit cursor-pointer select-none rounded-full bg-gray-100 p-2 hover:opacity-80 active:bg-gray-200 dark:bg-slate-800'
							>
								{isSpeaking == 'sentence' ? (
									<Speech className='text-gray-500 dark:text-slate-500' />
								) : (
									<Volume2 className='text-gray-500 dark:text-slate-500' />
								)}
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
