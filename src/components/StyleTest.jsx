import React from 'react';

const StyleTest = () => {
    return (
        <div className="p-8 bg-blue-100 border border-blue-400 rounded-lg">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
                Tailwind CSS Test
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-200 text-green-800 rounded">Green Box</div>
                <div className="p-4 bg-yellow-200 text-yellow-800 rounded">Yellow Box</div>
            </div>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                Test Button
            </button>
        </div>
    );
};

export default StyleTest;