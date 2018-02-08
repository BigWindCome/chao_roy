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
				self.city= ko.observable("London");
				self.coords= ko.observable(bl1);
				self.twitterName=ko.observable("@example");
				self.resultData=ko.observable();
				self.getTweets=function(){
					var name = self.twitterName(),
					simulatedResults=[
						  { text: name + ' What a nice day.' },
                { text: name + ' Building some cool apps.' },
                { text: name + ' Just saw a famous celebrity eating lard. Yum.' }
					];
					self.resultData({ retrievalDate: new Date(), topTweets: simulatedResults });
				};
				self.clearResults = function(){
					self.resultData(undefined);
				};
				self.removePerson = function(){
					self.person.remove(this);
				};

				self.addPerson = function(){
					self.person.push({name:"New at"+new Date()})
				};
			
			};
			var  currentViewModel = new ViewModel();
			ko.applyBindings(currentViewModel);


		});