import { getWord } from "./api/dictionaryAPI";
import WordInfo from "./components/wordInfo";

export default async function Page({ params }) {
    let wordData = await getWord(params.slug)
    wordData = wordData[0]

    return (
        <WordInfo wordData={wordData} word={params.slug} />
    )
}