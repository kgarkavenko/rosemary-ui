import React, {Component} from 'react';
import classNames from 'classnames';

import {isDefined} from '../../util/utils';

const PROPERTY_TYPES = {
    error: React.PropTypes.string,
    touched: React.PropTypes.bool,
    valid: React.PropTypes.bool,
    label: React.PropTypes.string
};
const DEFAULT_PROPS = {
};

class FormField extends Component {

    constructor(props) {
        super(props);
    }

    getMessage() {
        let style = classNames({
            'form-field__error-msg': this.props.error
        });

        return (
            this.props.error && !this.isValid() ?
                <span className={style}>{this.props.error}</span> : null
        );
    }

    isValid() {
        if (isDefined(this.props.touched) && !this.props.touched) {
            return true;
        }
        return this.props.valid;
    }

    render() {
        let className = classNames(this.props.colClass, {
            'form-field': true,
            'form-field-error': !this.isValid()
        });

        const control = React.cloneElement(React.Children.only(this.props.children), {
            onChange: this.props.onChange,
            onBlur: this.props.onBlur,
            value: this.props.value
        });

        return (
            <div className={className}>
                <label className="form-field__label">{this.props.label}</label>

                <div className="form-field__control">
                    {control}
                </div>
                {this.getMessage()}
            </div>

        );
    }
}

FormField.propTypes = PROPERTY_TYPES;
FormField.defaultProps = DEFAULT_PROPS;

export default FormField;
