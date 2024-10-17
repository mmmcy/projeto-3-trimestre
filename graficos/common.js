
import { getCSS, tickConfig } from "./common.js"
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
  }
  
  export {getCSS, tickConfig }  
