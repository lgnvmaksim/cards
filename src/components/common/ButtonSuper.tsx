import React from 'react';
import Button from '@mui/material/Button';

type ButtonSuperType ={
    variant?:  "text" | "outlined" | "contained" | undefined
    name: string
    style?:{}
    sx?:{}
}

export const ButtonSuper = ({variant, name, style, sx}: ButtonSuperType) => {
    return <Button  variant={variant} style={style} sx={sx}>
        {name}
    </Button>
}