import classNames from 'classnames/bind';
import React from 'react';
import styles from './Footer.module.scss';
import dathongbao from '~/assets/images/dathongbao.png';
import { RiDirectionLine } from 'react-icons/ri';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const cb = classNames.bind(styles);

class Footer extends React.Component {
    render() {
        return (
            <footer className={cb('footer')}>
                <div className={cb('wrapper')}>
                    <Directions />
                    <MoreInfomation />
                </div>
                <Copyright />
            </footer>
        );
    }
}
const FooterSubtitle = (props) => (
    <h2 className={cb('title')}>
        <span>{props.text}</span>
    </h2>
);
class Directions extends React.Component {
    state = {
        directions: [
            {
                name: 'MMfood cơ sở 1',
                address: 'Số 38 Nguyễn Phong Sắc, Cầu Giấy, Hà Nội',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 2',
                address: '60 Nguyễn Gia Thiều, TP Bắc Ninh, Bắc Ninh',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 3',
                address: '331 Trần Phú, Đình Bảng, Từ Sơn, Bắc Ninh',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 4',
                address: 'Khu Đô Thị Mới, TT Chờ, Yên Phong, Bắc Ninh',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 5',
                address: '33 Ngô Gia Tự, TP. Bắc Giang, Bắc Giang',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 6',
                address: '107 Hàng Đồng, TP. Nam Định, Nam Định',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 7',
                address: '172 Tuệ Tĩnh, Khu Đô Thị Mới Tuệ Tĩnh, Tp. Hải Dương',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 8',
                address: 'Lô 24 Lê Quý Đôn kéo dài, Phường Kỳ Bá, Tp. Thái Bình',
                phone: '1900 1009',
                ext: '204208',
            },
            {
                name: 'MMfood cơ sở 9',
                address: '78 Phan Đình Phùng, phường Đồng Quan, Tp Thái Nguyên',
                phone: '1900 1009',
                ext: '204208',
            },
        ],
    };
    render() {
        return (
            <div className={cb('directions')}>
                <FooterSubtitle text={'Hệ thống cửa hàng'} />
                <ul>
                    {this.state.directions.map((item, index) => (
                        <li key={index}>
                            <DirectionItem data={item} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
const DirectionItem = (props) => (
    <Link className={cb('direction-item')}>
        <div className={cb('icon')}>
            <RiDirectionLine />
        </div>
        <div className={cb('content')}>
            <p className={cb('address')}>
                <span>{props.data.name} - </span>
                <span>{props.data.address}</span>
            </p>
            <p className={cb('phone')}>
                <span>
                    Điện thoại: {props.data.phone} | Ext.{props.data.ext}
                </span>
            </p>
        </div>
    </Link>
);
const MoreInfomation = (props) => (
    <div className={cb('more')}>
        <ul className={cb('contact')}>
            <li>
                <FooterSubtitle text={'Đăng ký nhận khuyến mãi'} />
            </li>
            <li>
                <form className={cb('input')}>
                    <input type="text" placeholder="nhập địa chỉ email" />
                    <button type="submit">Gửi</button>
                </form>
            </li>
            <li>
                <p>Chính sách đặt hàng</p>
            </li>
            <li>
                <p>Chính sách thông tin bảo mật</p>
            </li>
        </ul>
        <ul className={cb('about')}>
            <li>
                <FooterSubtitle text={'Liên hệ với chúng tôi'} />
            </li>
            <li className={cb('social-media')}>
                <BsFacebook className={cb('icon')} />
                <BsYoutube className={cb('icon')} />
                <BsTwitter className={cb('icon')} />
                <BsInstagram className={cb('icon')} />
            </li>
            <li className={cb('image')}>
                <img src={dathongbao} alt="đã thông báo bộ công thương" />
            </li>
        </ul>
    </div>
);
const Copyright = (props) => (
    <p className={cb('copyright')}>
        <span>© {new Date().getFullYear()} Copyright MMFood Co., Ltd</span>
    </p>
);

export default Footer;
