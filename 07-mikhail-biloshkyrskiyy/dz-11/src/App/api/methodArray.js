export default [
    {
        id: '1',
        name: 'Array.prototype.map()',
        description:
            'Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.',
        syntax: "var new_array = arr.map(function callback(currentValue, index, array) { \n// Возвращает элемент для new_array \n}[, thisArg])",
        example: "const numbers = [1, 4, 9]; \nconst roots = numbers.map(Math.sqrt);\ndocument.write('roots: ', roots, '  numbers:', numbers)",
        method: 'map',
    },
    {
        id: '2',
        name: 'Array.prototype.concat()',
        description:
            'Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.',
        syntax: "const array1 = ['a', 'b', 'c']; \nconst array2 = ['d', 'e', 'f']; \nconst array3 = array1.concat(array2); \nconsole.log(array3); \n// expected output: Array [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"]",
        example: "const array1 = ['a', 'b', 'c']; \nconst array2 = ['d', 'e', 'f']; \nconst array3 = array1.concat(array2); \ndocument.write(array3);",
        method: 'concat',
    },
    {
        id: '3',
        name: 'Array.prototype.fill()',
        description:
            'Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.',
        syntax: "const array1 = [1, 2, 3, 4]; \n// fill with 0 from position 2 until position 4 \nconsole.log(array1.fill(0, 2, 4)); \n// expected output: [1, 2, 0, 0] \n// fill with 5 from position 1 console.log(array1.fill(5, 1)); \n/ expected output: [1, 5, 5, 5] \nconsole.log(array1.fill(6)); \n// expected output: [6, 6, 6, 6]",
        example: "const array1 = [1, 2, 3, 4]; \n// fill with 0 from position 2 until position 4 \n// fill with 5 from position 1 document.write(array1.fill(5, 1)); \ndocument.write(array1.fill(6)); \n// expected output: [6, 6, 6, 6]",
        method: 'fill',
    },
    {
        id: '4',
        name: 'Array.prototype.find()',
        description:
            'Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.Также смотрите метод findIndex(), который возвращает индекс найденного в массиве элемента вместо его значения.Если вам нужно найти позицию элемента или наличие элемента в массиве, используйте Array.prototype.indexOf() или Array.prototype.includes() соответственно.',
        syntax: "arr.find(callback[, thisArg])",
        example: "function isPrime(element, index, array) {\n\tvar start = 2;\n\twhile (start <= Math.sqrt(element)) {\n\t\tif (element % start++ < 1) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn element > 1;\n}\ndocument.write([4, 5, 8, 12].find(isPrime)); // 5",
        method: 'find',
    },
    {
        id: '5',
        name: 'Array.prototype.filter()',
        description: 'Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.',
        syntax: "const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; \nconst result = words.filter(word => word.length > 6); \nconsole.log(result); \n// expected output: Array [\"exuberant\", \"destruction\", \"present\"]",
        example: "const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];\nconst result = words.filter(word => word.length > 6);\ndocument.write(result);\n// expected output: Array [\"exuberant\", \"destruction\", \"present\"]",
        method: 'filter',
    }
]