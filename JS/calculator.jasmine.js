

describe("Calculator", function(){

    var calculator;

    beforeEach(function(){
        calculator = new Calculator();    
    });

    describe("sum", function() {

        it("should be able to sum two numbers", function(){     
            var a = 3;
            var b = 5;
            var expectedResult = 8;      
            var result = calculator.sum(a, b);      
            expect(result).toBe(expectedResult);        
        });
  
    });
    
    
    describe("recognizeValues", function(){
        it("given the string \"1 + 2\" should return ['1','+','2']", function(){
            var input = "1 + 2";
            var expectedResult = ["1", "+", "2"];
            var result = calculator.recognizeValues(input);
            expect(result).toEqual(expectedResult);
        });
        
    });
    
        
    describe("recognizeValues", function(){
        it("given the string \"1+2\" should return ['1','+','2']", function(){
            var input = "1+2";
            var expectedResult = ["1", "+", "2"];
            var result = calculator.recognizeValues(input);
            expect(result).toEqual(expectedResult);
        });
        
    });
    
    describe("Array.any()", function(){
        
        it("should exists", function(){
            var a = [];
            expect(a.any).toBeDefined();            
        });
        
        it("given the array \"[1,2,5,6]\" should return true for \"2\"", function(){
            var array = [1,2,5,6];
            //expect(array.any(2)).toBeTruthy();            
            expect(array.any(2)).toBe(true);
        });
        
    });
  
});