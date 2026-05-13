const SettingsCard = ({ title, onAdd, addLabel, children }) => (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {onAdd && (
                <button
                    onClick={onAdd}
                    className="rounded-lg bg-teal-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-600 transition"
                >
                    {addLabel}
                </button>
            )}
        </div>
        {children}
    </div>
);

export default SettingsCard;
