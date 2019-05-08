/*
 * WORKAROUNG: Typscript see `Worker.postMessage(message) as Window.postMessage(message, targetOrigin)`
 * https://github.com/Microsoft/TypeScript/issues/20595#issuecomment-390359040
*/

const worker = () => {
  const ctxWorker: Worker = self as any;

  let duration: number = 0;
  let started: boolean = false;
  let timerId: number | undefined = undefined;

  const startTimer = (): number => {
    return window.setInterval(() => {
      if(duration > 0) {
          --duration;
          ctxWorker.postMessage({ type: 'DURATION', duration });
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  }

  ctxWorker.addEventListener('message', (e) => {
    switch (e.data.type) {
      case 'SET_DURATION':
        duration = e.data.duration;
        ctxWorker.postMessage({ type: 'DURATION', duration });
        break;

      case 'CHANGE_STATUS':
        started = e.data.started;
        ctxWorker.postMessage({ type: 'STATUS', started });

        if (started && duration > 0) {
          timerId = startTimer();

        } else if (timerId) {
          clearInterval(timerId);
        }

        break;

      default:
        break;
    }
  });
}

export default worker;
