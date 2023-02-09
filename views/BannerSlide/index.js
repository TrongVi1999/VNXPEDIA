import classNames from 'classnames/bind';
import style from './bannerSlide.module.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper';
import Link from 'next/link';
import Banner from './Banner';
import { Input, Button } from '@/components';
import { CiStar } from 'react-icons/ci';
import { MdOutlinePlace } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import { categoryFillerAddress } from '@/public/dataRender';
import { useApppContext } from '@/pages/_app';

const cx = classNames.bind(style);

function BannerSlide({ titleBanner, textTop, textBottom, imgBanner, notSearch, className, classNameTitle }) {

    const CT = useApppContext();


    const [ip1, setip1] = useState('');
    const [ip2, setip2] = useState();
    const [list1, setlist1] = useState([]);
    const [show1, setshow1] = useState(true)
    const handleChange1 = (e) => {
        setip1(e.targer.value);
    }

    useEffect(() => {
        { show1 && ip1 != '' ? setlist1(categoryFillerAddress.elements.filter(d => d.name.toLowerCase().replace(' ', '').includes(ip1.toLowerCase().replace(' ', '')))) : setlist1([]) }
        console.log('loca', CT.loca)

    }, [ip1])
    console.log(list1);

    return (
        <>
            <Swiper
                modules={[EffectFade, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className={cx('wrapper', { [className]: className })}
            >
                {imgBanner?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Banner className={cx('bannerMain')} image={img} />
                    </SwiperSlide>
                ))}
                <div className={cx('sheaderBox')}>
                    {
                        textTop && <p className={cx('text')}>{textTop}</p>
                    }
                    <h1 className={cx('titleHome', { [classNameTitle]: classNameTitle })}>{titleBanner}</h1>
                    {
                        textBottom && <p className={cx('textBottom')}>{textBottom}</p>
                    }
                    {
                        notSearch ||
                        <div className={cx('boxSearch')}>
                            <div className={cx('boxSearch-item')}>
                                <MdOutlinePlace />
                                <div className={cx('boxSearch-ip')}>
                                    <input type='text' className={cx('input')} placeholder='Place' onChange={(e) => {
                                        setshow1(true)
                                        setip1(e.target.value)
                                    }} value={ip1}></input>
                                    {show1 &&
                                        <div className={cx('list1')}>
                                            {list1.map(d =>
                                                <p onClick={() => { setshow1(false); setip1(d.name); setlist1([]) }}>{d.name}</p>)}
                                        </div>
                                    }
                                </div>


                            </div>
                            <div className={cx('boxSearch-item')}>
                                <CiStar />
                                <div className={cx('boxSearch-ip')}>
                                    <input type='text' className={cx('input')} placeholder="Travel Style" onChange={(e) => setip1(e.target.value)}></input>
                                </div>
                            </div>

                            <Link href={`/destination/VietNamdestination=${ip1}`} className={cx('button')} onClick={() => CT.setloca(ip1)}>Search Tour </Link>
                        </div>
                    }
                </div>
            </Swiper>
        </>
    );
}

export default BannerSlide;
