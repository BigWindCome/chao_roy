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
				self.shounldSee = ko.observable(false);
				self.people = ko.observableArray(arr);
				self.person= ko.observableArray(arr2);

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