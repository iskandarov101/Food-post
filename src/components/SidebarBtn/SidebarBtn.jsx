
import './SidebarBtn.scss'
const SidebarBtn = ({active, icon})=> {
  return(
    <button className={`sidebar-btn ${active ? 'active' : " "}`}>
      <div className="btn-icon">{icon}</div>
    </button>
  )
};

export default SidebarBtn;