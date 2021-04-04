import { Component } from 'react'

export interface InputFieldProps {
 /**
 * The label text of the input field
 */
 labelText: String;
 /**
 * Boolean to render button with the input field
 */
 withButton: Boolean;
 /**
 * The text of the button
 */
 buttonText: String;
 /**
 * The event handler for button onClick event
 */
 onButtonClick: Function;
 /**
 * The event handler for input field text change event
 */ 
 onInputChange: Function;
 /**
 * The text value of the input field
 */ 
 value: String;
}

export default class InputField extends Component<InputFieldProps> { }
