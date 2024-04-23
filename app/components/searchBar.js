import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-9 relative flex">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleChange}
        className="flex-1 border border-gray-300 px-4 py-2 text-black rounded-md focus:outline-none focus:border-blue-400 shadow-sm"
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 8px 12px rgba(25, 25, 112, 0.5)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
        }
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none ml-2"
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 8px 12px rgba(25, 25, 112, 0.5)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
        }
      >
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
