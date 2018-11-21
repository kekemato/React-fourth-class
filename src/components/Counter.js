import React from 'react'


import Button from './Button'

class Counter extends React.Component {

    state = {
            number: this.props.startNumber
    }

    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    label={'+'}
                    onClick={this.incHandler}
                />

                <Button
                    label={'-'}
                    onClick={() => this.setState({ number: this.state.number - 1 })}
                />
            </div>
        )
    }
}

export default Counter