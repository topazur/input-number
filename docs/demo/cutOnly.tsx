/* eslint no-console:0 */
import React from 'react';
import InputNumber from 'rc-input-number';
import '../../assets/index.less';

export default () => {
  const [value, setValue] = React.useState<string | number>(null);
  const [cutOnly, setCutOnly] = React.useState(true);
  const [stringMode, setStringMode] = React.useState(false);
  const [precision, setPrecision] = React.useState<string>('2');
  const [decimalSeparator, setDecimalSeparator] = React.useState<string>(',');

  return (
    <div style={{ margin: 10 }}>
      <InputNumber
        aria-label="Number input example to demonstration custom precision value"
        style={{ width: 100 }}
        value={value}
        onChange={(newValue) => {
          console.log('onChange:', newValue);
          setValue(newValue);
        }}
        precision={Number(precision)}
        cutOnly={cutOnly}
        decimalSeparator={decimalSeparator}
      />
      <div style={{ marginTop: 32 }}>
        <label>
          <input
            type="checkbox"
            checked={cutOnly}
            onChange={() => {
              setCutOnly(!cutOnly);
            }}
          />
          cutOnly
        </label>
        <label>
          <input
            type="checkbox"
            checked={stringMode}
            onChange={() => {
              setStringMode(!stringMode);
            }}
          />
          String Mode
        </label>
      </div>
      <div>
        <label>
          precision:
          <input type="number" onChange={(e) => setPrecision(e.target.value)} value={precision} />
        </label>
        <label>
          decimalSeparator:
          <input value={decimalSeparator} onChange={(e) => setDecimalSeparator(e.target.value)} />
        </label>
      </div>
    </div>
  );
};
