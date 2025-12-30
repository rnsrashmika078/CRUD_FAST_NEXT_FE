import React from "react";

const Table = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <table className="border rounded-xl  overflow-hidden">
                <thead className="bg-black border">
                    <tr className="">
                        <th className="border w-32 p-2">Id</th>
                        <th className="border w-32 p-2">First Name</th>
                        <th className="border w-32 p-2">Last Name</th>
                        <th className="border w-32 p-2">Age</th>
                        <th className="border w-32 p-2">Skills</th>
                        <th className="border w-32 p-2">Marital Status</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default Table;
