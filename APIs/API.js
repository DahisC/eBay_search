const eBayCategoryList = require('./eBayCategoryList.js').GetCategoriesResponse.CategoryArray.Category;
const eBayBrowseAPI = require('./eBayBrowseAPI.js');

// const eBayCategory = new Object({
//     levelOne: () => eBayCategoryList.filter(category => category.CategoryLevel == 1),
//     levelTwo: parentID => eBayCategoryList.filter(category => category.CategoryLevel == 2 && category.CategoryParentID == parentID),
//     levelThree: parentID => eBayCategoryList.filter(category => category.CategoryLevel == 3 && category.CategoryParentID == parentID),
//     levelFour: parentID => eBayCategoryList.filter(category => category.CategoryLevel == 4 && category.CategoryParentID == parentID),
//     levelFive: parentID => eBayCategoryList.filter(category => category.CategoryLevel == 5 && category.CategoryParentID == parentID),
//     levelSix: parentID => eBayCategoryList.filter(category => category.CategoryLevel == 6 && category.CategoryParentID == parentID),
// });

module.exports = {
    readEbayCategory: () => eBayCategoryList,
    // search: () => eBayBrowseAPI(),
}