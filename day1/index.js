import { readFile } from '../lib/fileSystem.js'

const part1 = async () => {
	const input = await readFile('./inputs/day1.txt')
	const inputArray = input.split('\n')
	const calibrationValue = inputArray.reduce((acc, curr) => {
		const currentCalibrationInput = getCalibrationValueFromString(curr)
		return acc + currentCalibrationInput
	}, 0)
	console.log({ calibrationValue })
}

const getCalibrationValueFromString = (singleString) => {
	const onlyNumbers = singleString.replace(/\D/g, '').split('')
	const calibrationValue = `${onlyNumbers[0]}${
		onlyNumbers[onlyNumbers.length - 1]
	}`
	return parseInt(calibrationValue)
}

part1() // 54390
