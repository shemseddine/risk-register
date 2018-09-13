import React from 'react';
import EntryFormModal from '../Shared/EntryFormModal';

const NewEntry = ({open, handleClose}) => {
    return (
        <EntryFormModal open={open} handleClose={handleClose} />
    )
}

export default NewEntry;