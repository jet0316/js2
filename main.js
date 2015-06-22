var person = prompt('Enter a word:')

var name = person

var title = "You entered: " + name + 
	"\nYou have " + name.length + " characters in your word." + 
	"\nThe third character is " + '"' + name.charAt(2) + '"' + 
	"\nLowercase: " + name.toLowerCase() + 
	"\nUppercase: " + name.toUpperCase() +
	"\nExample: I have always wanted a " + name + " my whole life" +
	"\nSubword: " + name.substring(1, 4)



alert(title)