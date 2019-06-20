import createEntry from './index';
import { App } from '../App';

if(module.hot){
    module.hot.accept();
}
createEntry(App, true);