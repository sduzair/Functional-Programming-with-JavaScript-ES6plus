import words from 'an-array-of-english-words';

const findAnagrams = (word, allWords) => {
    // const lettersOfGivenWord = word.split('');     //letters is array of letters
    // console.log('Letters of given word:', lettersOfGivenWord);
    const anagrams = allWords.reduce((anagramArray, dicWord) => {
        if (dicWord.length !== word.length) return [...anagramArray];
        if(word.split('').every(letterOfGivenWord => dicWord.split('').some(letterOfDicWord => letterOfDicWord === letterOfGivenWord)) === true) {
            // console.log('Found anagram ' + dicWord);
            return [...anagramArray, dicWord];
        }
        else return [...anagramArray];
    }, []);
    return anagrams;
}

console.log(findAnagrams('cinema', words));

// const makeLettersObject = arrayOfLetters => arrayOfLetters.reduce((accObject, letter) => ({
//     ...accObject,
//     [letter]: accObject[letter] ? accObject[letter] + 1 : 1
// }), {});
//
// const hasSameWordCount = (word1, word2) => {
//     const word1LettersObject = makeLettersObject(word1.split(''));
//     const word2LettersObject = makeLettersObject(word2.split(''));
//
//     return Object.keys(word1LettersObject).every(letterFromWord1 => word1LettersObject[letterFromWord1] === word2LettersObject[letterFromWord1]);
// }
//
// const findAnagrams2 = (givenWord, dicWords) => {
//     return dicWords.reduce((anagramAcc, dicWord) => {
//         if (hasSameWordCount(givenWord, dicWord) && givenWord.length === dicWord.length) return [...anagramAcc, dicWord]
//         else return [...anagramAcc];
//     }, []);
// }
//
// console.log(findAnagrams2('cinema', words));
