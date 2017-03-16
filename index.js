var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  var new_rec = Object.assign({}, object)
  new_rec[key] = value
  return new_rec
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const new_rec = Object.assign({}, object)
  delete new_rec[key]
  return new_rec
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
