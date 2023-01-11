import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminRoutes, publicRoutes } from './routes';
// redux and actions
import { connect } from 'react-redux';
import { login } from '~/redux/actions/authActions';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <route.Layout>
                                            <route.Component />
                                        </route.Layout>
                                    }
                                />
                            );
                        })}
                        {this.props.isLoggedIn &&
                            adminRoutes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <route.Layout>
                                                <route.Component />
                                            </route.Layout>
                                        }
                                    />
                                );
                            })}
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapActionsToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapActionsToProps)(App);
