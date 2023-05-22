// import { useState } from "react";

export const sortPrice = (listToSort) => {
  const listTemp = [...listToSort];
  return listTemp.sort((a, b) => a.price - b.price);

};
// export  sortPrice ;
