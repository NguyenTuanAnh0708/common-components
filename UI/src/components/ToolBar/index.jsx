import React from 'react';
import { Toolbar } from 'primereact/toolbar';

import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Rating, TextField, Typography } from '@mui/material';

const ToolBar = () => {
    const startContent = (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
    const centerContent = (
        <>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </>
    )
    const endContent = (
        <>
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
        </>
    )
    return (
        <Toolbar start={startContent} center={centerContent} end={endContent} />
    );
}

export default ToolBar;