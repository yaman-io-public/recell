import { useEffect, useState } from "react";
import { Cell, createCell } from "./createCell";

interface SetRecellValue<T> {
  (next?:T): void
}

interface UseRecellValue<T> {
  (): T|undefined
}

interface RecellEffect<T> {
  (next?:T): void
}

interface Recell<T> {
  setRecellValue: SetRecellValue<T>
  useRecellValue: UseRecellValue<T>
  recellEffect: RecellEffect<T>
}

interface Disconnect {
  ():void;
}

interface Vein<T> {
  connect: (connectionId?:string)=>Disconnect;
  deliver: ()=>T|undefined;
}

export function createRecell<T>():[SetRecellValue<T>, UseRecellValue<T>, RecellEffect<T>]{
  let cell:Cell<T>|undefined;
  let connectionGenerator = 0;

  const vienMap:Record<string, Vein<T>> = {};

  function createDefaultVein(connectionId:string){
    function deliver() {

    }
    function connect(connectionId){
      
    }
  }



  const useRecellValue:UseRecellValue<T> = function useRecellValue<T>(connectionId?:string){
    const [innerConnectionId, setInnerConnectionId] = useState<string>()
    const [value, setValue] = useState<T|undefined>(cell?.getValue())



  useEffect(()=>{
    connectionGenerator +=1;
    const nextConnectionId:string = connectionId || `recell-${connectionGenerator}`
    
  },[])

  return value;
}

}