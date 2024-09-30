/* String:-
    String are store the some text and written in the quotes and backticks.
*/

// Sigle Quotes
{
  let text = "Ahmad Umar";
  console.log(text);
}

// double Quotes
{
  let text = "Abdul Rasheed";
  console.log(text);
}

// Backticks
{
  let text = `I am a software engineer.`;
  console.log(text);
}

/*

String Methods:
1)  String length

{
    There are four methods that extract the characters in the String
2)  String charAt()
3)  String charCodeAt()
4)  String at()
5)  String [ ]
}

{
    There are three methods that extract a part of string.
6)  String slice()
7)  String substring()
8)  String substr()
}
9)  String toUpperCase()
10) String toLowerCase()
11) String concat()
12) String trim()
13) String trimStart()
14) String trimEnd()
15) String padStart()
16) String padEnd()
17) String repeat()
18) String replace()
19) String replaceAll()
20) String split()

*/

/* 
1)  String length:
    The Lenght property is return the lenght of String.
*/
{
  let text = "abcdefghijklmnopqrstuvwxy";
  console.log(text.length);
}

/*
2)  String charAt():
    The charAt() methods return the character at a specified index(position) in a string.

*/
{
    let text = 'My Name is Ahmad Umar.'
    console.log(text.charAt(0)) //output is M
    console.log(text.charAt(1)) //output is y
    console.log(text.charAt(2)) //output is 
    console.log(text.charAt(3)) //output is N
}

/*
3)  String charCodeAt()
    The charCodeAt() methods return the binary number at a specified index(position) in a string. Because its converts the character into the binary numbers. 

*/
{
    let text = 'My Name is Ahmad Umar.'
    console.log(text.charCodeAt(0)) //output is M
    console.log(text.charCodeAt(1)) //output is y
    console.log(text.charCodeAt(2)) //output is 
    console.log(text.charCodeAt(3)) //output is N
}

/*
4)  String at():
    The at() methods return the character at a specified index(position) in a string.

*/
{
    let text = 'My Name is Ahmad Umar.'
    console.log(text.at(0)) //output is M
    console.log(text.at(1)) //output is y
    console.log(text.at(2)) //output is 
    console.log(text.at(3)) //output is N
}

/*
5)   String [ ]:
    The  String [ ] methods return the character at a specified index(position) in a string.

*/
{
    let text = 'My Name is Ahmad Umar.'
    console.log(text[0]) //output is M
    console.log(text[1]) //output is y
    console.log(text[2]) //output is 
    console.log(text[3]) //output is N
}

/*
6)  String slice()
    It estracts a part of string and return a extracted part in a new string.
    this methods take a two parameters: first start position and second is end position.
*/
{
    let text = "apple banaba orange"
    console.log(text.slice(6 , 12))
}

/*
7)  String substring()
    it is similar to slice().
    the difference is that start and end vlaues less than 0 are treated as 0 in substring().
*/
{
    let text = "apple banaba orange"
    console.log(text.substring(0 , 12))
}

/*
8)  String substr()
    it is similar to slice().
    the difference is that the second parameter specifies the lenght of the extracted parts.
*/
{
    let text = "apple banaba orange"
    console.log(text.substr(6 , 12))
}

/*
9)  String toUpperCase()
    A string is converted to upper case with toUpperCase().
*/
{
    let text = "apple banaba orange"
    console.log(text.toUpperCase()) 
}

/*
9)  String toLowerCase()
    A string is converted to Lower case with toLowerCase().
*/
{
    let text = "apple banaba orange"
    console.log(text.toLowerCase()) 
}