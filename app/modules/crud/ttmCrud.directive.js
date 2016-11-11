/**
* @doc
* @example <ttm-crud-title></ttm-crud-title>
*/
app.directive('ttmCrudTitle', ttmCrudTitle);
function ttmCrudTitle() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudTitle.template.html",
		replace: true
	};
}

/**
* @doc
* @example <ttm-crud-messages></ttm-crud-messages>
*/
angular.module('app').directive('ttmCrudMessages', ttmCrudMessages);
function ttmCrudMessages() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudMessages.template.html",
		transclude: true,
		replace: true			
	};
}

/**
* @doc
* @example <ttm-crud-field-error></ttm-crud-title-update>
*/
angular.module('app').directive('ttmCrudFieldError', ttmCrudFieldError);
function ttmCrudFieldError() {
	return{
		restrict: 'E'			
	};
}

/**
* @doc
* @example <ttm-crud-form-edition-buttons></ttm-crud-form-edition-buttons>
*/
angular.module('app').directive('ttmCrudFormEditionButtons', ttmCrudFormEditionButtons);
function ttmCrudFormEditionButtons() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudFormEditionButtons.template.html",
		replace: true
	};
}

/**
* @doc
* @example <ttm-crud-form-new-button></ttm-crud-form-new-button>
*/
angular.module('app').directive('ttmCrudFormNewButton', ttmCrudFormNewButton);
function ttmCrudFormNewButton() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudFormNewButton.template.html",
		replace: true,
		transclude: true
	};
}

/**
* @doc
* @example <ttm-crud-table-load-button></ttm-crud-table-load-button>
*/
angular.module('app').directive('ttmCrudTableLoadButton', ttmCrudTableLoadButton);
function ttmCrudTableLoadButton() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudTableLoadButton.template.html",
		replace: true,
		transclude: true
	};
}

/**
* @doc
* @example <ttm-crud-table-delete-button></ttm-crud-table-delete-button>
*/
angular.module('app').directive('ttmCrudTableDeleteButton', ttmCrudTableDeleteButton);
function ttmCrudTableDeleteButton() {
	return{
		restrict: 'E',
		templateUrl: "vendor/flaviodev/ttm-view-ajs/app/modules/crud/templates/ttmCrudTableDeleteButton.template.html",
		replace: true,
		transclude: true
	};
}
