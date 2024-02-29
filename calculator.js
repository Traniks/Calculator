document.addEventListener('DOMContentLoaded', function () {
	const num1Input = document.getElementById('num1')
	const num2Input = document.getElementById('num2')
	const resultSpan = document.getElementById('result')

	document.getElementById('addBtn').addEventListener('click', add)
	document.getElementById('subtractBtn').addEventListener('click', subtract)
	document.getElementById('multiplyBtn').addEventListener('click', multiply)
	document.getElementById('divideBtn').addEventListener('click', divide)

	function add() {
		const num1 = parseFloat(num1Input.value)
		const num2 = parseFloat(num2Input.value)
		const result = num1 + num2
		setResult(result)
	}

	function subtract() {
		const num1 = parseFloat(num1Input.value)
		const num2 = parseFloat(num2Input.value)
		const result = num1 - num2
		setResult(result)
	}

	function multiply() {
		const num1 = parseFloat(num1Input.value)
		const num2 = parseFloat(num2Input.value)
		const result = num1 * num2
		setResult(result)
	}

	function divide() {
		const num1 = parseFloat(num1Input.value)
		const num2 = parseFloat(num2Input.value)
		if (num2 === 0) {
			setResult('На ноль делить нельзя!')
		} else {
			const result = num1 / num2
			setResult(result)
		}
	}

	function setResult(value) {
		resultSpan.textContent = value
	}
})
