'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function MovieItem({ title, year, category, rating, thumbnail }) {
    const [imgSrc, setImgSrc] = useState('./assets/loading.gif')
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (typeof window !== "undefined") {
            if(window.matchMedia("(max-width: 375px)").matches) {
                setImgSrc(thumbnail.small)
                setImgSize({width: 470, height: 230})
            } else {
                setImgSrc(thumbnail.large)
                setImgSize({width: 240, height: 140})
            }
        }
    }, [])

    return (
        <div>
            <Image src={imgSrc.slice(1)} width={imgSize.width} height={imgSize.height} alt='movie thumbnail' />
        </div>
    )
}
