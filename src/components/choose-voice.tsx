import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem
} from '@/components/ui/command'

type SelectVoiceProps = {
	setSelectedVoice: React.Dispatch<React.SetStateAction<SpeechSynthesisVoice | undefined>>
	availabeVoices: SpeechSynthesisVoice[]
	selectedVoice: SpeechSynthesisVoice
}

export function SelectVoice({
	setSelectedVoice,
	availabeVoices,
	selectedVoice
}: SelectVoiceProps) {
	const [open, setOpen] = React.useState(false)

	let voices = availabeVoices.map((voice) => voice.name)

	function handleVoiceChange(voiceName: string) {
		const voice = availabeVoices.find(
			(voice) => voice.name.toLowerCase() === voiceName.toLowerCase()
		)

		if (voice) {
			setSelectedVoice(voice)
		}
	}

   React.useEffect(()=>{
       let lang = 'en-US'
       let defaultVoice = availabeVoices.find((voice) => voice.lang === lang)
       setSelectedVoice(defaultVoice)
       },[])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-full justify-between truncate'
				>
					{selectedVoice?.name || 'Select a voice'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Search voice...' />
					<CommandEmpty>No voice found.</CommandEmpty>
					<CommandGroup className='h-[300px] overflow-y-auto'>
						{voices.map((voice) => (
							<CommandItem
								key={voice}
								value={voice}
								onSelect={(currentValue) => {
									handleVoiceChange(currentValue)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										selectedVoice?.voiceURI === voice
											? 'opacity-100'
											: 'opacity-0'
									)}
								/>
								{voice}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
