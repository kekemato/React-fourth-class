import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

const Button = (props) => (
    <RaisedButton
        label="Kliknij mnie!"
        secondary={true}
        style={style}
        onClick={props.onClick}
    />
)

export default Button