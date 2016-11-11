angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
		
	// Load the strings automatically during initialization.
	gettextCatalog.setStrings("pt", {
		//crud translations
        "New" : {"female":"Nova","male":"Novo",'$$noContext':"Novo" },
        "Creating a new" : "Novo cadastro de",
        
        "Save" :"Salvar",
        "Cancel" : "Cancelar",
        "Updating" : "Atualizando",
		"Update" : "Atualizar",

		'to save':'salvar',
		'to update':'atualizar',
		'to delete':'excluir',
		'to get':'obter',
		
		'saved':'criado',
		'updated':'atualizado',
		'deleted':'excluído',

		'{{resourceName}} {{operation}} with success':'Cadastro de {{resourceName}} {{operation}} com sucesso',
		'Error trying {{operation}} {{resourceName}}: {{data}}':'Erro tentando {{operation}} {{resourceName}}: {{data}}',
		'Would you like to delete this register?':'Confirma a exclusão do cadastro?',
		"Register is on edition! Can't be deleted.":'Registro está em edição! Não pode ser excluído.',
		
		"YYYY-MM-DD" : "AAAA-MM-DD",
		"is required" : "é obridatório",
		"must be at least" : "deve ter mais que",
		"can be a maximum of" : "pode ter no máximo",
		"characters" : "caracteres",
		"must have only numeric characters" : "deve conter somente valores numéricos",        
    });
	
	gettextCatalog.setStrings("es", {
		//crud translations
		"New" : {"female":"Nueva","male":"Nuevo",'$$noContext':"Nuevo" },
        "Creating a new" : "Nuevo registro de",
        
        "Save" :"Guardar",
        "Cancel" : "Salir",
        "Updating" : "Actualización en",
		"Update" : "Actualizar",
		
		'to save':'guardar',
		'to update':'actualizar',
		'to delete':'excluir',
		'to get':'obtener',
		
		'saved':'guardado',
		'updated':'actualizado',
		'deleted':'excluido',
		
		'{{resourceName}} {{operation}} with success':'Registro de {{resourceName}} {{operation}} con éxito',
		'Error trying {{operation}} {{resourceName}}: {{data}}':'Erro tentando {{operation}} {{resourceName}}: {{data}}',
		'Would you like to delete this register?':'Confirma la exclusión del registro?',
		"Register is on edition! Can't be deleted.":'Registro estas en edición! No puedes ser excluido.',
		
		"YYYY-MM-DD" : "AAAA-MM-DD",
		"is required" : "es requerido",
		"must be at least" : "debe tener más de",
		"can be a maximum of" : "debe tener como máximo",
		"characters" : "caracteres",
		"must have only numeric characters" : "sólo debe tener valores numéricos",
    });
	
}]);


