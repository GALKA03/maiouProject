import {Heading} from "../components/Heading"
import Gallery from "./Gallery"

const Progetti = () => {
    return (
        <div className="p-10">
        <Heading /*text='Progects'*/ />
            <Gallery />
            </div>
    )
   
}
export default Progetti
// const express = require('express')
// const app = express()

// app.get('/data', (req, res,next) => {
//     res.json({
//         status: 'success', code: 200,
//     data:{data}})
// })
// app.get('/contact/:id', (req, res) => {
//     const contact= contacts.filter(el =>el.id===id)
//     res.json({
//     status: 'success',
//     code: 200,
//     data: { contact },
//   })
// })
// app.post('/contact/:id', (req, res,next) => {
//     const id = req.params.id
//     const { name, number } = req.body;
//     const task = {
//     id: nanoid(),
//     name,
//     number,
//   };

//  contacts.push(task);

//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: { task },
//   });
//     // const newContact = new Contact({ name, number })
//     // newContact.save()
// const contact = contacts.filter(el => el.id === id);
//   res.json(contact);
   
// })
// router.put('/tasks/:id', (req, res, next) => {
//   const { id } = req.params;
//   const { title, text } = req.body;
//   const [task] = tasks.filter(el => el.id === id);
//   task.title = title;
//   task.text = text;
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { task },
//   });
// });
// router.patch('/tasks/:id/status', (req, res, next) => {
//   const { id } = req.params;
//   const { done } = req.body;
//   const [task] = tasks.filter(el => el.id === id);
//   task.done = done;
//   res.json({
//     status: 'success',
//     code: 200,
//     data: { task },
//   });
// });



// app.listen(3000, () => {
//     console.log('port listening 3000')
// })
