import classNames from 'classnames/bind';
import _ from 'lodash';
import React from 'react';
import { BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductModal from '~/components/modals/ProductModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import RealtimeClock from '~/components/partial/RealtimeClock';
import Button from '~/components/shared/buttons/Button';
import { productService } from '~/services';
import ProductItem from '~/components/partial/ProductItem';
import styles from './Product.module.scss';
const cb = classNames.bind(styles);

class Product extends React.Component {
    state = {
        dialog: {
            active: false,
        },
        modal: {
            active: false,
        },
        currentUser: {},
        data: [],
        menu: [],
    };

    componentDidMount() {
        this.handleGetProducts();
        this.handleMapOptionMenu();
    }
    //init
    handleMapOptionMenu = () => {
        this.setState((prevState) => ({
            ...prevState,
            menu: [
                {
                    id: 1,
                    icon: <BiPlus />,
                    title: 'Thêm mới',
                    onClick: () => this.handleActiveModal(),
                },
                {
                    id: 2,
                    icon: <BiUpload />,
                    title: 'Tải lên từ file',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 3,
                    icon: <BiPrinter />,
                    title: 'In dữ liệu',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 4,
                    icon: <BiSpreadsheet />,
                    title: 'Xuất EXCEL',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 5,
                    icon: <VscFilePdf />,
                    title: 'Xuất PDF',
                    onClick: () => this.handleActiveDialog(),
                },
                {
                    id: 6,
                    icon: <RiDeleteBin5Line />,
                    title: 'Xóa tất cả',
                    onClick: () => this.handleActiveDialog(),
                },
            ],
        }));
    };
    // event handle
    handleActiveModal = (data) => {
        // toggle (open/close) only
        this.setState((prevState) => ({
            ...prevState,
            modal: {
                active: !prevState.modal.active,
            },
        }));
        // map data
        if (data && !_.isEmpty(data)) {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Sửa thông tin sản phẩm',
                    data: data,
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Thêm sản phẩm',
                    data: {},
                },
            }));
        }
    };
    handleActiveDialog = (data) => {
        // toggle (open/close) only
        this.setState((prevState) => ({
            ...prevState,
            dialog: {
                active: !prevState.dialog.active,
            },
        }));
        // map data
        if (data && !_.isEmpty(data)) {
            this.setState((prevState) => ({
                ...prevState,
                dialog: {
                    ...prevState.dialog,
                    title: 'xác nhận xóa',
                    message: `Bạn có chắc chắn muốn xóa sản phẩm "${data.name}"?!`,
                    button: [
                        {
                            title: 'Xác nhận',
                            color: 'error',
                            onClick: () => {
                                this.handleActiveDialog();
                                this.handleDeleteProduct(data.id);
                            },
                        },
                        {
                            title: 'Hủy',
                            color: 'cancel',
                            onClick: () => {
                                this.handleActiveDialog();
                            },
                        },
                    ],
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                dialog: {
                    ...prevState.dialog,
                    title: 'Hệ thống',
                    message: 'Không khả dụng. Vui lòng quay lại sau.',
                },
            }));
        }
    };

    // process api
    handleGetProducts = async () => {
        try {
            let response = await productService.GetProduct();
            if (response && response.code === 0) {
                this.setState((prevState) => ({
                    ...prevState,
                    data: response.result,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleCreateProduct = async (data) => {
        try {
            let response = await productService.CreateProduct(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetProducts();
                toast.success('Tạo mới sản phẩm thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleDeleteProduct = async (id) => {
        try {
            let response = await productService.DeleteProduct(id);
            if (response && response.code === 0) {
                this.handleGetProducts();
                toast.success('Xóa sản phẩm thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleUpdateProduct = async (data) => {
        try {
            let response = await productService.UpdateProduct(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetProducts();
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <div className={cb('wrapper')}>
                <div className={cb('title')}>
                    <h6>Quản lý sản phẩm</h6>
                    <span>{<RealtimeClock />}</span>
                </div>
                <ul className={cb('action')}>
                    {this.state.menu.map((item, index) => (
                        <li key={index}>
                            <Button size={'tiny'} color={'white'} onClick={item.onClick}>
                                <span>{item.icon}</span>
                                <span>{item.title}</span>
                            </Button>
                        </li>
                    ))}
                </ul>
                <div className={cb('body')}>
                    <ProductContainer
                        data={this.state.data}
                        handleActiveModal={this.handleActiveModal}
                        handleActiveDialog={this.handleActiveDialog}
                    />
                    {this.state.modal.active && (
                        <ProductModal
                            {...this.state.modal}
                            handleCreateProduct={this.handleCreateProduct}
                            handleUpdateProduct={this.handleUpdateProduct}
                            handleActiveModal={this.handleActiveModal}
                        />
                    )}

                    {this.state.dialog.active && (
                        <DialogMessage {...this.state.dialog} handleActiveDialog={this.handleActiveDialog} />
                    )}

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        );
    }
}

export default Product;

const ProductContainer = (props) => (
    <ul className={cb('list')}>
        {props.data.map((item, index) => (
            <li key={index}>
                <ProductItem
                    data={item}
                    handleActiveDialog={props.handleActiveDialog}
                    handleActiveModal={props.handleActiveModal}
                />
            </li>
        ))}
    </ul>
);
