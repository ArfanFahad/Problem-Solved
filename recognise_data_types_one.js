
function delcareVariable () {
    let str = "Hi";
    let num = 40;
    let bool = true;
    let undef;
    let nul = null;
    let obj = { name: 'Prime', age: 45 }; 
    let sym = Symbol('unique');

    console.log(`String: ${str}, type: ${typeof str}`);
    console.log(`Number: ${num}, type: ${typeof num}`);
    console.log(`Boolean: ${bool}, type: ${typeof bool}`);
    console.log(`Undefined: ${undef}, type: ${typeof undef}`);
    console.log(`Null: ${nul}, type: ${typeof nul}`);
    console.log("Object: ", obj, "Type: ", typeof obj);
    console.log("Symbol: ", sym, "Type: ", typeof sym);
}

delcareVariable();