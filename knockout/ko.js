$(document).ready(function(){
	ko.extenders.required = function(target, overrideMessage) {
			    // 添加子可观察对象
			    target.hasError = ko.observable();
			    target.validationMessage = ko.observable();
			 
			    // 执行验证的函数
			    function validate(newValue) {
			       target.hasError(newValue ? false : true);
			       target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
			    }
			 
			    // 初始验证
			    validate(target());
			 
			    // 当值发生变化的时候进行验证
			    target.subscribe(validate);
			 
			    // 返回源可观察对象
			    return target;
			};

			var  ViewModel = function(){
				var self = this;
				var arr =  [
            { firstName: 'Bert', lastName: 'Bertington' },
            { firstName: 'Charles', lastName: 'Charlesforth' },
            { firstName: 'Denise', lastName: 'Dentiste' }
        ];
        	var arr2 =[
		        { name: 'Bert' },
		        { name: 'Charles' },
		        { name: 'Denise' }
        	];

        	var arr3=[
        		 { name: 'Fruit', items: [ 'Apple', 'Orange', 'Banana' ] },
            { name: 'Vegetables', items: [ 'Celery', 'Corn', 'Spinach' ] }
        	];

        	var arr4=["A","B","C","D"];
        	var arr5=[{ name: 'Mercury', capital: null }, 
            { name: 'Earth', capital: { cityName: 'Barnsley' } }];
            var arr6=['Japan', 'Bolivia', 'New Zealand'];
            var arr7=[
            { itemName: 'Choice 1' },
            { itemName: 'Choice 2' }];
            var arr8 =[
            { name: 'Item 1', id: 1, disable: ko.observable(false)},
            { name: 'Item 3', id: 3, disable: ko.observable(true)},
            { name: 'Item 4', id: 4, disable: ko.observable(false)}
        ];
        var arr9 =['Japan', 'Bolivia', 'New Zealand','guangzhou'];
            	var bl1={
            latitude:  51.5001524,
            longitude: -0.1262362
        };
				self.shounldSee = ko.observable(false);
				self.displayMessage = ko.observable(false);
				self.people = ko.observableArray(arr);
				self.person= ko.observableArray(arr2);
				self.categories= ko.observableArray(arr3);
				self.myItems= ko.observableArray(arr4);
				self.capitals= ko.observableArray(arr5);
				self.countries= ko.observableArray(arr6);
				self.countries2= ko.observableArray(arr9);
				self.city= ko.observable("London");
				self.coords= ko.observable(bl1);
				self.twitterName=ko.observable("@example");
				self.resultData=ko.observable();
				self.numberofClicks=ko.observable(0);
				self.hasCellphone=ko.observable(false);
				self.cellphone="";
				self.firstValue=ko.observable("hello");
				self.secondValue="hello,again"
				self.selectedCountry=ko.observable('wuhan');
				self.userName = ko.observable("");
				self.userPassword= ko.observable("abs");
				self.isSelected=ko.observable(false);
				self.focusButton=ko.observable("点击获取焦点");
				self.name = ko.observable("Bill Dally");
				self.editing = ko.observable(false);
				self.items= ko.observableArray(arr7);
				self.myItems2 = ko.observableArray(arr8);
       			self.chosenItems = ko.observableArray();	
       			self.firstName = ko.observable().extend({ required: "Please enter a first name" });
    			self.lastName = ko.observable().extend({ required: "" });

       			self.setOptionDisable=function(option,item){
       				ko.applyBindingsToNode(option,{disable:item.disable},item);
       			};

				self.edit = function(){
					self.editing(true)
				};
				self.wantsSpam = ko.observable(true);
				self.spamFlavors = ko.observableArray(["cherry","almond"])
				self.setFocus=function(){
					self.isSelected(true);
				
				};
				self.getTweets=function(){
					var name = self.twitterName(),
					simulatedResults=[
						  { text: name + ' What a nice day.' },
                { text: name + ' Building some cool apps.' },
                { text: name + ' Just saw a famous celebrity eating lard. Yum.' }
					];
					self.resultData({ retrievalDate: new Date(), topTweets: simulatedResults });
				};
				 self.lastInterest = ko.observable();
        		 self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);
				self.clearResults = function(){
					self.resultData(undefined);
				};
				self.removePerson = function(){
					self.person.remove(this);
				};

				self.addPerson = function(){
					self.person.push({name:"New at"+new Date()})
				};

				self.addNumber = function(){
					var number = self.numberofClicks();
					self.numberofClicks(number + 1);
				};
				self.setZero = function(){
					self.numberofClicks(0);
				};

				self.logMouseover = function(data){
					self.lastInterest(data);
				}
				self.validation = function(){
					if(!(self.firstName.hasError()||self.lastName.hasError())){
						return true;
					}
					return false;
				}
				// self.firstName.subscribe(function(data){
				// 	if(!self.firstName.hasError()){
				// 		if(self.countries.indexOf("tianjin")<0)
				// 		self.countries.push("tianjin");
				// 	}
				// })
			};
			
			var  currentViewModel = new ViewModel();
			currentViewModel.spamFlavors.push("msg");
			// if(!(currentViewModel.firstName.hasError()||currentViewModel.lastName.hasError())){
			// 	currentViewModel.countries.push("tianjin");
			// };
				ko.components.register('message-editor',{
				viewModel:function(params){
					this.text = ko.observable(params && params.initialText || '');
				},
				template:'Message:<input data-bind="textInput:text" />'
				+ '(length: <span data-bind="text:text().length"  />)'
			});
			
			ko.applyBindings(currentViewModel);




		});