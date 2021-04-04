import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const InputField = ({
  labelText,
  withButton,
  buttonText,
  onButtonClick,
  onInputChange,
  value,
}) => {
  return (
    <>
      <div className="col-sm-3">
        <label>{labelText}</label>
      </div>
      <div className="col-sm-9">
        <InputGroup>
          <FormControl onInput={onInputChange} value={value} />
          {withButton && (
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={onButtonClick}>
                {buttonText}
              </Button>
            </InputGroup.Append>
          )}
        </InputGroup>
      </div>
    </>
  );
};

export default InputField;
