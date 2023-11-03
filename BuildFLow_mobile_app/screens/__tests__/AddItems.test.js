/* eslint-disable prettier/prettier */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import AddItems from '../Supplier/AddItems';



configure({ adapter: new Adapter() });
it(" request order renders correctly", () => {
    shallow(<AddItems />);
});



it('if supplier added item price check ', () => {
    const NewOrder = shallow(<AddItems />)
    NewOrder.find('TextInput[keyboardType="number-pad"]').simulate('change', {
      nativeEvent: {
        text: '2000',
      },
    });
    expect(NewOrder.find('TextInput[keyboardType="number-pad"]').prop('value')).toEqual(
      '2000',
    );
});


