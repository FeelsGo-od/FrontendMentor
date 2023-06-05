export const getWord = async (word) => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}