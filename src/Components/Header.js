import React, {Component} from 'react';
import './Stylesheets/Header.css';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <div id='menupanel'>
            <Typography color="white" variant="display2" gutterBottom>
                MARCEL KENALY
            </Typography>
                <div id="menuwrapper">
                    <table>
                      <tr>
                        <td></td>
                        <td></td>
                        <td class="clickable">
                            <Link to="/bio"><Typography variant="button" color="inherit" gutterBottom>
                                Career
                            </Typography></Link></td>
                        <td class="clickable">
                            <Link to="/cv"><Typography color="inherit" variant="button" gutterBottom>
                              Bio
                            </Typography></Link></td>
                        <td class="clickable">
                            <Link to="/projects"><Typography color="inherit" variant="button" gutterBottom>
                              Projects
                            </Typography></Link></td>
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
