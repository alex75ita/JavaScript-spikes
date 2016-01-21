
// https://docs.angularjs.org/guide/unit-testing


describe("Given inputAmountField directive", function(){
	
	var $compile;
	var $rootScope;    
    var html; // container
       
	//load the app that contains the directive
	var app = angular.module("test", [])
    
    app.directive('inputAmountField', function() {
        return {
            restrict: 'E',
            replace: true,
            //template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
            template: '<input>'
        };
    });
           

    beforeEach(function(){

        module("test");    // this is angular.mock.module(), not angular.module() !!!
        
		html = "<div>Amount: <inputAmountField></div>";      
    });			
    
	beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_){
		// the injector unwraps the underscore (_) from around the parameter names when matching

		$compile = _$compile_;
		$rootScope = _$rootScope_;
	
	}));
	    
    describe("When Angular compile", function(){
        it("Then input is rendered", function(){
            var element = $compile(html)($rootScope);

            $rootScope.$digest();
        
            var result = element.text();
            result = element.html();            
           
            expect(result).toContain("<input");            
        });
        
    });  
	
});