import classNames from 'classnames/bind';
import style from '@/styles/blogList.module.scss';
// import { CategoryFilter } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { Section, Pagination, Button } from '@/components';
import { banners } from '@/public/images';
import { BlogCard2, CategoryFilter } from '@/views';
import { categoryFillerAddress, tourTagsFilter, recentPostFake } from '@/public/dataRender';
import { Allblog, Searchblog } from '../api/CallAPI';
import { useState, useEffect } from 'react';


const cx = classNames.bind(style)

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function BlogList() {
    const [showFilterMobile, setShowFilterMobile] = useState(false);
    const [Tag, settag] = useState('Blog');
    const [keyword, setkeyword] = useState('');


    const [Data, setdata] = useState();
    const CallAPI = async () => {
        const response = await (Allblog(Tag, page));
        if (response.status == 200) {
            setdata(response.data.Object);
        }

    }
    const CallSearch = async () => {
        const response = await (Searchblog(keyword));
        if (response.status == 200) {
            setdata(response.data.Object);
        }
        console.log('k', keyword)
    }
    const handleSearch = () => {
        { keyword == '' ? CallAPI() : CallSearch() }

    }

    const [page, setPage] = useState(1)

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;
    useEffect(() => {
        CallAPI();
    }, [page, Tag]);

    useEffect(() => {
        const showFilterMobilef = () => {
            if (showFilterMobile) {

                setShowFilterMobile(false)
            }
        }

        window.addEventListener('scroll', showFilterMobilef)

        return (() => {
            window.removeEventListener('scroll', showFilterMobilef)
        })
    }, [showFilterMobile])

    return (<div className={cx('wrapper')}>
        <BannerIMG className={cx('bannerBlogList')} img={banners.banner2} title='vnxpedia blog list' bg='bg' crumb={{ title: 'BLOG' }} />
        {/* btn Show filterMenu Mobile */}
        {/* <Button className={cx('btnFill')} onClick={() => setShowFilterMobile(!showFilterMobile)}>Filter By</Button> */}

        <Section className={cx('bodyContent')} gapBox={1}>
            <div className={cx('listBlogBody')}>
                {Data && Data.map((d) =>
                    <BlogCard2 className={cx('bodyBlogItem')} data={d} />)
                }
                <Pagination totalPosts={datafa.length} postPerPage={9} setPage={setPage} pageIndex={page} />
            </div>
            <CategoryFilter
                isSearch
                category={categoryFillerAddress}
                recentPost={recentPostFake}
                // archives
                banner
                tourTags={tourTagsFilter}
                className={cx('boxFilter')}
                showFilterMobile={showFilterMobile}
                setvldestination={settag}
                setvltag={settag}
                setinput={setkeyword}
                searchinput={handleSearch}
            />
        </Section>
    </div>);
}

export default BlogList;