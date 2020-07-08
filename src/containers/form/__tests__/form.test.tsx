import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Store, AnyAction } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { FormConnected } from '../form';

describe('Form component', () => {
  const initialState = { form: formReducer };
  const mockStore = configureStore();
  let store: Store<any, AnyAction>;

  beforeAll(() => {
    store = mockStore(initialState);
  });

  it('should renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FormConnected typeSalary="mrot" ndfl salary={0} />
      </Provider>
    );
    expect(wrapper.isEmptyRender()).not.toEqual(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
