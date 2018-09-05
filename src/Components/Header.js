import React, {Component} from 'react';
import './Stylesheets/Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div id='menupanel'>
                <h1>Marcel Kenlay</h1>
                <div id="menuwrapper">
                    <table>
                      <tr>
                        <td></td>
                        <td></td>
                        <td class="clickable"><Link to="/bio">Bio</Link></td>
                        <td class="clickable"><Link to="/cv">CV</Link></td>
                        <td class="clickable"><Link to="/projects">Projects</Link></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Header;
