"use client"
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    router.push(`/post?search=${encodeURIComponent(searchTerm)}`);
    
  };

  return (
    <form className="max-w-md mx-auto p-4 md:py-4 pt-6" onSubmit={handleSearch}>
      <div className="relative bg-white rounded-md">
        <input
          type="input"
          id="default-search"
          name="search"
          className="block w-full p-2 text-sm text-black bg-clip-text"
          placeholder="Search"
          style={{ appearance: 'textfield' }}
        />
        <button type="submit" className="text-black absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
