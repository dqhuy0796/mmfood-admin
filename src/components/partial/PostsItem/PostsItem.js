import classNames from 'classnames/bind';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import IconButton from '~/components/shared/buttons/IconButton';
import 'react-toastify/dist/ReactToastify.css';
import styles from './PostsItem.module.scss';

const scss = classNames.bind(styles);

class PostsItem extends React.Component {
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
                <div className={scss('image')}>
                    <img src={this.props.data.imageUrl} alt={this.props.data.title} />
                </div>
                <div className={scss('container')}>
                    <h1>{this.props.data.title}</h1>
                    <p className={scss('overview')}>{this.props.data.overview}</p>
                    <p className={scss('content')}>{this.props.data.content}</p>
                </div>
                <div className={scss('action')}>
                    <IconButton
                        className={scss('edit')}
                        size={'medium'}
                        color={'blur'}
                        onClick={() => this.props.handleActiveModal(this.props.data)}
                    >
                        <BiEditAlt />
                    </IconButton>
                    <IconButton
                        className={scss('delete')}
                        size={'medium'}
                        color={'blur'}
                        onClick={() => this.props.handleActiveDialog(this.props.data)}
                    >
                        <MdDeleteOutline />
                    </IconButton>
                </div>
            </div>
        );
    }
}
export default PostsItem;
