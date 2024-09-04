"use client";

import { TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type QueryParamsSearchProps = {
  search?: string;
};
const QueryParamsSearch = ({ search }: QueryParamsSearchProps) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(search || "");
  const [debouncedSearch] = useDebounce(searchValue, 500);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("search", debouncedSearch.toString());
    push(`${pathname}?${newSearchParams.toString()}`);
  }, [debouncedSearch, push, searchParams, pathname]);

  return (
    <TextField
      placeholder="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default QueryParamsSearch;
