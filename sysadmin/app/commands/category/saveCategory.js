import angular from 'angular';
import categoriesCacheModule from 'sysadmin/app/categoriesCache';

export default angular.module('categoryCommandModule', [
   categoriesCacheModule.name
]).factory('SaveCategoriesFactory', function($http, $templateCache, categoriesCacheFactory) {
  let url = "/api/category/";
  
  let categoriesCacheName = categoriesCacheFactory.info().id;
  
  let addCategoryToCache = (category) => {
      let categories = categoriesCacheFactory.get(categoriesCacheName);
      categories.push(category);
      categoriesCacheFactory.put(categoriesCacheName, categories);
  }
  
  let removeCategoryFromCache = (id) => {
      let categories = categoriesCacheFactory.get(categoriesCacheName);
      let categoriesWithoutItem = categories.filter(cat => cat._id !== id);
      categoriesCacheFactory.put(categoriesCacheName, categoriesWithoutItem);
  }
  
  this.edit = (category, callback) => {
    let putUrl = url + category._id;
    $http.put(putUrl, category, $templateCache).then(() => {
        removeCategoryFromCache(category._id);
        addCategoryToCache(category);
        callback({ success : true });
    }, (response) => {
        callback({ success: false, response });
    }); 
  }
  
  this.save = (category, callback) => {
    $http.post(url, category, $templateCache).then(() => {
        addCategoryToCache(category);
        callback({ success: true, category: category });
    }, (response) => {
        callback({ success: false, response });
    });
  }
  
  let saveCategory = (category, callback) => {
    if (category._id === undefined || category._id === null) {
      this.save(category, (result) => {
        callback(result);
      }); 
    } else {
      this.edit(category, (result) => {
        callback(result);
      }); 
    }
  }

  return {
    saveCategory
  }
});