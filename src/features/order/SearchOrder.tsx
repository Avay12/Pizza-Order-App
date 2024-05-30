import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleOrder}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
