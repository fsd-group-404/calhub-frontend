const GroupModal = ({ data, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 backdrop-filter backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-4xl w-full m-auto" style={{ width: '70%' }} onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{data.name}</h3>
                    <p className="text-lg"><strong>ID:</strong> {data.id}</p>
                    <p className="text-lg"><strong>Description:</strong> {data.description}</p>
                    <p className="text-lg"><strong>Member Count:</strong> {data.memberCount}</p>
                    <p className="text-lg"><strong>Rating:</strong> {data.rating} / 5</p>
                    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};


export default GroupModal;