import { useRef, useState } from "react";
import { ImagePlus, X } from "lucide-react";

const ImageUploader = ({ value, onChange, label = "Upload Image" }) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(value || "");

  const handleChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
    onChange(file);
  };

  const removeImage = () => {
    setPreview("");
    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      {preview ? (
        <div className="relative overflow-hidden rounded-xl border border-slate-200">
          <img
            src={preview}
            alt="Preview"
            className="h-52 w-full object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute right-3 top-3 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-52 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-500 transition hover:border-blue-500 hover:bg-blue-50"
        >
          <ImagePlus size={32} />

          <span className="mt-3 text-sm font-medium">
            Click to upload image
          </span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
