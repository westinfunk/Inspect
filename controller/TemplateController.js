/* Template */

export const getTemplates = function() {

}

export const getTemplate = function(id) {

}

export const initializeTemplate = function() {

}

export const deleteTemplate = function(id) {

}

export const renameTemplate = function(id, name) {

}

export const editTemplate = function(id, template) {

}

/* Category */

export const addCategory = async function(templateId, categoryId, Category) {

    //return Category id
}

export const renameCategory = async function(templateId, categoryId, CategoryId, name) {
    
    //return Category id
}

export const deleteCategory = async function(templateId, categoryId, CategoryId) {

    //return true if deleted
}

export const moveCategory = async function(templateId, categoryId, CategoryId, index) {

    //return new index
} 


/* Subcategory */

export const addSubcategory = async function(templateId, categoryId, subcategory) {

    //return subcategory id
}

export const renameSubcategory = async function(templateId, categoryId, subcategoryId, name) {
    
    //return subcategory id
}

export const deleteSubcategory = async function(templateId, categoryId, subcategoryId) {

    //return true if deleted
}

export const moveSubcategory = async function(templateId, categoryId, subcategoryId, index) {

    //return new index
}

/* Parameters */
/* Category Parameters */

export const addCategoryParameter = async function(templateId, categoryId, parameter) {

}

export const deleteCategoryParameter = async function(templateId, categoryId, parameterId) {

}

export const renameCategoryParameter = async function(templateId, categoryId, parameterId, name) {

}

export const moveCategoryParameter = async function(templateId, categoryId, parameterId) {

}

/* Subcategory Parameter */

export const addSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameter) {

}

export const deleteSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId) {

}

export const renameSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId, name) {

}

export const moveSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId) {

}