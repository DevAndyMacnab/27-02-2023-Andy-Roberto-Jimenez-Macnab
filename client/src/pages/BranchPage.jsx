import { useEffect } from "react"
import BranchCard from "../components/BranchCard";
import { useManage} from "../context/ManageContext";

function BranchPage() {

  const { branch, loadBranch } = useManage();

  useEffect(() => {
    loadBranch();
  }, [])

  return (
    <div>
      <h1 >SUCURSALES</h1>
      <div>
        {branch.map(sucursal => (
          <BranchCard branch={sucursal} key={sucursal.id}></BranchCard>
        ))}
      </div>

    </div>
  )
}

export default BranchPage