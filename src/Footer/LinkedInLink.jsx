import React from 'react';
import Button from '@material-ui/core/Button/index';
import './LinkedInLink.css'

export function LinkedInLink() {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <Button href="https://www.linkedin.com/in/marcel-kenlay" style={{ background: '#eee' }}>
                View my LinkedIn page
            </Button>
        </div>);
}