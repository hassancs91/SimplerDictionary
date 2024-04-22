import axios from 'axios'

export const dynamic = 'force-dynamic' // defaults to auto

const wordApi = axios.create({
	baseURL: 'https://api.simplerdictionary.com'
})

export async function POST(request: Request) {
	const { word } = await request.json()

	try {
		const res = await wordApi.post('/lookup', null, {
			params: {
				word: word
			},
			headers: {
				accept: 'application/json',
				'api-key': process.env.DICTIONARY_API_KEY
			}
		})


		return Response.json(res.data)
	} catch (err: any) {
		console.log(err.response.data.detail)
		return Response.json({ error: err.response.data.detail })
	}
}
