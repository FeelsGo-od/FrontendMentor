'use client'

import React from 'react'

import List from '../../../components/list'

export default function WordInfo({ wordData, word }) {
    const handleAudioplay = () => {
        wordData.phonetics.every((item) => {
            if(item.audio !== '') {
                let audio = new Audio(item.audio)
                audio.play()
                return false;
            } else {
                return true
            }
        })
    }
    if(!wordData) {
        return (
            <div className={`font-normal text-center main px-10 md:px-[2.438rem] pt-[2.688rem] md:pt-[8.25rem] mxl:px-[22rem]`}>
                <p className='text-[4rem] leading-[4.688rem]'>😕</p>
                <h4 className='text-[1.25rem] leading-6 text-2D pt-4 md:pt-[2.75rem] break-all'>No Definitions For "{word}" Found</h4>
                <p className='text-[1.125rem] leading-6 text-75 pt-4 md:pt-6'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            </div>
        )
    }
  return (
    <>
        <div className={`font-normal main px-10 md:px-[2.438rem] pt-[1.5rem] md:pt-[2.688rem] mxl:px-[22rem]`}>
            <div className="word-display flex items-center flex-wrap justify-between">
                <div>
                    <h1 className={`font-bold text-[2rem] md:text-[4rem] leading-[2.438rem] md:leading-[4.813rem] text-2D break-all`}>{wordData.word}</h1>
                    <p className="font-sans text-violet text-[1.125rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[1.813rem] pt-[0.5rem]">{wordData.phonetic}</p>
                </div>
                <div onClick={handleAudioplay} className="group cursor-pointer relative w-[3rem] h-[3rem] md:w-[4.688rem] md:h-[4.688rem]">
                    <div className="w-[3rem] h-[3rem] rounded-[3rem] md:w-[4.688rem] md:h-[4.688rem] md:rounded-[4.688rem] opacity-25 group-hover:opacity-100 bg-violet transition delay-50 duration-300 ease-in-out"></div>
                    <div className="w-0 h-0 border-t-[7.5px] border-t-transparent border-l-[15px] border-l-violet group-hover:border-l-white border-b-[7.5px] border-b-transparent absolute-center transition delay-50 duration-300 ease-in-out"></div>
                </div>
            </div>
            <div className="block-component pt-[2rem] md:pt-[2.5rem]">
                <div className="flex justify-between items-center">
                    <span className={`font-sans font-bold text-2D text[1.125rem] leading-[1.375rm] md:text-[1.5rem] md:leading-[1.813rem]`}>noun</span>
                    <div className="w-full h-px bg-E9 ml-5"></div>
                </div>
                <div className="pt-[2rem] md:pt-[2.5rem]">
                    <p className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6">Meaning</p>
                    <ul className="list-image-[url(../public/images/Oval.svg)] pt-[0.25rem] text-[0.938rem] leading-[1.5rem] md:text-[1.125rem]">
                        {wordData.meanings[0].definitions.map((sentence, i) => (
                            <List key={i} definition={sentence.definition} synonyms={sentence.synonyms ? sentence.synonyms : ''} antonyms={sentence.antonyms ? sentence.antonyms : ''} />
                        ))}
                    </ul>
                    {wordData.meanings[0].synonyms.length !== 0 && (
                        <div className="pt-[1.5rem] md:pt-[2rem]">
                            <span className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Synonyms</span>
                            {wordData.meanings[0].synonyms.map((synonym, i) => (
                                <span key={i} className={`font-bold break-all text-violet text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{synonym}{wordData.meanings[0].synonyms.length > 1 && ','}</span>
                            ))}
                        </div>
                    )}
                    {wordData.meanings[0].antonyms.length !== 0 && (
                        <div className="pt-[1.5rem] md:pt-[2rem]">
                            <span className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Antonyms</span>
                            {wordData.meanings[0].antonyms.map((antonym, i) => (
                                <span key={i} className={`font-bold break-all text-violet text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{antonym}{wordData.meanings[0].antonym.length > 1 && ','}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {wordData.meanings[1] && (
                <div className="block-component pt-[2rem] md:pt-[2.5rem]">
                    <div className="flex justify-between items-center">
                        <span className={`font-sans font-bold text-2D text[1.125rem] leading-[1.375rm] md:text-[1.5rem] md:leading-[1.813rem]`}>verb</span>
                        <div className="w-full h-px bg-E9 ml-5"></div>
                    </div>
                    <div className="pt-[2rem] md:pt-[2.5rem]">
                        <p className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6">Meaning</p>
                        <ul className="list-image-[url(../public/images/Oval.svg)] pt-[0.25rem] text-[0.938rem] leading-[1.5rem] md:text-[1.125rem]">
                            {wordData.meanings[1].definitions.map((sentence, i) => (
                                <List key={i} definition={sentence.definition} synonyms={sentence.synonyms ? sentence.synonyms : ''} antonyms={sentence.antonyms ? sentence.antonyms : ''} example={sentence.example ? sentence.example : ''} />
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
        <footer className="px-10 md:px-[2.5rem] pt-[2rem] mxl:px-[22rem] pb-[5.313rem] md:pb-[7.375rem] mxl:pb-[7.75rem]">
            <div className="w-full bg-E9 h-px"></div>
                <ul className="flex flex-wrap md:items-center pt-[1.5rem]">
                    <li className="text-75 text-[0.875rem] leading-[1.375rem] underline">Source</li>
                    <li className="w-full md:w-auto md:ml-[1.25rem]"><a href="/" className="link-red break-all underline text-2D text-[0.875rem] leading-[1.063rem]">https://en.wiktionary.org/wiki/{word}</a></li>
                </ul>
        </footer>
    </>
  )
}
