const ProductTagList = ({ products, onRemove }) => {
    if (!products.length) return null;

    return (
        <div className="mt-3 flex flex-wrap gap-2">
            {products.map((product, index) => (
                <span
                    key={`${product}-${index}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700"
                >
                    {product}
                    <button
                        type="button"
                        onClick={() => onRemove(index)}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label={`Remove ${product}`}
                    >
                        ×
                    </button>
                </span>
            ))}
        </div>
    );
};

export default ProductTagList;
