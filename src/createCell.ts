interface GetValue<T> {
  () : T
}
interface SetValue<T> {
  (next:T): T
}

export interface Cell<T> {
  getValue:GetValue<T>
  setValue:SetValue<T>
}

export function createCell<T>(initialValue:T):Cell<T>{
  let value: T = initialValue;
  const getValue: GetValue<T> = function getValue(){
    return value;
  }
  const setValue:SetValue<T> = function setValue(next:T){
    value = next;
    return next;
  }
  return {getValue, setValue}
}