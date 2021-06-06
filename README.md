# Word researcher

The package aims to search a word inside a text. The tool is based on the KMP (Knuth–Morris–Pratt) algorithm.

The package came with many features like (findOne, findAll, history of search ...etc) and so many others, which some of them are already implemented, and the others will, soon.

Because of type's errors are the most common things developers encounter and deal with, I have used typescript to implement the package, which will make it more reliable to types.

## Installation

Use the package manager npm

```bash
npm install word-researcher
```

or for yarn

```bash
yarn add word-researcher
```

## Future features

For now, I've just created the find method, and the history of search. I am aiming to include other features rather than the ones mentioned above. The new features will be described down below :

- Replacing the searched word in a text
- Highlighting the searched word in text

# Examples

here some examples about the tools provided by the package, I am going to listed them first with a simple description about what it is aiming to do, and then I will provide some examples clearifying their use, and how to combine them if it is possible.

This is the way how to import any tool :

```bash
    import { findOne, findAll, findAllWithSkip, history } from "word-researcher";
```

## Description

<h4 style="color: dodgerblue; display: inline;">findOne( text, word, options ) : </h4> is used to look for only one occurence of the searched word.

```bash
@param text => string
@param word => string
@param options => Object
@returns position => number
```

<h4 style="color: dodgerblue; display: inline;">findAll( text, word, options ) : </h4> is used to look for all  occurences of the searched word in a text.

```bash
@param text => string
@param word => string
@param options => Object
@returns position => number[]
```

The previous functionality may take options as an Object {}. The available options are described in the next section down below :

```bash
 options = {
    caseSensative: boolean,     # default => false
    skipXFirstResults: number,  # default => 0
    skipXLastResults: number,   # default => 0
 }
```

skipXFirstResults and skipXLastResults are only valid for <label style='color: dodgerblue'>findAllWithSkip</label> method.

<h4 style="color: dodgerblue; display: inline;">findAllWithSkip( text, word, options ) : </h4> the main idea behind, is to offer the possibility to skip some results at the beginning or at the end of the text. Examples will be presented down below.

```bash
@param text => string
@param word => string
@param options => Object
@returns position => number[]
```

<h4 style="color: dodgerblue; display: inline;">history.pushWord( word ) : </h4> this function save the word in the history stack.

```bash
@param word => string
```

<h4 style="color: dodgerblue; display: inline;">history.getPreviousWord() : </h4> the function returns the (i-1) word's postion in the history.

<p></p>

<h4 style="color: dodgerblue; display: inline;">history.getNextWord() : </h4> the function may be called after using the getPreviousWord function, so it returns the word at position (i+1), until it reaches the last searched word in the history.

<p></p>

<h4 style="color: dodgerblue; display: inline;">history.clearHistory() : </h4> empty the history.

<p></p>

<h4 style="color: dodgerblue; display: inline;">history.jumpToIndex( index ) : </h4> the function returns the searched word at a certain position passed within parameter.

```bash
@param index => number
@returns => string
```

<p></p>

<h4 style="color: dodgerblue; display: inline;">history.historyLength() : </h4> the function returns the length of the history stack.

```bash
@returns => number
```

## Note

#### each tool provided by this package is implemented independently of any other tool, it's up to the developers to use it the way they find it appropriate.

## For example

The history and find tool are separately implemented and do not have any relation to each other, but the user is free to combine them.

```bash
import {findOne, history} from "word-researcher";

const text = "this is a new paragraph, it is used only for test";

# find the position of the word.
findOne(text, "is"); #result => 5
# and then store the word into the history
history.pushWord("is");
```
