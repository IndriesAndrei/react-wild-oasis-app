import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    // FILTER
    const filterValue = searchParams.get('status');
    const filter = !filterValue || filterValue === 'all' ? null : {field: 'status', value: filterValue};

    // SORT
    const sortByRaw = searchParams.get('sortBy') || "startDate-desc";
    const [field, direction] = sortByRaw.split('-');
    const sortBy = {field, direction};

    // PAGINATION
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get("page"));

    // react query
    const {isLoading, data: {data: bookings, count} = {}, error} = useQuery({
        queryKey: ['bookings', filter, sortBy, page], // if filter or sortBy is changed, React query will re-fetch
        queryFn: () => getBookings({filter, sortBy, page})
    });

    // PRE-FETCHING ( to avoid loading spinners when navigating between pages)
    const pageCount = Math.ceil(count / PAGE_SIZE);

    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page + 1], // if filter or sortBy is changed, React query will re-fetch
            queryFn: () => getBookings({filter, sortBy, page: page + 1})
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page - 1], // if filter or sortBy is changed, React query will re-fetch
            queryFn: () => getBookings({filter, sortBy, page: page - 1})
        });

    

    return {isLoading, error, bookings, count};
}