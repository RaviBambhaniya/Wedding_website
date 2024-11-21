function encodeBase64NoPadding(inputString) {
    return btoa(inputString).replace(/=+$/, '');
}

const namesList = ["Solanki Ashwin"];

for (const name of namesList) {
    const encodedName = encodeBase64NoPadding(name);
    // console.log(encodedName)
    console.log(name);
    // console.log(`https://ashad-khira.github.io/wedding-invitation?i=${encodedName}`);
    console.log(`https://ravibambhaniya.github.io/Wedding_website?i=${encodedName}`);
    console.log('\n');
}