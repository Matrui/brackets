module.exports = function check(str, bracketsConfig) {
  console.log(str);
  console.log(bracketsConfig);


  let stack = [];
  let openBrackets = [];
  let closeBrackets = [];

  bracketsConfig.forEach((element) => {
    openBrackets.push(element[0]);
    closeBrackets.push(element[1]);
  })

  console.log(openBrackets);
  console.log(closeBrackets);


  for(i=0; i < str.length; i++){
    switch(true){
      case stack.length === 0 && closeBrackets.includes(str[i]) && openBrackets.includes(str[i]) === false:
        return false;

      case stack[stack.length - 1] === str[i] && closeBrackets.includes(str[i]) && openBrackets.includes(str[i]):
        stack.pop();
        break;

      case openBrackets.includes(str[i]):
        stack.push(str[i]);
        break;

      case stack.length != 0 && closeBrackets.indexOf(str[i]) != openBrackets.indexOf(stack[stack.length - 1]):
        return false;
      
      case stack.length != 0 && closeBrackets.includes(str[i]):
        stack.pop();
      
    }
  }

  if(stack.length === 0){
    return true;
  }
  else{
    return false;
  }
}
