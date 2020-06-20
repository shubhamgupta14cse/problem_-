// iterate through the keys
// assign an object for the key value and return
// check if the key already exist retyur an array

//BCR O(n)

// lets do it by brute approach firsrt and later optimise

function mergeArarys(keys, value) {
  var obj = {};
  if (keys.length !== value.length) return;

  keys.map(( key, index, keys ) => {
    if (obj.hasOwnProperty(key) ) {
      var array = Array.isArray(obj[key])? obj[key]: [obj[key]]
      array.push(value[index]);
      obj[key] = array
    } else {
      obj[key] = value[index]
    }
  })

  return obj
}

var keys = ['username', 'first-name', 'last-name', 'age', 'username'];
var values = ['johndoe', 'John', 'Doe', 35, 'johnny']
console.log("This is the returned value ------->", mergeArarys(keys, values))
