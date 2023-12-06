const stringSearchValues = [
	'one',
	'two',
	'tree',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine'
]

const getStringedNumbersValueAndIndex = (stringInput) => {
	let firstStringIndex = { index: null, value: 0 } // { index: number, value: number }
	let lastStringIndex = { index: null, value: 0 } 

	stringSearchValues.forEach((stringValue, stringNumberIndex) => {
		let currentValueIndex = stringInput.indexOf(stringValue)
		if (currentValueIndex === -1) {
			return
		}

		if (firstStringIndex.index === null || currentValueIndex < firstStringIndex.index) {
			firstStringIndex = {
				index: currentValueIndex,
				value: stringNumberIndex + 1
			}
		}

		if (lastStringIndex.index === null || currentValueIndex > lastStringIndex.index) {
			lastStringIndex = {
				index: currentValueIndex,
				value: stringNumberIndex + 1
			}
		}
	})

	return {
		firstStringIndex,
		lastStringIndex
	}
}

const getNumericValuesAndIndexes = (stringInput) => {
	let firstNumberIndex = { index: null, value: 0 } 
	let lastNumberIndex = { index: null, value: 0 } 
	
	const split = stringInput.split('')
	split.forEach(((character, characterIndex) => {
		if (!/^[0-9]*$/.test(character)) {
			return
		}

		if (firstNumberIndex.index === null || characterIndex < firstNumberIndex.index ) {
			firstNumberIndex = {
				index: characterIndex,
				value: parseInt(character)
			}
		}

		if (lastNumberIndex.index === null || characterIndex > lastNumberIndex.index ) {
			lastNumberIndex = {
				index: characterIndex,
				value: parseInt(character)
			}
		}
	}))

	return { firstNumberIndex, lastNumberIndex }
}

export const newGetCalibrationValueFromString = (singleString) => {
	const { firstStringIndex, lastStringIndex } = getStringedNumbersValueAndIndex(singleString)
	const { firstNumberIndex, lastNumberIndex } = getNumericValuesAndIndexes(singleString)

	let firstValue = firstNumberIndex.index < firstStringIndex.index ? firstNumberIndex.value : firstStringIndex.value
	let lastValue = lastNumberIndex.index < lastStringIndex.index ? lastNumberIndex.value : lastStringIndex.value
	return parseInt(`${firstValue}${lastValue}`)
	
}