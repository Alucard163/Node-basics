const fs = require('fs');
const path = require('path');

//File system
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err)

//     console.log('Папка была создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From appendFile',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')

//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(Buffer.from(data).toString())
//                     } 
//                 )
//             }
//             )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
       if (err) throw err 

       console.log('Файл переименован')
    }
    )

