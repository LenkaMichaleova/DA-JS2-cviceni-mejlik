import { render } from '@czechitas/render';
import { Inbox } from '../components/Inbox/Inbox';
import { Inbox2 } from '../components/Inbox/Inbox';
import '../global.css';
import './index.css';
import '../components/Inbox/Inbox.css'

document.querySelector('#root').innerHTML = render(
  <>
    <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
    <Inbox2 account="radovan.holatko@mejlik.cz" messages={0} />
  </>
);