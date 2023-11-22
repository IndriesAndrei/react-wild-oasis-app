// custom hook 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi} from "../../services/apiCabins";

export function useDeleteCabin() {
    const queryClient = useQueryClient();
    
    // React Query
    const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
      mutationFn: deleteCabinApi,
      onSuccess: () => {
        toast.success('Cabin successfully deleted!');
        // we want to invalidate the query by name, so it refetch and update the UI after deleting a cabin
        queryClient.invalidateQueries({
          queryKey: ['cabins']
        })
      },
      onError: err => toast.error(err.message),
    });

    return {isDeleting, deleteCabin};
}
