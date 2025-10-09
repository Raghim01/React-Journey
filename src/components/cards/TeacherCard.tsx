export function TeacherCard() {
  return (
    <div className="teachers-widget-main">
      <div className="teacher-info">
        <div className="teacher-details">
          <div className="avatar"></div>
          <div className="info">
            <span className="name">Abraham Lincoln</span>
            <span className="profession">3D Design</span>
          </div>
        </div>
        <span className="follow">Followed</span>
      </div>
      <div className="statistics">
        <span>32 Task</span>
        <div className="rating">
          <div className="stars">⭐</div>
          <span>4.9 (510 Reviews)</span>
        </div>
      </div>
    </div>
  );
}
