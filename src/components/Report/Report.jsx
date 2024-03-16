import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReportCard from './ReportCard';
import useAuth from '../../hooks/useAuth';
import AddReport from './AddReport';

function Report() {
    const { addReport, setAddReport } = useAuth();
    const [report, setReport] = useState([]);

    useEffect(() => {
        axios.get("/v1/report/getAllreports")
            .then((res) => {
                console.log(res.data.data);
                setReport(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handlePdfAdded = (newPdf) => {
        setReport([...report, newPdf]);
    };

    const handleEditPdf = () => {
        setReport(prevReport => prevReport.map(r => ({ ...r }))); // Forces a re-render
    };

    const updateReport = (updatedReport) => {
        const updatedReportIndex = report.findIndex(r => r._id === updatedReport._id);
        if (updatedReportIndex !== -1) {
            const updatedReportList = [...report];
            updatedReportList[updatedReportIndex] = updatedReport;
            setReport(updatedReportList);
        }
    };
    const handleDeletePdf = (reportId) => {
        setReport(report.filter((r) => r._id !== reportId));
    }

    return (
        <div className='flex flex-col gap-5 rounded-lg bg-[#f5f5f5] p-5'>
            <div className='bg-white p-3 rounded-lg'>
                <h1 className='text-blue-500 text-lg font-semibold'>Medical Report's</h1>
            </div>
            <div className='bg-white p-3 rounded-lg flex justify-between items-center'>
                <input type="text"
                    className='w-1/2 border border-blue-500 p-1 rounded-md px-5'
                    placeholder='Search..'
                />
                <div className='flex gap-3'>
                    <button className="border border-blue-500 rounded-lg bg-blue-500 text-white px-4 py-2" >Share</button>
                    <button className="border border-blue-500 rounded-lg bg-blue-500 text-white px-4 py-2" onClick={() => setAddReport(prev => !prev)}>Add Report</button>
                </div>
            </div>

            <div className='flex flex-col  gap-5 bg-white p-5 justify-center items-center rounded-lg'>
                {report.map((r, index) => (
                    <ReportCard key={index} r={r} onDeletePdf={handleDeletePdf} onEditPdf={handleEditPdf} onUpdateReport={updateReport} />
                ))}
            </div>

            {addReport && <AddReport onPdfAdded={handlePdfAdded} />}
        </div>
    );
}

export default Report;
