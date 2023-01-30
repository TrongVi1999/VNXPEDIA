import React, { useState } from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/wayToTravel.module.scss';
import IMG from '@/public/images/tour1.jpg';

import Tourcard2 from '@/views/Tourcard/Tourcard2';
import Tourcard1 from '@/views/Tourcard/Tourcard1';

import { Section, Title, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';


const cx = classNames.bind(style);

const fakeData = [
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },
    {
        img: IMG,
        title: 'Ha long bay day cruise - paradise explore',
        rate: 4.7,
        ratecount: 100,
        book: 999,
        long: 15,
        price: 3000,
        sale: 50,
        destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
        highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
    },

]

const index = () => {

    const [page, setPage] = useState(1)


    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} />

            <Title text={'luxury tour'} align={'center'} className={cx('titleTravel')} />
            <Section maxWidth={1170}>
                <div className={cx('boxFilter')}>

                </div>
                <Tourcard2 data={fakeData[0]} />
            </Section>

            <Section maxWidth={1170} isWrap gapBox={3.2}>
                {
                    fakeData.slice(firstIndex, lastIndex).map((data, index) => (
                        <Tourcard1 data={data} key={index} />
                    ))
                }

            </Section>
            <Pagination totalPosts={fakeData.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default index