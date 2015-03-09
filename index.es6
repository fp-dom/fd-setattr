import {curry3} from 'fj-curry'

let _setAttr = (name, value, elem) => 
  elem.setAttribute(name,value);

export default curry3(_setAttr);
