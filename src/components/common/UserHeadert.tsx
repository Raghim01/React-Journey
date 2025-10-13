import NotificationIcon from "../../assets/notification.svg";
import ProfileIcon from "../../assets/frame.svg";

export function UserHeaderComponent({ label }: { label: string }) {
  return (
    <div className="user-head-component">
      <span>{label}</span>
      <div className="details">
        <div className="notification">
          <NotificationIcon />
        </div>
        <div className="profile">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}
