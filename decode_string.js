function decodeBase64NoPadding(encodedString) {
    const paddedEncoded = encodedString + '='.repeat((4 - encodedString.length % 4) % 4);
    return atob(paddedEncoded);
}

// Example usage
const inputStr = "VGVqYXMgRGV0cm9qYQ";
const decodedStr = decodeBase64NoPadding(inputStr);

console.log("Encoded:", inputStr);
console.log("Decoded:", decodedStr);
