'use client'

import React from 'react'

import { inter400, inter700 } from '../../../fonts'
import List from '../../../components/list'

export default function WordInfo({ wordData }) {
  return (
    <div className={`${inter400.variable} font-inter400 main px-10 md:px-[2.438rem] pt-[1.5rem] md:pt-[2.688rem] mxl:px-[22rem]`}>
        <div className="word-display flex items-center flex-wrap justify-between">
            <div>
                <h1 className={`${inter700.variable} font-inter700 text-[2rem] md:text-[4rem] leading-[2.438rem] md:leading-[4.813rem] text-2D`}>{wordData.word}</h1>
                <p className="text-violet text-[1.125rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[1.813rem] pt-[0.5rem]">{wordData.phonetic}</p>
            </div>
            <div className="relative w-[3rem] h-[3rem] md:w-[4.688rem] md:h-[4.688rem]">
                <div className="w-[3rem] h-[3rem] rounded-[3rem] md:w-[4.688rem] md:h-[4.688rem] md:rounded-[4.688rem] opacity-25 bg-violet"></div>
                <div className="w-0 h-0 border-t-[7.5px] border-t-transparent border-l-[15px] border-l-violet border-b-[7.5px] border-b-transparent absolute-center"></div>
            </div>
        </div>
        <div className="block-component pt-[2rem] md:pt-[2.5rem]">
            <div className="flex justify-between items-center">
                <span className={`${inter700.variable} font-inter700 text-2D italic text[1.125rem] leading-[1.375rm] md:text-[1.5rem] md:leading-[1.813rem]`}>noun</span>
                <div className="w-full h-px bg-E9 ml-5"></div>
            </div>
            <div className="pt-[2rem] md:pt-[2.5rem]">
                <p className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6">Meaning</p>
                <ul className="list-image-[url(../public/images/Oval.svg)] pt-[0.25rem] text-[0.938rem] leading-[1.5rem] md:text-[1.125rem]">
                    {wordData.meanings[0].definitions.map(sentence => (
                        <List definition={sentence.definition} synonyms={sentence.synonyms ? sentence.synonyms : ''} antonyms={sentence.antonyms ? sentence.antonyms : ''} />
                    ))}
                </ul>
                {wordData.meanings[0].synonyms.length !== 0 && (
                    <div className="pt-[1.5rem] md:pt-[2rem]">
                        <span className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Synonyms</span>
                        {wordData.meanings[0].synonyms.map(synonym => (
                            <span className={`${inter700.variable} font-inter700 break-all text-violet text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{synonym}{wordData.meanings[0].synonyms.length > 1 && ','}</span>
                        ))}
                    </div>
                )}
                {wordData.meanings[0].antonyms.length !== 0 && (
                    <div className="pt-[1.5rem] md:pt-[2rem]">
                        <span className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Antonyms</span>
                        {wordData.meanings[0].antonyms.map(antonym => (
                            <span className={`${inter700.variable} font-inter700 break-all text-violet text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{antonym}{wordData.meanings[0].antonym.length > 1 && ','}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
        {wordData.meanings[1] && (
            <div className="block-component pt-[2rem] md:pt-[2.5rem]">
                <div className="flex justify-between items-center">
                    <span className={`${inter700.variable} font-inter700 text-2D italic text[1.125rem] leading-[1.375rm] md:text-[1.5rem md:leading-[1.813rem]`}>verb</span>
                    <div className="w-full h-px bg-E9 ml-5"></div>
                </div>
                <div className="pt-[2rem] md:pt-[2.5rem]">
                    <p className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6">Meaning</p>
                    <ul className="list-image-[url(../public/images/Oval.svg)] pt-[0.25rem] text-[0.938rem] leading-[1.5rem] md:text-[1.125rem]">
                        {wordData.meanings[1].definitions.map(sentence => (
                            <List definition={sentence.definition} synonyms={sentence.synonyms ? sentence.synonyms : ''} antonyms={sentence.antonyms ? sentence.antonyms : ''} example={sentence.example ? sentence.example : ''} />
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
  )
}
