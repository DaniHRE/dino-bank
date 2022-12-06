import { render } from 'react-dom';
import { Provider } from './provider';

const rootElement = document.getElementById("root");
render(
  <Provider />,
  rootElement
);