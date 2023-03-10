import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostModal from '~/components/modals/PostModal';
import DialogMessage from '~/components/partial/DialogMessage/DialogMessage';
import RealtimeClock from '~/components/partial/RealtimeClock';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
// redux and actions
import { connect } from 'react-redux';
import { login } from '~/redux/actions/authActions';
//style
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';
const scss = classNames.bind(styles);

class Dashboard extends React.Component {
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
    render() {
        return (
            <div className={scss('wrapper')}>
                <div className={scss('title')}>
                    <h6>Bảng điều khiển</h6>
                    <span>{<RealtimeClock />}</span>
                </div>
                <div className={scss('content')}>
                    <ul className={scss('header')}></ul>
                    <div className={scss('body')}>
                        <ul className={scss('chart-container')}>
                            <li>
                                <BarChart />
                            </li>
                            <li>
                                <LineChart />
                            </li>
                            <li>
                                <DoughnutChart />
                            </li>
                        </ul>
                    </div>
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
});

const mapActionsToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
