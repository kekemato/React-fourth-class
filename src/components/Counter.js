import React from 'react'

import Paper from './Paper'
import Button from './Button'

class Counter extends React.Component {

    state = {
            number: this.props.startNumber || 0
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })
    resetCounter = () => this.setState( {number: this.props.startNumber || 0})
    multiplyByTwo = () => this.setState({number: this.state.number * 2})
    multiplyByYourself = () => this.setState({number: this.state.number * this.state.number})
    divideByTwo = () => this.setState({number: this.state.number / 2})
    divideByYourself = () => this.setState({number: this.state.number / this.state.number})

    render() {
        return (
            <Paper>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    label={'reset'}
                    onClick={this.resetCounter }
                />
                <Button
                    label={'+'}
                    onClick={ this.incHandler }
                />

                <Button
                    label={'-'}
                    onClick={this.decHandler }
                />

                <Button
                    label={'* 2'}
                    onClick={this.multiplyByTwo }
                />

                <Button
                    label={'* yourself'}
                    onClick={this.multiplyByYourself }
                />

                <Button
                    label={'/ 2'}
                    onClick={this.divideByTwo }
                />

                <Button
                    label={'/ yourself'}
                    onClick={this.divideByYourself }
                />
            </Paper>
        )
    }
}

export default Counter