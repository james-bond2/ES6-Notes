// importing file

// Import is a method by which we can bring any exported item, and use it to the importing file

/* If you want to import some specific items from the exporting file, then you have to use the `NAMED IMPORT`. Even if
you don't know the items name to import, then you can follow the second example */

// example #1

import {name,roll} from './export.js'       // named import

console.log(name , roll)        // here we bring the 'name' and 'roll' variable from the 'export.js' file

// example #2 .

// if you use this method, you will get all items in an Object. so, then you will need to use them by (.) 'dot' notation

import * as all from './export.js'          // named import
console.log(all)
console.log(all.roll)                   // get item using dot notation

// example #3

// if you want to import any item from the exporting file changing the item's name, you can follow the example #3

import {name as personName, roll as proffesion} from './export.js'      // named function
console.log(personName,proffesion)

// Default Import/Export

// Default import is, when you set any default item to export, you will get them default in the importing file

// example #1

import exportFile from './export.js'        // default import.
exportFile()
 /* Remember if you import like this example, you will just get the default items, which you set to export default .
 but if you want to import the other exported files, which are not default , you can do that. follow the example #2 */

// example #2

import exportFile2 , {salary} from './export.js'

console.log(salary)
exportFile2()