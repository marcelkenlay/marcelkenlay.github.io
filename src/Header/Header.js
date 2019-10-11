import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    render() {
        return (
            <div id='menupanel'>
            <Typography color="white" variant="display2" gutterBottom>
                MARCEL KENLAY
            </Typography>
                <div id="menuwrapper">
                    <table>
                      <tr>
                        <td class="clickable">
                            <Link to="/cv">
                                <Typography color="inherit" variant="button" gutterBottom>
                                    CV
                                </Typography>
                            </Link>
                        </td>
                        <td class="clickable">
                            <Link to="/projects">
                                <Typography color="inherit" variant="button" gutterBottom>
                                    Projects
                                </Typography>
                            </Link>
                        </td>
                      </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Header;
