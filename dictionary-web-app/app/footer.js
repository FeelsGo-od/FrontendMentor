import React from 'react'

export default function Footer() {
  return (
    <footer className="px-10 md:px-[2.5rem] pt-[2rem] mxl:px-[22rem] pb-[5.313rem] md:pb-[7.375rem] mxl:pb-[7.75rem]">
        <div className="w-full bg-E9 h-px"></div>
        <ul className="flex flex-wrap md:items-center pt-[1.5rem]">
        <li className="text-75 text-[0.875rem] leading-[1.375rem] underline">Source</li>
        <li className="w-full md:w-auto md:ml-[1.25rem]"><a href="/" className="link-red break-all underline text-2D text-[0.875rem] leading-[1.063rem]">https://en.wiktionary.org/wiki/keyboard</a></li>
        </ul>
    </footer>
  )
}
