/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
type typeAnyObj={};

function merge(
  objA: Partial<typeAnyObj>,
  objB: Partial<typeAnyObj>
): Partial<typeAnyObj> {
  return Object.assign(objA, objB);
}

export {}