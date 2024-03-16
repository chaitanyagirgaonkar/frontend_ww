import React, { useState } from 'react';
import { FaEdit, FaEye, FaFilePdf } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';
import EditReport from './EditReport';
import ViewReport from './ViewReport';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


function ReportCard({ r, onEditPdf, onUpdateReport, onDeletePdf }) {
    const { viewReport, setViewReport } = useAuth()
    const [isEditing, setIsEditing] = useState(false);


    const handleDelete = async (reportId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Note?');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`/v1/report/${reportId}`);
                toast.success('Note deleted Successfully !');
                onDeletePdf(reportId);


            } catch (err) {
                console.log(err);
            }
        }
    };


    const handleEditNote = () => {
        setIsEditing(true);
        onEditPdf();
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className='flex rounded-md border p-2 pl-4 pr-4 w-[80%] justify-between'>
            <div><FaFilePdf size={30} className="text-red-600" /></div>
            <div><h1 className='text-xl font-semibold'>{r.title}</h1></div>
            <div className='flex gap-3 justify-center items-center'>
                <FaEdit size={26} className="text-green-600 cursor-pointer" onClick={handleEditNote} />
                <FaEye size={26} className="text-blue-600 cursor-pointer" onClick={() => setViewReport(prev => !prev)} />
                <MdDeleteOutline size={26} className="text-red-600 cursor-pointer" onClick={() => handleDelete(r?._id)} />
            </div>
            {isEditing && (
                <EditReport reportDetails={r} onCancelEdit={handleCancelEdit} onUpdateReport={onUpdateReport} />
            )}
            {
                viewReport &&
                <ViewReport reportId={r?._id} />
            }
        </div>
    );
}

export default ReportCard;
