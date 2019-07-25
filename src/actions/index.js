import {fetchName} from '../api/json'
const sayHello = (name) => ({
  type: "HELLO_REACT",
  name
})

const getName = async (dispatch) =>  {
  try {
    const name = await fetchName()
    dispatch(sayHello(name));
  } catch (error) {
    console.error(error);
    //dispatch(manageError);
  }
}

export { sayHello, getName }