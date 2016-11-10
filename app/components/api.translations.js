angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
		
	// Load the strings automatically during initialization.
	gettextCatalog.setStrings("pt", {
        "Registers": "Cadastros",
        "Profile" : "Perfil",
        "Institute of Education" : "Instituições de Ensino",
        "Institute" : "Instituição",
        "Employer" : "Empregador",
        "Name" : "Nome",
        "Document" : "Documento",
        "Date of Birth" : {"short":"Data Nasc",'$$noContext':"Data de Nascimento"},
        
        "New" : {"female":"Nova","male":"Novo",'$$noContext':"Novo" },
//        "One boat": ["Uno barco", "{{$count}} barcos"]
        "Creating a new" : "Cadastrando um novo",
        "Save" :"Salvar",
        "Cancel" : "Cancelar",
        "Updating" : "Atualizando",
		"Update" : "Atualizar",
		"Would you like to delete this register?":"Confirma a exclusão do cadastro?",
		"is required" : "é obridatório",
		"must be at least" : "deve ter mais que",
		"can be a maximum of" : "pode ter no máximo",
		"characters" : "caracteres",
		"must have only numeric characters" : "deve conter somente valores numéricos",
		"saved with success" : "salvo com sucesso",
		"updated with success" :"atualizado com sucesso",
		"deleted with success" : "excluído com sucesso",
		"YYYY-MM-DD" : "AAAA-MM-DD"
        
    });
	
	gettextCatalog.setStrings("es", {
		"Registers": "Cadastros",
        "Profile" : "Perfil",
        "Institute of Education" : "Instituición de Educación",
        "Institute" : "Instituición",
        "Employer" : "Empleador",
        "Name" : "Nombre",
        "Document" : "Documento",
        "Date of Birth" : {"short":"Fecha Nasc",'$$noContext':"Fecha de Nascimeinto"},
        
        "New" : {"female":"Nueva","male":"Nuevo",'$$noContext':"Nuevo" },
        "Creating a new" : "Haciendo un nuevo registro de",
        "Save" :"Guardar",
        "Cancel" : "Salir",
        "Updating" : "Actualización en",
		"Update" : "Actualizar",
		"Would you like to delete this register?":"Confirma la exclusión del registro?",
		"is required" : "es requerido",
		"must be at least" : "debe tener más de",
		"can be a maximum of" : "debe tener como máximo",
		"characters" : "caracteres",
		"must have only numeric characters" : "sólo debe tener valores numéricos",
		"saved with success" : "guardado con éxito",
		"updated with success" :"actualizado com éxito",
		"deleted with success" : "excluido con éxito",
		"YYYY-MM-DD" : "AAAA-MM-DD"
    });
	
}]);


