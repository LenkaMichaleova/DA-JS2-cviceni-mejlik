import { render } from '@czechitas/render';
import { Inbox, Inbox2, Inbox3 } from '../components/Inbox/Inbox';
import { Header } from '../components/Header/Header';
import '../global.css';
import './index.css';
import '../components/Inbox/Inbox.css';
import '../components/Header/Header.css';

document.querySelector('#root').innerHTML = render(
  <>
    <Header user="Radovan Holátko"/>
    <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
    <Header user=""/>
    <Inbox2 account="radovan.holatko@mejlik.cz" messages={0} />
    <Inbox3 account="radovan.holatko@mejlik.cz" messages={3}/>
  </>
);