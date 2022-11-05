import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import classNames from 'classnames/bind';
import TransparentButton from '~/components/shared/TransparentButton';
import React from 'react';
import styles from './Home.module.scss';
const cb = classNames.bind(styles);

function Home() {
    const contents = [
        {
            image: 'https://phuclong.com.vn/uploads/post/20649d183ca5f1-bannertrangchu.jpg',
            title: 'TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ',
            content:
                'Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và cà phê. Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa.',
        },
        {
            image: 'https://phuclong.com.vn/uploads/post/024b7d5e73bbb2-8ed98f521583690431954887e772tuyendung1.jpg',
            title: 'ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT',
            content:
                'Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng tạo.',
        },
        {
            image: 'https://phuclong.com.vn/uploads/post/024b7d5e73bbb2-8ed98f521583690431954887e772tuyendung1.jpg',
            title: 'ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT',
            content:
                'Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng tạo.',
        },
        {
            image: 'https://phuclong.com.vn/uploads/post/024b7d5e73bbb2-8ed98f521583690431954887e772tuyendung1.jpg',
            title: 'ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT',
            content:
                'Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành dịch vụ năng động và sáng tạo.',
        },
    ];
    return (
        <>
            <Header />
            <div className={cb('home')}>
                <Banner />
                <div className={cb('main')}>
                    <div className={cb('background')}></div>
                    <div className={cb('wrapper')}>
                        {contents.map((item, index) => (
                            <ContentSection key={index} title={item.title} image={item.image} content={item.content} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
const Banner = (props) => (
    <div className={cb('img-bg')}>
        <img src="https://phuclong.com.vn/uploads/banner/4b9491980fcdae-traolong1.jpg" alt="" />
    </div>
);

const ContentSection = (props) => (
    <div className={cb('content-section')}>
        <div className={cb('image')}>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
        </div>
        <div className={cb('contents')}>
            <h3 className={cb('title')}>{props.title}</h3>
            <p className={cb('text')}>{props.content}</p>
            <div className={cb('fixed-left')}>
                <TransparentButton>
                    <span>Xem thêm</span>
                </TransparentButton>
            </div>
        </div>
    </div>
);

export default Home;
