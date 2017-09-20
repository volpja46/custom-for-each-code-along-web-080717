function forEach(iterable, callback) {
  if (Array.isArray(iterable)) {
    for(let i = 0; i < iterable.length; i++){
      let element = iterable[i];
      callback(element, i, iterable)
      }
     } else if (typeof iterable === 'object'){
      for(let key in iterable){
        let value = iterable[key];
        callback(value, key, iterable);
      }
    }
  }



// iterable
// something we can iterate over! array or obj
// call back
// function that is applyed to each element in the iterable
