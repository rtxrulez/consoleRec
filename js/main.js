(function(){
	console.info('Я запустился!');

	// функция для вывода на экран
	function print(str) {
		var elem = document.getElementsByClassName('content')[0];
		elem.innerHTML = elem.innerHTML + '<p>' + str + '</p>';
	}

	function consoleRec(arrStrings) {
		var i = 0,
			arrLength = arrStrings.length;
		function recurse(str) {
			if( i < arrLength ) {
				i++;
				print(str);
				recurse(arrStrings[i]);
			}
		}

		// проверяем правильный ли массив
		if( arrStrings[0] !== undefined && arrStrings.length !== 0 ) {
			recurse(arrStrings[0]);
		} else {
			print('Массив пустой')
		}
	}


	consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);

	console.info('Я сделяль! ');
})();