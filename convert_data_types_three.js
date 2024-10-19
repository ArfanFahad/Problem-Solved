 /*   Problem: Convert between data types.
  - Task: Write functions that convert:
    - String to Number (e.g., `"123"` → `123`)
    - Number to String (e.g., `123` → `"123"`)
    - Boolean to String/Number, etc.     */

 
 function string_to_number (data) {
    return Number(data);
 }
 console.log(string_to_number("98"));
 

function number_to_string (data) {
    return String(data);
}
console.log(number_to_string(87.4));


function boolean_to_string (data) {
    return String(data);
}
console.log(boolean_to_string(true));


function string_to_boolean (data) {
    return Boolean(data);
}
console.log(string_to_boolean(false));
