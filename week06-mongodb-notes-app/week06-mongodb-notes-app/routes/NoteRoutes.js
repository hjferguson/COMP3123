const express = require('express');
const router = express.Router();
const Note = require('../models/NotesModel');


//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/', async(req, res) => {
    try{
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
              message: "Request body cannot be empty"
            });
          
          
        }
        const {title, description, priority, dateAdded, dateUpdated} = req.body;
        const newNote = new Note({
            title,
            description,
            priority,
            dateAdded,
            dateUpdated
        });
        
        await newNote.save();
        res.status(200).json({
            status: true,
            message: 'New note created!'
        });
        
    }catch(error){res.status(500);}
    
});
//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/', async(req, res) => {
    try{
        const notes = await Note.find();
        res.status(200).json({
            status: true,
            data: notes
        });
    }catch(error){res.status(500);} 
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/:noteId', async (req, res) => {
    try{
        
        const noteId = req.params.noteId;
        const existingNote = await Note.findOne({_id: noteId});
        if(!existingNote){
            return res.status(400).json({
                status: false,
                message: "Note not found!"
            });
        }else{
            res.status(200).json({
                status: true,
                message: "Note found!",
                existingNote
            })
        }
    }catch(error){
        res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/:noteId', async(req, res) => {
    try{
        // Validate request
        if(Object.keys(req.body).length === 0) {
            return res.status(400).send({
                message: "Request body cannot be empty"
            });
        }

        const noteId = req.params.noteId;
        const existingNote = await Note.findOne({_id: noteId});
        if(!existingNote){
            return res.status(400).json({
                status: false,
                message: 'Note not found!'
            });
        }else{
            let updates = req.body;
            for(let key in updates){
                if(updates[key] !== null && updates[key] !== undefined){
                    if(key === 'priority'){
                        updates[key] = updates[key].toUpperCase();
                    }
                    existingNote[key] = updates[key]
                }
            }
        }
        await existingNote.save();
        res.status(200).json({
            status: true,
            message: 'Note updated!'
        });

    
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'Internal server error!'
        });
    }
   
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/:noteId', async(req, res) => {
    try{
    
        const noteId = req.params.noteId;
        const deletedNote = await Note.findByIdAndDelete(noteId);
        if(!deletedNote){
            return res.status(400).json({
                status: false,
                message: 'Note not found!'
            });
        }else{
            res.status(204).end();
        }
    //TODO - Write your code here to delete the note using noteid
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'Internal server error!'
        })
    }
    
});

module.exports = router;