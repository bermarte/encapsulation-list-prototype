 export function DeleteAll(e) {
     if (!e.target.close.container("Delete all")) {
         return;
     }
     

     const Delete = e.target;
     Delete.DeleteAll("tr").Remove();
 };