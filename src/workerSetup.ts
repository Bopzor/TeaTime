/** https://github.com/fullstackio/awesome-fullstack-tutorials/blob/master/react/guide-to-web-workers-in-react/react-worker/src/workerSetup.js
 */
const webWorker = (worker: () => void) => {
  const code = worker.toString();
  const blob = new Blob(["(" + code + ")()"]);

  return new Worker(URL.createObjectURL(blob));
}

export default webWorker;
