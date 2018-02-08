$(document).ready(function(){

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
			
			};

			var  currentViewModel = new ViewModel();
				ko.components.register('message-editor',{
				viewModel:function(params){
					this.text = ko.observable(params && params.initialText || '');
				},
				template:'Message:<input data-bind="textInput:text" />'
				+ '(length: <span data-bind="text:text().length"  />)'
			});
		
			ko.applyBindings(currentViewModel);




		});