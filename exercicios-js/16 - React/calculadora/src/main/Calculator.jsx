import React, { Component } from 'react'
import './Calculator.css'

import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndex: 0
}

export default class Claculador extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.currentIndex === 0) {
            this.setState({
                clearDisplay: true,
                operation,
                currentIndex: 1
            })
        } else {
            const equals = operation === '=';

            const currentOperation = this.state.operation;

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        // não permite dois pontos

        if (n === '.' && this.state.displayValue.match(/\./)) {
            return
        }

        // só limpa o display se houver apenas 0 ou usar o botão AC
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        // se houver algum valor no display, ele seleciona esse valor
        const currentValue = clearDisplay ? '' : this.state.displayValue

        // concatena os números
        const displayValue = currentValue.concat(n)

        // altera o objeto state
        this.setState({
            displayValue,
            clearDisplay: false
        })


        // se for numérico
        if (n !== '.') {
            const idx = this.state.currentIndex
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[idx] = newValue


            this.setState({ values })
        }

    }

    render() {

        return (
            <div className='calculador'>
                <Display value={this.state.displayValue} />
                <Button label="AC" triple
                    click={this.clearMemory}
                />

                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" operation click={this.setOperation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" operation click={this.setOperation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" operation click={this.setOperation} />
                <Button label="0" double click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <Button label="=" operation click={this.setOperation} />
            </div>
        );
    }
}