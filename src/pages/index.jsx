import { render } from '@czechitas/render';
import { Inbox } from '../components/Inbox/Inbox';
import { Inbox2 } from '../components/Inbox/Inbox';
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
  </>
);