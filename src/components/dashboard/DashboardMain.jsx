import AddNew from "./AddNew/AddNew";
import AllVideos from "./AllVideos/AllVideos";
import css from "./DashboardMain.module.css";

const DashboardMain = () => {
  return (
    <div>
      <h1 className={css.title}>Administrador de Solidaria Media</h1>
      <AddNew />
      <AllVideos />
    </div>
  );
};

export default DashboardMain;
