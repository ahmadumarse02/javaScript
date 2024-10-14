/*
String:-
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
2)  String charAt()
3)  String charCodeAt()
4)  String at()
5)  String [ ]
6)  String slice()
7)  String substring()
8)  String substr()
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
  let text = "My Name is Ahmad Umar.";
  console.log(text.charAt(0)); //output is M
  console.log(text.charAt(1)); //output is y
  console.log(text.charAt(2)); //output is
  console.log(text.charAt(3)); //output is N
}

/*
3)  String charCodeAt()
    The charCodeAt() methods return the binary number at a specified index(position) in a string. Because its converts the character into the binary numbers. 

*/
{
  let text = "My Name is Ahmad Umar.";
  console.log(text.charCodeAt(0)); 
  console.log(text.charCodeAt(1)); 
  console.log(text.charCodeAt(2)); 
  console.log(text.charCodeAt(3)); 
}

/*
4)  String at():
    The at() methods return the character at a specified index(position) in a string.

*/
{
  let text = "My Name is Ahmad Umar.";
  console.log(text.at(0)); //output is M
  console.log(text.at(1)); //output is y
  console.log(text.at(2)); //output is
  console.log(text.at(3)); //output is N
}

/*
5)   String [ ]:
    The  String [ ] methods return the character at a specified index(position) in a string.

*/
{
  let text = "My Name is Ahmad Umar.";
  console.log(text[0]); //output is M
  console.log(text[1]); //output is y
  console.log(text[2]); //output is
  console.log(text[3]); //output is N
}

/*
6)  String slice()
    It estracts a part of string and return a extracted part in a new string.
    this methods take a two parameters: first start position and second is end position.
*/
{
  let text = "apple banaba orange";
  console.log(text.slice(6, 12));
}

/*
7)  String substring()
    it is similar to slice().
    the difference is that start and end vlaues less than 0 are treated as 0 in substring().
*/
{
  let text = "apple banaba orange";
  console.log(text.substring(0, 12));
}

/*
8)  String substr()
    it is similar to slice().
    the difference is that the second parameter specifies the lenght of the extracted parts.
*/
{
  let text = "apple banaba orange";
  console.log(text.substr(6, 12));
}

/*
9)  String toUpperCase()
    A string is converted to upper case with toUpperCase().
*/
{
  let text = "apple banaba orange";
  console.log(text.toUpperCase());
}

/*
10)  String toLowerCase()
    A string is converted to Lower case with toLowerCase().
*/
{
  let text = "apple banaba orange";
  console.log(text.toLowerCase());
}

/*
11) String concat()
    concat() joins two or more strings.
*/
{
  let text1 = "Ahmad";
  let text2 = "Umar";
  console.log(text1.concat(" ", text2));
}

/* 
12) String trim()
    The trim() method removes whitespace from both sides of a string.
*/
{
  let text1 = "      Hello World!      ";
  console.log(text1.trim());
}

/*
13) String trimStart()
    The trimStart() method works like trim(), but removes whitespace only from the start of a string.
*/
{
  let text1 = "     Hello World!     .";
  console.log(text1.trimStart());
}

/*
14) String trimEnd()
    The trimEnd() method works like trim(), but removes whitespace only from the End of a string.
*/
{
  let text1 = "     Hello World!     ";
  console.log(text1.trimEnd());
}

/* 
15) String padStart()
    The padStart() method pads a string from the start.
    It pads a string with another string (multiple times) until it reaches a given length.
*/
{
  let text = "abc";
  console.log(text.padStart(10));
  console.log(text.padStart(10, "def"));
}

/* 
15) String padEnd()
    The padEnd() method pads a string from the End.
    It pads a string with another string (multiple times) until it reaches a given length.
*/
{
  let text = "abc";
  console.log(text.padEnd(10));
  console.log(text.padEnd(10, "def"));
}

/*
17) String repeat()
    The repeat() method returns a string with a number of copies of a string.
*/
{
  let text = "Hello world!";
  console.log(text.repeat(4));
}

/*
18) String replace()
    The replace() method replaces a specified value with another value in a string.
*/

{
  let text = "Please visit Microsoft and Microsoft!";
  console.log(text.replace("Microsoft", "Linux"));
  console.log(text.replace(/Microsoft/g, "Linux"));
}

/* 
19) String replaceAll()

*/

{
  let text = "I love cats. Cats are very easy to love. Cats are very popular.";
  console.log(text.replaceAll("cats", "dogs"));
  console.log(text.replaceAll(/cats/g, "dogs"));
}

/*
20) String split()
    A string can be converted to an array with the split() method
*/
{
  let text = "a,b,c,d,e,f";
  console.log(text.split(",", [2]));
}
