/* In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck! */
const reverseVowels = (string) => {
    const vowels = string.split('')
                         .filter(char => [...'aeiou'].includes(char.toLowerCase()))
                         .reverse()
    const indexes = string.split('').map((char, i) => [...'aeiou'].includes(char.toLowerCase()) ? i : char)
                           .filter(i => typeof i === 'number')
return string.split('')
             .map((char, i) => {
                   if (indexes.includes(i)) {
                  return vowels[indexes.indexOf(i)]
        }
        return char })
    .join('')
}