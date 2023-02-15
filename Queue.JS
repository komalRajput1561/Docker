const queue = [1,3,4,5,6];

// enqueue function adds an element to the end of the queue
function enqueue(element) {
  queue.push(element);
  return queue
}

// dequeue function removes and returns the first element from the queue
function dequeue() {
  return queue.shift();
}

// peek function returns the first element of the queue without removing it
function peek() {
  return queue[0];
}

// isEmpty function checks if the queue is empty or not
function isEmpty() {
  return queue.length === 0;
}

// size function returns the size of the queue
function size() {
  return queue.length;
}
