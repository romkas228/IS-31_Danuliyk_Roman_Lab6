function ex6(){
    
    function checkBrackets(str) {
        const stack = [];
        const brackets = {
            ')': '(',
            '}': '{',
            ']': '['
        };
    
        for (const char of str) {
            
            if (['(', '{', '['].includes(char)) {
                stack.push(char);
            } 
            
            else if ([')', '}', ']'].includes(char)) {
                
                if (stack.length === 0 || stack.pop() !== brackets[char]) {
                    return false;
                }
            }
        }
    
        
        return stack.length === 0;
    }
    
    
    console.log(checkBrackets("function someFn() { return [1, 2, (3 + 4)]; }")); 
    console.log(checkBrackets("function someFn() { return [1, 2, (3 + 4]; }"));   
    
}