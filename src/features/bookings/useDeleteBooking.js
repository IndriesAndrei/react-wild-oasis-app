// custom hook 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi} from "../../services/apiBookings";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    
    // React Query
    const {isLoading: isDeleting, mutate: deleteBooking} = useMutation({
      mutationFn: deleteBookingApi,
      onSuccess: () => {
        toast.success('Booking successfully deleted!');
        // we want to invalidate the query by name, so it refetch and update the UI after deleting a cabin
        queryClient.invalidateQueries({
          queryKey: ['bookings']
        })
      },
      onError: err => toast.error(err.message),
    });

    return {isDeleting, deleteBooking};
}
