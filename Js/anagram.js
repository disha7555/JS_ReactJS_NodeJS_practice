//1)program to find words like care and race (anagram words which have same no of characers and same characters in same frequency but order of them is different)
//METHOD:1
const anagram=(word1,word2)=>{
    if(word1.length===word2.length){
        for(i=0;i<=word1.length-1;i++){
            let arr=[];
            for(j=0;j<=word2.length-1;j++){
                if(word1[i]==word2[j]){
                    arr.push(word1[i]);
                }
            }

            if(!arr.length==1){
                return false;
            }
        }
        return true;
    }
    else{
        console.log("words are of different lengths ,so they are not anagrams")
   
        return false;
        }
}
console.log(anagram("abcd","dabcd"));



//METHOD:2 chatgpt way


// const areAnagrams = (word1, word2) => {
//     // Check if the lengths of both words are equal
//     if (word1.length !== word2.length) {
//         console.log("Words are of different lengths, so they are not anagrams");
//         return false;
//     }

//     // Convert strings to arrays to manipulate characters
//     let arr1 = word1.split('');
//     let arr2 = word2.split('');

//     // Sort both arrays alphabetically
//     arr1.sort();
//     arr2.sort();

//     // Compare sorted arrays
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// // Test cases
// console.log(areAnagrams("abcd", "dabcd")); // Output: false (different lengths)
// console.log(areAnagrams("abcd", "dabc"));  // Output: true
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false
