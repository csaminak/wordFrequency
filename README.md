Learning Objectives

We need to get more practice with iteration (looping) and conditionals.
Additionally, you will learn how to use a common developer tool for checking code quality: JSHint.

Your Mission

Solve the programming problem below. You must also "lint" your code with JSHint,
in your repository you must include a .jshintrc file. Note that you may not have
any jshint warnings in your submitted solution.

You may not use a simple for loop for this assignment.

Word Frequency

Create a function which takes a string as an argument and determines the frequency
of each word in it. However, it should not include any single-character words.
The result should be an object with each word being the property name and the
frequency count being the value. For example, given "A cat in a hat is a silly
cat indeed." as your argument, the return value should be
{cat: 2, in: 1, hat: 1, is: 1, silly: 1, indeed: 1}
(notice that "a" is excluded since it is a single character).

You will want to use the split() method of strings to break up the string first.
You can use one of Shakespeare's Sonnets as your test case.

EPIC Mode

EPIC mode for this problem is to not include any punctuation in your returned
object, but leave in any hyphenated words.
