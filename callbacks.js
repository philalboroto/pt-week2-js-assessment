//Make the following function calls work

  var giveItName = function(var1, cb) {
      cb(var1);
  };

  giveItName(name, function(){
    alert('Your name is ' + name);
  });



  var nums = [2,4,5,6];

  var areEvens = function(arrayName, cb) {
      var item = 0;
          for (var i = 0; i < arrayName.length; i++) {
              item += arrayName[i];
          }
      cb(item);
  };

  //returns true if all items in the array are evens.
  areEvens(nums, function(item){
    return item % 2 === 0; 
  });

