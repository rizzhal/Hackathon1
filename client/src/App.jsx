
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./router";


function App () {
  return(
    <div>
      <RouterProvider router={router}/>
      <Toaster richColors position="top-right" closeButton />
    </div>
  )
}
export default App;