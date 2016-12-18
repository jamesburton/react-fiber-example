import App from './containers/App';

const start = new Date().getTime();

const update = () => {

  ReactDOMFiber.render(
    <App elapsed={new Date().getTime() - start} />,
    document.querySelector(`.react-mount`)
  );

  requestAnimationFrame(update);

};

requestAnimationFrame(update);
