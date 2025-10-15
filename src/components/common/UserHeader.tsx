import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export function UserHeaderComponent({ label }: { label: string }) {
  return (
    <div className="user-head-component">
      <span>{label}</span>
      <div className="details">
        <div className="notification">
          <NotificationsNoneOutlinedIcon
            sx={{ fontSize: "1.25rem", color: "#383838ff" }}
          />
        </div>
        <div className="profile">
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: "1.25rem", color: "#383838ff" }}
          />
        </div>
      </div>
    </div>
  );
}
