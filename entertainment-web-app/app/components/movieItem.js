'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './components.module.css'

export default function MovieItem({ type, title, year, category, rating, thumbnail, isBookmarked }) {
    const [imgSrc, setImgSrc] = useState('./assets/loading.gif')
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 })
    const [bookmarked, setBookmarked] = useState('empty')

    useEffect(() => {
        if (typeof window !== "undefined") {
            if(type === 'carousel') {
                if(window.matchMedia("(max-width: 375px)").matches) {
                    setImgSrc(thumbnail.small)
                    setImgSize({width: 240, height: 140})
                } else {
                    setImgSrc(thumbnail.large)
                    setImgSize({width: 470, height: 230})
                }
            } else {
                if (window.matchMedia("(min-width: 1440px)").matches) {
                    setImgSrc(thumbnail.large)
                    setImgSize({width: 220, height: 140})
                } else if(window.matchMedia("(max-width: 375px)").matches) {
                    setImgSrc(thumbnail.small)
                    setImgSize({width: 164, height: 110})
                } else if (window.matchMedia('(max-width: 769px)')) {
                    setImgSrc(thumbnail.medium)
                    setImgSize({width: 220, height: 140})
                }
            }
        }

        if(isBookmarked) setBookmarked('full')
    }, [])

    return (
        <div className={styles.movieItem}>
            <div className={styles.movieBookmark}>
                <div className={styles.movieBookmarkBg}></div>
                <Image className={styles.movieBookmarkImg} src={`/assets/icon-bookmark-${bookmarked}.svg`} width={11.67} height={14} alt='add to bookmark button' />
            </div>
            <div className={styles.movieDescr}>
                <div className={styles.movieInfo}>
                    <p>{year}</p>
                    <div className={styles.dot}></div>
                    <p className={styles.movieCategoryTitle}><Image src={`/assets/icon-category-${category.split(' ')[0].toLowerCase()}.svg`} width={12}  height={12} quality={100} priority={true} alt='movie category'/> <span>{category}</span></p>
                    <div className={styles.dot}></div>
                    <p className={styles.rating}>{rating}</p>
                </div>
                <p className={styles.movieTitle}>{title}</p>
            </div>
            <Image className={styles.img} src={imgSrc.slice(1)} width={imgSize.width} height={imgSize.height} quality={100} priority={true} alt='movie thumbnail' />
        </div>
    )
}
