


/* Template */

export const getTemplates = function() {

}

export const getTemplate = function(id) {

}

export const initializeTemplate = function() {
    //return templateId 
}

export const deleteTemplate = function(id) {
    //return bool
}

export const renameTemplate = function(id, name) {
    //return template Id
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
    // return parameter id
}

export const deleteCategoryParameter = async function(templateId, categoryId, parameterId) {
    //return true
}

export const renameCategoryParameter = async function(templateId, categoryId, parameterId, name) {
    //return parameter id
}

export const moveCategoryParameter = async function(templateId, categoryId, parameterId) {
    //return index
}

/* Subcategory Parameter */

export const addSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameter) {
    //return parameter id
}

export const deleteSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId) {
    //return bool
}

export const renameSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId, name) {
    //return parameter id
}

export const moveSubcategoryParameter = async function(templateId, categoryId, subcategoryId, parameterId) {
    //return 
}