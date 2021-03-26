// node myFile.js
const pendingTimers = []
const pendingOSTasks = []
const pendingOps = []

myFile.runContents() // assume this populates the pending arrays, one of which populates ostasks because it listens for port

const shouldContinue = () => {
  // Check 1: Any pending setTimeout, setInterval, setImmediate
  // Check 2: Any pending os tasks (eg. server listening to port)
  // Check 3: Any pending long running operations? like fs module
  return pendingTimers.length || pendingOSTasks.length || pendingOps.length
}

// Entire while body executes in one tick
while (shouldContinue()) {
  // 1. Node looks at pending timers and sees if any fns are rdy to be called

  // 2. Node looks at pendingOsTasks and pendingOps and calls relevant callbacks

  // 3. Pause exectuion. continue when:
  // - new pendingOSTask is done
  // - new pendingOps is done
  // - timer is about to complete

  // 4. Look at pendingTimers. Call any setImmediate
  // 5. Handle any "close"||cleanup events
}

// exit back to terminal