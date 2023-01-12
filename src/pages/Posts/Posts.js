import classNames from 'classnames/bind';
import _ from 'lodash';
import React from 'react';
import { BiPlus, BiPrinter, BiSpreadsheet, BiUpload } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostModal from '~/components/modals/PostModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import PostsItem from '~/components/partial/PostsItem/PostsItem';
import RealtimeClock from '~/components/partial/RealtimeClock';
import Button from '~/components/shared/buttons/Button';
import { postsService } from '~/services';
import styles from './Posts.module.scss';
const scss = classNames.bind(styles);

class Posts extends React.Component {
    state = {
        dialog: {
            active: false,
        },
        modal: {
            active: false,
        },
        currentPost: {},
        dataPosts: [],
        menu: [],
    };

    componentDidMount() {
        this.handleGetPost();
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
                    title: 'Sửa thông tin bài viết',
                    data: data,
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                modal: {
                    ...prevState.modal,
                    title: 'Thêm bài viết mới',
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
                    message: `Bạn có chắc chắn muốn xóa bài biết ${data.title} `,
                    button: [
                        {
                            title: 'Xác nhận',
                            color: 'error',
                            onClick: () => {
                                this.handleActiveDialog();
                                this.handleDeletePost(data.id);
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
    handleGetPost = async () => {
        try {
            let response = await postsService.GetPosts();
            if (response && response.code === 0) {
                this.setState((prevState) => ({
                    ...prevState,
                    dataPosts: response.result,
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleCreatePost = async (data) => {
        try {
            let response = await postsService.CreatePost(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetPost();
                toast.success('Tạo mới bài viết thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleDeletePost = async (id) => {
        try {
            let response = await postsService.DeletePost(id);
            if (response && response.code === 0) {
                this.handleGetPost();
                toast.success('Xóa bài viết thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    handleUpdatePost = async (data) => {
        try {
            let response = await postsService.UpdatePost(data);
            if (response && response.code === 0) {
                this.handleActiveModal();
                this.handleGetPost();
                toast.success('Cập nhật thông tin thành công!');
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <div className={scss('wrapper')}>
                <div className={scss('title')}>
                    <h6>Quản lý bài viết</h6>
                    <span>{<RealtimeClock />}</span>
                </div>
                <div className={scss('content')}>
                    <ul className={scss('header')}>
                        {this.state.menu.map((item, index) => (
                            <li key={index}>
                                <Button size={'tiny'} color={'white'} onClick={item.onClick}>
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <ul className={scss('body')}>
                        {this.state.dataPosts.map((item, index) => (
                            <li key={index}>
                                <PostsItem
                                    data={item}
                                    handleActiveModal={this.handleActiveModal}
                                    handleActiveDialog={this.handleActiveDialog}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={scss('footer')}>
                        {this.state.modal.active && (
                            <PostModal
                                {...this.state.modal}
                                handleCreatePost={this.handleCreatePost}
                                handleUpdatePost={this.handleUpdatePost}
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
            </div>
        );
    }
}

export default Posts;
