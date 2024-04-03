// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(a[2]);
// a.push(11)
// a.push(["Hi" , "bye"])
// console.log(a)

// const a = [
//   ["Hi", "bye"],
//   [1, 2],
// ];

// console.log(a[0][0]);

// const b = ["a", "b", "c", "d", "e"];
// console.log(b[2]);

// const c = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// console.log(c[0][3]);
// console.log(c[1][2]);
// console.log(c[2][0]);

// const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(d.length)

// ----------------------------------------------------------

// let number = [1,2]

//-- Push -- add element at last index and pop -- remove element form last index

// number.push(3 , 4 , 5)

// console.log(number)

// number.pop()

// console.log(number);

//-- unshift -- add element from start and shift -- remove element form start

// number.unshift(0)

// console.log(number)

// number.shift()

// console.log(number)

// ---concat() -- Add to two arry

// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat(b)

// console.log(c)

//----  includes -- return bool value if element is present then it will return true otherwise false

// const a = [1, 2, 3];

// console.log(a.includes(2))

//--- indexOf -- it will reurn the index of the element
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a.indexOf(4))

//--- reverese

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a.reverse())

// slice --

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(a.slice()); // create copy of array
// // console.log(a.slice(3)); // remove before 3
// // console.log(a.slice(3 , 4)); // remove form all except between 3  and 4

// console.log(a.slice(-3))  // give form last

//-- splice - add remove

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(a.splice(1, 4));
// console.log(a.splice(2, 0 , 22));

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);

//-- sort method

// const a = [10,52,4,8,1,2,3]
// console.log(a.sort( )) // it will no sort


// array + const

// const a = [1,2,3]
// a.push(4)
// console.log(a);

//nested arry

const gameboard = [['X' , 'O' , 'X'] , ['O' , null , 'X'] , ['X' ,'X' , 'X']]
console.log(gameboard)
console.log(gameboard[1][1])