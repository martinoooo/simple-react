function workLoop(deadline) {
  if (scheduledHostCallback !== null) {
    scheduledHostCallback(deadline);
  }

  requestIdleCallback(workLoop);
}

let scheduledHostCallback = null;
export function requestHostCallback(callback) {
  scheduledHostCallback = callback;
}

requestIdleCallback(workLoop);
