import { useState, useEffect } from 'react';

import { gettingRate } from '../gettingRate';

import Block from './Block';

const Convert = () => {
  const [firstCurrency, setFirstCurrency] = useState('UAH');
  const [secondCurrency, setSecondCurrency] = useState('USD');
  const [firstPrice, setFirstPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(0);

  const [rates, setRates] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await gettingRate();
      setRates(res.conversion_rates);
    };
    getData();
  }, []);

  const onChangeFirstPrice = (value) => {
    const price = value / rates[firstCurrency];
    const result = price * rates[secondCurrency];
    setSecondPrice(result.toFixed(2));
    setFirstPrice(value);
  };

  const onChangeSecondPrice = (value) => {
    const price = rates[firstCurrency] / rates[secondCurrency];
    const result = price * value;
    setFirstPrice(result.toFixed(2));
    setSecondPrice(value);
  };

  useEffect(() => {
    onChangeFirstPrice(firstPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCurrency]);

  useEffect(() => {
    onChangeSecondPrice(secondPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondCurrency]);

  return (
    <div className="convert">
      <Block
        value={firstPrice}
        currency={firstCurrency}
        onChangeCurrency={setFirstCurrency}
        onChangeValue={onChangeFirstPrice}
      />
      <Block
        value={secondPrice}
        currency={secondCurrency}
        onChangeCurrency={setSecondCurrency}
        onChangeValue={onChangeSecondPrice}
      />
    </div>
  );
};

export default Convert;
