import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import { GetSocial } from '@/pages/api/CallAPI';
import { GiCheckMark } from 'react-icons/gi';
import { BsFillPrinterFill } from 'react-icons/bs'

const cx = classNames.bind(style);

const Itinerary = ({ description, detail, click }) => {
    const [content, setcontent] = useState(['active', '', '']);
    const [Data, setData] = useState();

    const CallAPI = async () => {
        const response = await GetSocial(5262);
        if (response.status == 200) {
            setData(response.data.Object)
        }
    }
    useEffect(() => {
        CallAPI()
    }, []);

    return (
        <div className={cx('iti-container')}>
            <div className={cx('iti-menu')}>
                <p onClick={() => setcontent(['active', '', ''])} className={cx(content[0])}>ITINERARY</p>
                <p onClick={() => setcontent(['', 'active', ''])} className={cx(content[1])}>PRICE & POLICY</p>
                <p onClick={() => setcontent(['', '', 'active'])} className={cx(content[2])}>TERM & CONDITIONS</p>
            </div>
            {content[0] == 'active' &&
                <div className={cx('iti-main')}>
                    <p className={cx('tour-description')}>
                        {ChangeTextHTML(description)}
                    </p>
                    <div className={cx('tour-detail')}>
                        <p className={cx('title-detail')}>
                            DETAIL ITINERARY
                        </p>
                        <div className={cx('list-detail')}>
                            <div className={cx('space')}></div>
                            {detail.map((d, i) =>
                                <div className={cx('item-day')} key={i}>
                                    <div className={cx('number-day')}>{d.Title.split(':')[0]}</div>
                                    <div className={cx('main-day')}>
                                        <p className={cx('title-day')}>{d.Title.split(':')[1]}</p>
                                        <p className={cx('text-day')} dangerouslySetInnerHTML={{
                                            __html: d.Description,
                                        }}></p>
                                        {d.Image && <img src={`https://vnxpedia.3i.com.vn${d.Image}`} alt="tour Image" />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <p>If you want to design your own tour for your trip to be unique, don't hesitate to share it with us!</p> */}
                    <div className={cx('flex')}>
                        <button className={cx('btn-design')} onClick={() => click()}>DESIGN YOUR TOUR</button>
                        <button className={cx('btn-design')} onClick={() => click(2)}>SHARE WITH FRIEND <GiCheckMark className={cx('icon')} /></button>
                        <button className={cx('btn-design')}>In <BsFillPrinterFill /> </button>
                        {/* <div className={cx('btn-book')} onClick={() => click(2)}><p>SHARE WITH FRIEND</p> <GiCheckMark /> </div> */}
                        {/* <AiOutlinePrinter className={cx('icon1')} /> */}
                    </div>

                </div>
            }
            {content[1] == 'active' && Data &&
                <div className={cx('iti-main-social')} dangerouslySetInnerHTML={{ __html: Data[0].full_text }}>

                </div>
            }
        </div>
    )
}

export default Itinerary