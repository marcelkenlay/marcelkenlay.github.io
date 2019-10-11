import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export class Header extends Component {
    render() {
        return (
            <div id='menupanel'>
            <Typography color="white" variant="display2" gutterBottom>
                MARCEL KENLAY
            </Typography>
                <div id="menuwrapper">
                    <table>
                      <tr>
                        <td className="clickable">
                            <Link to="/cv">
                                <Typography color="inherit" variant="button" gutterBottom>
                                    CV
                                </Typography>
                            </Link>
                        </td>
                        <td className="clickable">
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