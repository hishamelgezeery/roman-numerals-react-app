import { Button, Form, Alert } from "react-bootstrap";
import InputComponent from "../../Components/InputField/index";
import { fromRoman, toRoman } from "../../Utils/RomanNumerals";
import { useEffect, useState } from "react";
import styles from "./Converter.module.css";

const CoverterContainer = () => {
  //state variables
  const [decimalNumber, setDecimalNumber] = useState("");
  const [romanNumeralsString, setRomanNumeralsString] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  //
  useEffect(() => {
    if (error) setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decimalNumber, romanNumeralsString]);

  //event handlers
  const onRomanNumeralInputChange = (e) =>
    setRomanNumeralsString(e.target.value);

  const onDecimalInputChange = (e) => setDecimalNumber(e.target.value);

  //custom functions
  const onRomanNumeralsConvert = () => {
    setError(null);
    try {
      setOutput(romanNumeralsString + ": " + fromRoman(romanNumeralsString));
    } catch (e) {
      setError(e.message);
      console.error("roman exception", e.message);
    }
  };

  const onDecimalNumbersConvert = () => {
    setError(null);
    try {
      setOutput(decimalNumber + ": " + toRoman(decimalNumber));
    } catch (e) {
      setError(e.message);
      console.error("decimal exception", e.message);
    }
  };

  const resetFields = () => {
    setError(null);
    setDecimalNumber("");
    setRomanNumeralsString("");
    setOutput("");
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <h1 className={styles.centerAlign}>Roman Numerals converter</h1>
          {error && <Alert variant={"danger"}>{error}</Alert>}
          <Form>
            <div className={`row ${styles.inputsMargin}`}>
              <InputComponent
                labelText="Roman Number"
                withButton
                buttonText="Convert"
                onButtonClick={onRomanNumeralsConvert}
                onInputChange={onRomanNumeralInputChange}
                value={romanNumeralsString}
              />
            </div>
            <div className={`row ${styles.inputsMargin}`}>
              <InputComponent
                labelText="Decimal Number"
                withButton
                buttonText="Convert"
                onButtonClick={onDecimalNumbersConvert}
                onInputChange={onDecimalInputChange}
                value={decimalNumber}
              />
            </div>

            <div className={`row ${styles.inputsMargin}`}>
              <div className="col-sm-3">
                <label>Calculation</label>
              </div>
              <div className="col-sm-9">
                <textarea
                  rows={4}
                  className={styles.fullWidth}
                  value={output}
                  readOnly
                />
              </div>
              <div className={`offset-sm-3 ${styles.resetContainerStyle}`}>
                <Button variant="outline-secondary" onClick={resetFields}>
                  RESET
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <div className="col-sm-12 col-md-7  d-flex align-items-center">
          <img
            alt="Roman Numerals"
            src={process.env.PUBLIC_URL + "/roman-numerals.jpeg"}
            className={styles.imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverterContainer;
