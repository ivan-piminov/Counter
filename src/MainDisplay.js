import React from 'react';
import './App.css';
import Button from "./componenets/Buttons";
import Display from "./componenets/Display";
import Settings from "./componenets/Settings";


class MainDisplay extends React.Component {


    render = () => {
        // кнопка инкремент
        let disableClick = this.props.state.displayNumber === this.props.state.maxNumber
            || this.props.state.maxNumber < 0
            || this.props.state.minNumber < 0
            || this.props.state.maxNumber === this.props.state.minNumber
            || this.props.state.maxNumber < this.props.state.minNumber;


        //кнопка сброса
        let disableReset = this.props.state.displayNumber === this.props.state.minNumber
            || this.props.state.maxNumber < 0
            || this.props.state.minNumber < 0
            || this.props.state.maxNumber === this.props.state.minNumber
            || this.props.state.maxNumber < this.props.state.minNumber;


        return (
                <div className="Counter">

                    <Display displayNumber={this.props.state.displayNumber}
                             MaxNumber={this.props.state.maxNumber}
                             MinNumber={this.props.state.minNumber}
                    />

                    <div className='LocationButtons'>
                        <Button
                            onClickFunc={this.FunctionUpNumber}
                            title="Inc"
                            checkDisabled={disableClick}/>
                        <Button
                            onClickFunc={this.FunctionDownNumber}
                            title="Reset"
                            checkDisabled={disableReset}/>
                    </div>
                </div>

        );
    }
}

export default MainDisplay;
