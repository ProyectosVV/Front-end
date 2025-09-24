import { Header } from "@/components/encabezado"
import { BottomNavigation } from "@/components/navegacion-de-fondo"
import { PanelDeControl } from "../Administrador/Panel-de-control";
import { MainContent } from "./MainContent";

export function Menuadmin  () {
    return (
      <div className="">
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
        <BottomNavigation />
    </div>
    );
};
