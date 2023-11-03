/* eslint-disable prettier/prettier */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import NewOrderScreen from '../SiteManager/NewOrderScreen';



configure({ adapter: new Adapter() });
it(" request order renders correctly", () => {
    shallow(<NewOrderScreen />);
});



it('order qty check ', () => {
    const NewOrder = shallow(<NewOrderScreen />)
    NewOrder.find('TextInput[keyboardType="number-pad"]').simulate('change', {
      nativeEvent: {
        text: '12334',
      },
    });
    expect(NewOrder.find('TextInput[keyboardType="number-pad"]').prop('value')).toEqual(
      '12334',
    );
});


