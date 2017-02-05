/**
 * Extends a class definition with another class definition.
 * 
 * @author Joseph Fehrman
 * @since 07/09/2016
 * @param extendedObject Class that will have the class definition extended.
 * @param extendingObject Class that will extend another class' definition.
 */
function extend(extendedObject, extendingObject){
  for(var property in extendingObject){
    extendedObject[property] = extendingObject[property];
  }
  extendedObject.super = extendingObject;
  return extendedObject;
}

/**
 * Extends a class without overwriting properties that already exists.
 * TODO Depricated function to be removed.
 * 
 * @param extendedObject Class that will have the class definition extended.
 * @param extendingObject Class that will extend another class' definition.
 * @depricted
 */
function safeExtend(extendedObject, extendingObject){
  for(var property in extendingObject){
    if(typeof extendedObject[property] == 'undefined'){
      console.log(extendedObject[property]);
      extendedObject[property] = extendingObject[property];
    }
  }
      return extendedObject;
}
