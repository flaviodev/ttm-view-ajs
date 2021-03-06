(function() {
	'use strict';

	app.service('$ttmCrud', $ttmCrud);
	$ttmCrud.$inject = ["$http"];

	function $ttmCrud ($http) {
		/* jshint validthis: true */
		var self = this;

		self.servicePath;
		self.setServicePath = setServicePath;
		function setServicePath(servicePath) {
			self.servicePath = servicePath;
		}		
		
		self.resource;
		self.setResource = setResource;
		function setResource(resource) {
			self.resource = resource;
		}		

		self.resourceLocaleStrings;
		self.setResourceLocaleStrings = setResourceLocaleStrings;
		function setResourceLocaleStrings(resourceLocaleStrings) {
			self.resourceLocaleStrings = resourceLocaleStrings;;
		}		
		
		self.header = {'Content-Type': 'application/json; charset=UTF-8'};
		
		function getUri() {
			return self.servicePath+"/"+self.resource; 
		}
		
		function doRequest(requestMethod, requestUrl, requestData, onSuccessFunction, onErrorFunction) {
			var request = $http({
				method: requestMethod,
				url: requestUrl,
				data: requestData,
				headers: self.header
			});
			
			request.success(function (data, status) {
				onSuccessFunction(status,data);
			});
			
			request.error(function (data, status, headers, config) {
				onErrorFunction(status,data);
			});			
		}

		self.getAllObjects = getAllObjects;
		function getAllObjects(locale,onSuccessFunction, onErrorFunction) {
			var uri = getUri();
			if (locale != undefined) {
				uri+="/"+locale;
			}
			doRequest("GET", uri, null, onSuccessFunction, onErrorFunction); 
		}
		
		self.getObject = getObject;
		function getObject(id, onSuccessFunction, onErrorFunction) {
			var uri = getUri()+"/"+id;
			if (locale != undefined) {
				uri+="/"+locale;
			}
			doRequest("GET", uri, null, onSuccessFunction, onErrorFunction); 
		}
		
		self.postObject = postObject;
		function postObject(object, locale, onSuccessFunction, onErrorFunction) {
			var uri = getUri();
			if (locale != undefined) {
				uri+="/"+locale;
			}

			doRequest("POST", uri, object, onSuccessFunction, onErrorFunction);
		}
		
		self.putObject = putObject;
		function putObject(object, onSuccessFunction, onErrorFunction) {
			doRequest("PUT", getUri(), object, onSuccessFunction, onErrorFunction);			
		}
		
		self.deleteObject = deleteObject;
		function deleteObject(id, onSuccessFunction, onErrorFunction) {
			doRequest("DELETE", getUri()+"/"+id, null, onSuccessFunction, onErrorFunction);			
		}
	}
})()