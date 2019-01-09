import { rest } from './rest';

const getInfo = () => rest.get('info');
const getTasks = () => rest.get('tasks');

export { getInfo, getTasks };
