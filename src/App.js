import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import UserRoutes from "./utils/UserRoutes";
import AdminRoutes from "./utils/AdminRoutes";
import FirstScreen from "./pages/first-screen";
import Abstain2 from "./pages/abstain2";
import Abstain1 from "./pages/abstain1";
import Abstain from "./pages/abstain";
import DashboardVoteCastedSuccess from "./pages/dashboard-vote-casted-success";
import VoterProfileInformation from "./pages/voter-profile-information";
import DashboardAdminVotingResult from "./pages/dashboard-admin-voting-result";
import DashboardAdminCandidate from "./pages/dashboard-admin-candidate";
import DashboardAdminInfo from "./pages/dashboard-admin-info";
import DashboardVoterChairmenConfi from "./pages/dashboard-voter-chairmen-confi";
import DashboardVoterChairman from "./pages/dashboard-voter-chairman";
import DashboardVoterVicePresident from "./pages/dashboard-voter-vice-president";
import DashboardVoterVicePresident1 from "./pages/dashboard-voter-vice-president1";
import DashboardVoterVicePresident2 from "./pages/dashboard-voter-vice-president2";
import DashboardVoterPresidentConf from "./pages/dashboard-voter-president-conf";
import DashboardVoterVicePresidentConf from "./pages/dashboard-voter-vice-president-conf";
import DashboardVoterPresident from "./pages/dashboard-voter-president";
import DashboardVoterVotingArea from "./pages/dashboard-voter-voting-area";
import DashboardVoterCandidate from "./pages/dashboard-voter-candidate";
import DashboardVoterInfo from "./pages/dashboard-voter-info";
import AdminLogin from "./pages/admin-login";
import DashboardVoterRegisteration from "./pages/dashboard-voter-registeration";
import DashboardVoterRegisteration1 from "./pages/dashboard-voter-registeration1";
import DashboardCandidateRegisteration from "./pages/dashboard-candidate-registration";
import DashboardAdminPhases from "./pages/dashboard-admin-phases";
import UserLogin from "./pages/user-login";
import { useEffect } from "react";
// import Header from "./pages/Header";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    // TODO: Update meta titles and descriptions below
    // ...

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="dashboard-admin-voting-area" data-animate-on-scroll>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route element={<UserRoutes />}>
          <Route path="/abstain-2" element={<Abstain2 />} />
          <Route path="/abstain-1" element={<Abstain1 />} />
          <Route path="/abstain" element={<Abstain />} />
          <Route
            path="/dashboard-vote-casted-success"
            element={<DashboardVoteCastedSuccess />}
          />
          <Route
            path="/voter-profile-information"
            element={<VoterProfileInformation />}
          />
          <Route
            path="/dashboard-voter-chairmen-confirmation"
            element={<DashboardVoterChairmenConfi />}
          />
          <Route
            path="/dashboard-voter-vice-president-selection"
            element={<DashboardVoterVicePresident1 />}
          />
          <Route
            path="/dashboard-voter-vice-president"
            element={<DashboardVoterVicePresident2 />}
          />
          <Route
            path="/dashboard-voter-president-confirmation"
            element={<DashboardVoterPresidentConf />}
          />
          <Route
            path="/dashboard-voter-vice-president-confirmation"
            element={<DashboardVoterVicePresidentConf />}
          />
          <Route
            path="/dashboard-voter-president"
            element={<DashboardVoterPresident />}
          />
          <Route
            path="/dashboard-voter-voting-area"
            element={<DashboardVoterVotingArea />}
          />
          <Route
            path="/dashboard-voter-candidate"
            element={<DashboardVoterCandidate />}
          />
          <Route
            path="/dashboard-voter-info"
            element={<DashboardVoterInfo />}
          />
          <Route
            path="/dashboard-voter-registeration-opt"
            element={<DashboardVoterRegisteration />}
          />
          <Route
            path="/dashboard-voter-registeration"
            element={<DashboardVoterRegisteration1 />}
          />
        </Route>
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
      <Routes>
        <Route element={<AdminRoutes />}>
          <Route
            path="/dashboard-admin-phases"
            element={<DashboardAdminPhases />}
          />
          <Route
            path="/dashboard-candidate-registeration"
            element={<DashboardCandidateRegisteration />}
          />
          <Route
            path="/dashboard-admin-voting-result"
            element={<DashboardAdminVotingResult />}
          />
          <Route
            path="/dashboard-admin-candidate"
            element={<DashboardAdminCandidate />}
          />
          <Route
            path="/dashboard-admin-info"
            element={<DashboardAdminInfo />}
          />
        </Route>

        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
