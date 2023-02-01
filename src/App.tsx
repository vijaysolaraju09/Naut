import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import MyClaims from "./pages/my-claims/MyClaims";
import MyCovers from "./pages/my-cover/MyCovers";
import PurchaseCover from "./pages/purchase-cover/PurchaseCover";

function App() {
  // const loginState: LoginPageState = useAppSelector(
  //   (state: RootState) => state.login
  // );
  // const [isAutheticated, setIsAuthenticated] = useState(false);
  // const authGuard = new AuthGuard(<Error401 />);
  // useEffect(() => {
  //   if (!loginState.loading && loginState.data && !loginState.error) {
  //     setIsAuthenticated(true);
  //   } else if (!loginState.loading && !loginState.data && loginState.error) {
  //     setIsAuthenticated(false);
  //   }
  // }, [loginState]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Sidebar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/purchase-cover" element={<PurchaseCover />} />
              <Route path="/my-covers" element={<MyCovers />} />
              <Route path="/my-claims" element={<MyClaims />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
