import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const DashboardButton = ({ children, to }) => {
    return (
        <Button component={Link} to={to} variant="outlined" color="primary" size="large" fullWidth>
            { children }
        </Button>
    )
}

export default DashboardButton