import React from 'react'

export default function List({ definition, synonyms, antonyms, example }) {
  return (
    <li className="pl-[0.8rem] pt-[0.813rem] ml-[0.813rem] md:ml-[2.205rem] text-2D first:pt-[1.5rem]">
        { definition }

        {example ? (
            <p className="text-75 text-[0.938rem] leading-[1.5rem] md:text-[1.125rem] md:leading-6 pt-[0.813rem]">{example}</p>
        ) 
        : ''}

        {synonyms.length !== 0 ? 
            (<div className="pb-[1.5rem] md:pb-[1rem] pt-[0.15rem] md:pt-[0.6rem]">
                <span className="text-75 text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Synonyms</span>
                {synonyms.map((synonym, i) => (
                    <a key={i} className={`font-bold break-all text-violet cursor-pointer hover:underline text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{synonym}{synonyms.length > 1 && ','}</a>
                ))}
            </div>) 
        : ''}
        
        {antonyms.length !== 0 ? 
            (<div className="pb-[1rem] md:pb-[1rem] pt-[0.4rem] md:pt-[0.6rem]">
                <span className="text-75 text-2D text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 mr-[0.66rem]">Antonyms</span>
                {antonyms.map((antonym, i) => (
                    <a key={i} className={`font-bold break-all text-violet cursor-pointer hover:underline text-[1rem] leading-[1.188rem] md:text-[1.25rem] md:leading-6 ml-[0.84rem]`}>{antonym}{antonyms.length > 1 && ','}</a>
                ))}
            </div>) 
        : ''}
    </li>
  )
}
