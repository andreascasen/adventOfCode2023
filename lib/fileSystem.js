import { promises as fsPromises } from 'node:fs'

export const readFile = async (filePath) => {
	const fileData = await fsPromises.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error({ error })
			return undefined
		}
		return data
	})

	return fileData
}
