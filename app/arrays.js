exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // iterate over the array
    for(var i = 0; i < arr.length; i++) {
      // check if current index === item
      if(arr[i] === item) {
        // return current index
        return i;
      }
    }
    // after checking all indexes return -1 since it is not in array
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(acc, element){
      return acc += element;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(el){
      return el !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        this.removeWithoutCopy(arr, item);
      }
    }
    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
