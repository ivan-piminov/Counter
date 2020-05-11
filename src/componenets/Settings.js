import React from 'react';
import "./Settings.css";
import Button from "./Buttons";


class Settings extends React.Component {


    render = () => {

        let errorClass = this.props.maxNumber <= this.props.minNumber
        || this.props.maxNumber < 0
        || this.props.minNumber < 0 ? 'error' : '';

        return (
            <div className='Settings'>
                <div className='Visual'>
                    <span>max value:</span>
                    <input
                        className={errorClass}
                        onChange={this.props.onMaxValue}
                        type="number"
                        placeholder='Введите число'
                        value={this.props.maxNumber}
                    />
                </div>
                <div className='Visual'>
                    <span>start value:</span>
                    <input
                        className={errorClass}
                        onChange={this.props.onMinValue}
                        type="number"
                        placeholder='Введите число'
                        value={this.props.minNumber}
                    />
                </div>
                <Button onClickFunc={this.props.SettingsValue}
                        title="Set"
                        checkDisabled={this.props.checkDisabled}
                />
            </div>
        )
    }
}

export default Settings;
