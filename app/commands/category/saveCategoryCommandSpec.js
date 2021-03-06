var mockRequire = require("../../../node_modules/mock-require/index.js");
mockRequire.stopAll();
mockRequire('../../repositories/categoryRepository', {
	findCategories: function(callback) {
		return callback(null);
	},
	saveCategory: function(callback) {
		return callback(null);
	},
});
mockRequire('./validateCategory', {
    validate: (categoryData) => {
        return null;
    }
});
mockRequire('../../httpStatus', {
	   OK: 200,
       CREATED: 201,
       NOT_FOUND: 404
});
mockRequire('./dataCleaner', {
    cleanseCategory: (data) => {
	   return data;
    }
});
var categoryValidation = require("./validateCategory");
var categoryCommand = require("./saveCategoryCommand");
var categoryRepository = require("../../repositories/categoryRepository");
describe("When the find Categories method returns an error", () => {
	var result = null;
	beforeEach((done) => {
		spyOn(categoryRepository, "findCategories").and.callFake((callback) => {
			return callback({ status: 404, error: "no categories found" });
		});
		
		categoryCommand.saveCategory({ 
            description: "my category", 
            vietDescription: "xin chao",
            level: 0 }, (res) => {
			result = res;
			done();
		});
	});
	
	it("should give an error message in the result", () => { 
		expect(result.message).toBe("Handler rejected because : no categories found");
		expect(result.status).toBe(404);
	});
});

describe("When the find Categories method returns a duplicate category", () => {
	var result;
    
    beforeEach((done) => {
		spyOn(categoryRepository, "findCategories").and.callFake((callback) => {
			return callback({ 
                categories: [{ 
                    _id : 1, 
                    description: "my category" 
                }] 
            });
		});
		
		categoryCommand.saveCategory({ 
            description: "my category", 
            vietDescription: "xin chao",
            level: 0 }, (res) => {
			result = res;
			done();
		});
	});
	
	it("should give a not found as we have not mocked a save method", () => {
		expect(result.status).toBe(404);
        // but the point is that the duplicate no longer stops the save functionality
	});
});

describe("When everything is OK", () => {
	var result,
        testCategory = {
            description: "my category", 
            vietDescription: "xin chao",
            level: 0
        };
    
    beforeEach((done) => {
		spyOn(categoryRepository, "findCategories").and.callFake((callback) => {
			return callback({ categories: [ { _id : 1, description: "other category" } ] });
		});
		
		spyOn(categoryRepository, "saveCategory").and.callFake((categoryData, callback) => {
			return callback({ status: 201, category: testCategory});
		});
		
        categoryCommand.saveCategory(testCategory, (res) => {
                result = res;
                done();
        });
	});
	
	it("should call the save category to db function", () => {
        expect(categoryRepository.saveCategory).toHaveBeenCalled();
	});
    
    it("should have saved the information", () => {
        expect(result.category).toEqual(testCategory);
        expect(result.status).toEqual(201);
    });
});

describe("When there is a parent category", () => {
	var result,
        testCategory = {
            description: "my category", 
            vietDescription: "xin chao",
            level: 1,
            parentCategoryId: "11"
        },
        parentCategory = {
            _id : 11,
            description: "parent category", 
            vietDescription: "fddfx",
            level: 0
        },
        parentCategoryId = 11;
    
    beforeEach((done) => {
		spyOn(categoryRepository, "findCategories").and.callFake((callback) => {
			return callback({ categories: [ parentCategory ] });
		});
		
		spyOn(categoryRepository, "saveCategory").and.callFake((categoryData, callback) => {
			return callback({ status: 201, category: testCategory});
		});
		
        categoryCommand.saveCategory(testCategory, (res) => {
                result = res;
                done();
        });
	});
	
	it("should call the save category to db function", () => {
        expect(categoryRepository.saveCategory).toHaveBeenCalled();
	});
    
    it("should have saved the information", () => {
        expect(result.category.parentCategoryId).toEqual(parentCategoryId);
        expect(result.status).toEqual(201);
    });
});