const stack = [1,2,3,4];

function push(element) {
    stack.push(element);
    return stack
  }
  
  function pop() {
    return stack.pop();
    
  }
  
  function peek() {
    return stack[stack.length - 1];
  }
  
  function size() {
    return stack.length;
  }
console.log(pop())