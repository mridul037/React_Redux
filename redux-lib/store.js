//you can get state by getState meth

import {createStore} from 'redux';
import {updateContact,updateUser} from './action'
import reducer from './reducer';



const store = createStore(reducer);

store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateContact({ name: "mri", number: "888" }));


export default store;
