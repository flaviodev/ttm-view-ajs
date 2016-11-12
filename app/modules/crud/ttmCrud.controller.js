/**
 * @autor flaviodev - Flávio de Souza - fdsdev@gmail.com
 * 
 * register controller -  
 */
(function() {
	'use strict';
    
	app.controller('ttmCrudController', ttmCrudController);
	ttmCrudController.$inject = ["$scope", "$window", "$filter", "NgTableParams", "$ttmCrud","gettextCatalog"];

	function ttmCrudController ($scope, $window, $filter, NgTableParams, $ttmCrud, gettextCatalog) {
		/* jshint validthis: true */
		var self = this;

		/** setting initial state of mode view on form */ 
		self.view_state=true;
		self.edition_state = false;   
		self.creating_mode = false;
		self.updating_mode = false;
		
		/** register array for storing the table data on screen */
		var objects = [];
		
		self.setServicePath = setServicePath;
		function setServicePath(servicePath) {
			$ttmCrud.setServicePath(servicePath);
		}		
		
		self.setResource = setResource;
		function setResource(resource) {
			$ttmCrud.setResource(resource);
		}		

		self.resourceName;
		self.setResourceName = setResourceName;
		function setResourceName(resourceName) {
			self.resourceName = resourceName;
		}		

		var sorting = {};
		self.setSortBy = setSortBy;
		function setSortBy(sortBy) {
			if(sortBy != undefined && sortBy.indexOf(":")>-1) {
				var partsOfSortBy = sortBy.split(":");
				sorting[partsOfSortBy[0]] = partsOfSortBy[1];
			}
		}		

		var filter = {};
		self.setFilterBy = setFilterBy;
		function setFilterBy(filterBy) {
			if(filterBy != undefined && filterBy.indexOf(":")>-1) {
				var partsOfFilterBy = self.self.filterBy.split(":");
				filter[partsOfFilterBy[0]] = partsOfFilterBy[1];
			}
		}				
		
		/** 
	    * getObjects - function responsible to return the registers of crud table 
	    */
		self.getAllObjects = getAllObjects;
		function getAllObjects(locale) {
			$ttmCrud.getAllObjects(locale,
			    /** onSuccessFunction */
				function (status, data) {
					if(status == 200) {
						/** ttmCrudTable: collection that contais the registers of table, data: return of service */ 
						objects = data;
					} 
					
					self.tableParams = ngTablePaging($filter, NgTableParams, objects, 5, sorting, filter);
			    },
			    /** onErrorFunction */
			    function (status, data) {
			    	alert(gettextCatalog.getString('Error trying {{operation}} {{resourceName}}: {{data}}', { resourceName: gettextCatalog.getString(self.resourceName), data:data, operation : gettextCatalog.getString("to get") }));
			    }
			);
		}
		
		/**
		 * getObject - invoke the service that return a object (mapped entity) corresponding on id
		 */
		self.getObject = getObject;
		function getObject(id,locale) {
			$ttmCrud.getObject(id,locale,
			    /** onSuccessFunction */
				function (status, data) {
					$scope.register = data;
				},
			    /** onErrorFunction */
			    function (status, data) {
			    	alert(gettextCatalog.getString('Error trying {{operation}} {{resourceName}}: {{data}}', { resourceName: gettextCatalog.getString(self.resourceName), data:data, operation : gettextCatalog.getString("to get") }));
				}
			);					
		}
		
		/**
		* createObject: invoke the service that create a new object (mapped entity)
		*/
		self.createObject = createObject;
		function createObject(object) {
			$ttmCrud.postObject(object,
			    /** onSuccessFunction */
				function (status, data) {
					/** pushing the created register to crud table */
					objects.push(parseObjectToTable(data));
					self.tableParams.reload();
					self.tableParams.sorting();
					
					/** reseting crud form */
					$scope.register = {};
					
					/** updating state of mode view on form */
					self.view_state = true;
					self.creating_mode = false;
					self.edition_state = false;
					
					showMessage("message-status","success",gettextCatalog.getString('{{resourceName}} {{operation}} with success', {resourceName:gettextCatalog.getString(self.resourceName), operation:gettextCatalog.getString("saved")}));	
				},
			    /** onErrorFunction */
			    function (status, data) {
			    	alert(gettextCatalog.getString('Error trying {{operation}} {{resourceName}}: {{data}}', { resourceName: gettextCatalog.getString(self.resourceName), data:data, operation : gettextCatalog.getString("to save") }));
				}
			);					
		}

		/**
		* updateObject: invoke the service that update the object (mapped entity)
		*/
		self.updateObject = updateObject;
		function updateObject(object) {
			$ttmCrud.putObject(object,
			    /** onSuccessFunction */
				function (status, data) {
					/** updating the data on crud table */ 
					for(var i in objects) {
						if(objects[i].id == object.id) {
							objects[i] = parseObjectToTable(data);
							break;
						}
					}
	
					self.tableParams.reload();
	
					/** reseting crud form */
					$scope.register = {};
	
					/** updating state of mode view on form */
					self.view_state = true;
					self.updating_mode = false;
					self.edition_state = false;
					
					showMessage("message-status","success",gettextCatalog.getString('{{resourceName}} {{operation}} with success', {resourceName:gettextCatalog.getString(self.resourceName), operation:gettextCatalog.getString("updated")}));
				},
			    /** onErrorFunction */
			    function (status, data) {
			    	alert(gettextCatalog.getString('Error trying {{operation}} {{resourceName}}: {{data}}', { resourceName: gettextCatalog.getString(self.resourceName), data:data, operation : gettextCatalog.getString("to update") }));
				}
			);					
		}

		/**
		* deleteObject: invoke the service that delete the object (mapped entity)
		*/
		self.deleteObject = deleteObject;
		function deleteObject(object) {

			/** Validation if the delete request isnt about a object on edition */
			if($scope.register!=null && $scope.register.id==object.id) {
				alert(gettextCatalog.getString("Register is on edition! Can't be deleted."))
				return;
			}
			
			$ttmCrud.deleteObject(object.id,
			    /** onSuccessFunction */
				function (status, data) {
					/** removing the data on crud table */
					var index = objects.indexOf(object);
					objects.splice(index,1);
					   
					self.tableParams.reload().then(function(data) {
						if (self.tableParams.data.length === 0 && self.tableParams.total() > 0) {
							self.tableParams.page(self.tableParams.page() - 1);
							self.tableParams.reload();
						}
					});

					showMessage("message-status","success",gettextCatalog.getString('{{resourceName}} {{operation}} with success', {resourceName:gettextCatalog.getString(self.resourceName), operation:gettextCatalog.getString("deleted")}));
				},
			    /** onErrorFunction */
			    function (status, data) {
			    	alert(gettextCatalog.getString('Error trying {{operation}} {{resourceName}}: {{data}}', { resourceName: gettextCatalog.getString(self.resourceName), data:data, operation : gettextCatalog.getString("to delete") }));
				}
			);					
		}
		
		/** State of view operations (not invoke crud services) */
		   
		/**
		* loadObject: just copy the data of a register form crud table to edition on crud form
		*/
		self.loadObject = loadObject;
		function loadObject(object) {
			/** coping data of the crud table object to other object for after updating */
			var copyobject = {}; 
			for(var i in object) {
				copyobject[i] = parseFieldToForm(object[i]);
			}
		
			/** setting copy object to crud form */
			$scope.register = copyobject;
			
			self.view_state = false;
			self.creating_mode = false;
			self.updating_mode = true;
			self.edition_state = true;
		}

		/**
		* newObject: change view mode 
		*/   
		self.newObject = newObject;
		function newObject() {
			/** reseting crud form */
			$scope.register = {};
		  
			/** updating state of mode view on form */
			self.view_state = false;
			self.creating_mode = true;
			self.edition_state = true;
		}   
		   
		/**
		* cancelEdition: just reset the form
		*/   
		self.cancelEdition = cancelEdition; 
		function cancelEdition() {
			/** reseting crud form */
			$scope.register = {};
			
			/** updating state of mode view on form */
			self.view_state=true;
			self.edition_state = false;   
			self.creating_mode = false;
			self.updating_mode = false;
		}
		   
		/**
		* showDeleteConfirm: show dialog window for confirming the deletation
		*/   
		self.showDeleteConfirm = showDeleteConfirm;
		function showDeleteConfirm(object) {
			if ($window.confirm(gettextCatalog.getString('Would you like to delete this register?'))) {
				self.deleteObject(object);
			}
		}   
		
		/** parsing data form<->table  */
   
		/** handle type conversions on data parse of table to form **/
		function parseFieldToForm(field) {
			if(field.date!=null) {
				//parsing date to form
				return new Date(Number(field.date));
			}
		
			return field;
		}

		/** copy data of form to table, converting the type of data **/
		function parseObjectToTable(object) {
			var copyObject = {};
			for(var i in object) {
				copyObject[i] = parseFieldToTable(object[i]);
			}
			
			return copyObject;
		}
   
		/** handle type conversions on data parse of form to table **/
		function parseFieldToTable(field) {
			if(field instanceof Date) {
				// parsing date to table
				var dateField = {};
				dateField.date = field.getTime();
		
				return dateField;
			}
			
			return field;
		}
	}
})();
