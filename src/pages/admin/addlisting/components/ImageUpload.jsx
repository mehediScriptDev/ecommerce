import { useRef } from 'react';

const ImageUpload = ({ images, onFilesAdded, onRemove }) => {
    const fileInputRef = useRef(null);

    const handleImageDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        onFilesAdded(files);
    };

    const handleImageSelect = (e) => {
        const files = Array.from(e.target.files);
        onFilesAdded(files);
    };

    return (
        <div>
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleImageDrop}
                onClick={() => fileInputRef.current.click()}
                className="w-full border border-gray-200 rounded-lg bg-white cursor-pointer flex flex-col items-center justify-center py-16 gap-2 hover:border-teal-400 transition-colors"
            >
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>⊕ JPEG, PNG</span>
                    <span>⊕ Max 20 photos</span>
                    <span>⊕ 1920×1080px recommended</span>
                </div>
                {images.length > 0 && (
                    <p className="text-xs text-teal-600 mt-1">{images.length} file(s) selected</p>
                )}
            </div>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                multiple
                className="hidden"
                onChange={handleImageSelect}
            />
        </div>
    );
};

export default ImageUpload;
