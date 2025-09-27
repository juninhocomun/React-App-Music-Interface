import "./index.css";
import MainContainer from "../layout/mainContainer";
import SideMenu from "../layout/sideMenu";
export default function Home() {
  return (
    <div className="home_wrapper generic_wrapper">
      <SideMenu/>
      <MainContainer />
    </div>
  );
}
