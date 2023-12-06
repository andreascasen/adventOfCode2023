import { readFile } from '../lib/fileSystem.js'
import { newGetCalibrationValueFromString } from './day1.lib.js'

/**
 * RESULTS
 * Part 1 - 54390
 * Part 2 - 
 */

const getInputArray = async (fileName) => {
	const input = await readFile(fileName)
	return input.split('\n')
} 

const part1 = async () => {
	const input = await getInputArray('./inputs/day1.txt')
	const calibrationValue = input.reduce((acc, curr) => {
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


/** PART 2 */
const part2 = async () => {
	const input = await getInputArray('./inputs/day1.txt')
	const newCalibrationValues = input.reduce((acc, curr) => {
		const currentCalibrationInput = newGetCalibrationValueFromString(curr)
		return acc + currentCalibrationInput
	}, 0)

	console.log({ newCalibrationValues })
}


// const dayOneFirstResult = await part1() // 54390
const dayOneSecondResult = await part2()
