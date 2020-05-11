import React from 'react';
import './App.css';
import Button from "./componenets/Buttons";
import Display from "./componenets/Display";
import Settings from "./componenets/Settings";
import {connect} from "react-redux";
import {
    FunctionResetNumberAC,
    FunctionUpNumberAC,
    onMaxValueAC,
    onMinValueAC,
    SettingsValueAC
} from "./componenets/Store";


class App extends React.Component {

//  при переходе на Redux убираем локальный state,saveState, restoreState,componentDidMount
    // state = {
    //     maxNumber: 0,
    //     displayNumber: "",
    //     minNumber: 0,
    //     disableClick: true,
    //     disableReset: true,
    //     disableSettings: true
    // };

    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("counter", stateAsString);
    // };
    //
    // restoreState = () => {
    //     let stateAsString = localStorage.getItem("counter");
    //     if (stateAsString) {
    //         let state = JSON.parse(stateAsString);
    //         this.setState(state)
    //     }
    // };
    // componentDidMount = () => {
    //     this.restoreState()
    // };

    // считываем max value
    onMaxValue = (e) => {

        this.props.onMaxValue(e);

        // вся логика переносится в Redux
        // if (+e.currentTarget.value > 0
        //     && +e.currentTarget.value !== this.state.minNumber
        //     && this.state.minNumber < this.state.maxNumber + 1
        // ) {
        //     this.setState({
        //             maxNumber: +e.currentTarget.value,
        //             displayNumber: "enter values and press Set",
        //             disableSettings: false,
        //             disableClick: true,
        //             disableReset: true
        //
        //         }, () => {
        //             this.saveState()
        //         }
        //     )
        // } else {
        //     this.setState({
        //             maxNumber: +e.currentTarget.value,
        //             disableSettings: true,
        //             disableClick: true,
        //             disableReset: true
        //         }, () => {
        //             this.saveState()
        //         }
        //     )
        // }
    };
    // считываем min value
    onMinValue = (e) => {

        this.props.onMinValue(e);

        // вся логика переносится в Redux
        // if (+e.currentTarget.value > 0
        //     && +e.currentTarget.value !== this.state.maxNumber
        //     && this.state.minNumber < this.state.maxNumber
        // ) {
        //     this.setState({
        //             minNumber: +e.currentTarget.value,
        //             displayNumber: "enter values and press SET",
        //             disableSettings: false,
        //             disableClick: true,
        //             disableReset: true
        //         }, () => {
        //             this.saveState()
        //         }
        //     )
        // } else {
        //     this.setState({
        //             minNumber: +e.currentTarget.value,
        //             disableSettings: true,
        //             disableClick: true,
        //             disableReset: true
        //         }, () => {
        //             this.saveState()
        //         }
        //     )
        // }
    };

    //передача значения на дисплей
    SettingsValue = (e) => {
        this.props.SettingsValue(e);

        // вся логика переносится в Redux
        // this.setState({
        //     displayNumber: this.state.minNumber,
        //     disableClick: false,
        //     disableReset: false,
        //     disableSettings: true
        // }, () => {
        //     this.saveState()
        // })
    };

    FunctionUpNumber = (e) => {

        this.props.FunctionUpNumber(e);

        // вся логика переносится в Redux
        // if (this.state.displayNumber < this.state.maxNumber) {
        //     this.setState({displayNumber: this.state.displayNumber + 1},
        //
        //         () => {
        //             this.saveState()
        //         })
        // }
        // if (this.state.displayNumber + 1 === this.state.maxNumber) {
        //     this.setState({
        //         disableClick: true
        //     }, () => {
        //         this.saveState()
        //     })
        // }
    };

    FunctionResetNumber = (e) => {
        this.props.FunctionResetNumber(e);

       // вся логика переносится в Redux
       //  this.setState({
       //      disableClick: false,
       //      displayNumber: this.state.minNumber
       //  }, () => {
       //      this.saveState()
       //  })
    };

    render = () => {
        return (
            <div className="App">

                <Settings onMaxValue={this.onMaxValue}
                          onMinValue={this.onMinValue}
                          maxNumber={this.props.state.maxNumber}
                          minNumber={this.props.state.minNumber}
                          SettingsValue={this.SettingsValue}
                          checkDisabled={this.props.state.disableSettings}
                />

                <div className="Counter">

                    <Display displayNumber={this.props.state.displayNumber}
                             MaxNumber={this.props.state.maxNumber}
                             MinNumber={this.props.state.minNumber}
                    />

                    <div className='LocationButtons'>
                        <Button
                            onClickFunc={this.FunctionUpNumber}
                            title="Inc"
                            checkDisabled={this.props.state.disableClick}/>
                        <Button
                            onClickFunc={this.FunctionResetNumber}
                            title="Reset"
                            checkDisabled={this.props.state.disableReset}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMaxValue: (e) => {
            let action = onMaxValueAC(e);
            dispatch(action)
        },
        onMinValue: (e) => {
            let action = onMinValueAC(e);
            dispatch(action)
        },
        SettingsValue: (e) => {
            let action = SettingsValueAC(e);
            dispatch(action)
        },
        FunctionUpNumber: (e) => {
            let action = FunctionUpNumberAC(e);
            dispatch(action)
        },
        FunctionResetNumber: (e) => {
            let action = FunctionResetNumberAC(e);
            dispatch(action)
        },

    }

};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
