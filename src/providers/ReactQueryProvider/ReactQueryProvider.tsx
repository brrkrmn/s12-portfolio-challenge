import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../utils/queryClient";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const qClient = queryClient();
  return (
    <QueryClientProvider client={qClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;