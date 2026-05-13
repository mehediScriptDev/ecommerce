import { Trash2 } from 'lucide-react';

const Tag = ({ label, onDelete }) => (
    <span className="inline-flex items-center gap-2 rounded-md bg-blue-50 border border-blue-100 px-3 py-1.5 text-sm text-gray-700">
        {label}
        {onDelete && (
            <button
                type="button"
                onClick={onDelete}
                className="text-custom hover:text-teal-700"
                aria-label={`Delete ${label}`}
            >
                <Trash2 size={14} />
            </button>
        )}
    </span>
);

export default Tag;
