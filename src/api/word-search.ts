import axios from 'axios'

const wordApi = axios.create({
    baseURL: 'https://api.simplerdictionary.com',
})

export async function getWordMeaning(word: string) {
	try {
        const response = await wordApi.post('/lookup',null,{
            params:{
                word: word
            },
            headers:{
                'accept': 'application/json',
                'api-key': process.env.NEXT_PUBLIC_DICTIONARY_API_KEY
            }
        })

        return response.data
	} catch (err: any) {
		console.log(err.message)
	}
}
