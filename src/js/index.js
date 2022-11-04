import ColaGenerator from './componets/colaGenerator.js';
import Vendingmachine from './componets/vendingmachine.js';

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// await -> 반환이 잘 될 때까지 기다린다! async와 같이 써야함
// 참고 : https://ko.javascript.info/async-await


await colaGenerator.setup();
vendingmachine.setup();