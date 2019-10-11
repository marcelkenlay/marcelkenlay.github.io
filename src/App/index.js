import * as React from 'react';
import {Layout} from "antd";
import {Header} from "../Header";
import {Main} from "../Main";
import {LinkedInLink} from "../Footer";
import {withRouter} from 'react-router-dom';

const App = (props) => (
        <Layout style={{background: 'inherit'}}>
            <Layout.Header>
                <Header onSelect={url => props.history.push(url)} selected={props.location.pathname}/>
            </Layout.Header>
            <Layout.Content>
                <Main/>
            </Layout.Content>
            <Layout.Footer>
                <LinkedInLink/>
            </Layout.Footer>
        </Layout>);

export default withRouter(App);
