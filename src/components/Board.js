import React from 'react'
import { Grid } from '@material-ui/core'

const Board = ({ children }) => {
    return (
        <Grid container>{ children }</Grid>
    )
}

export default Board
