export function TeacherCard() {
  return (
    <div className="teachers-widget-main">
      <div className="teacher-info">
        <div className="teacher-details">
          <div className="avatar"></div>
          <div className="info">
            <span className="name">Curious George</span>
            <span className="profession">UI UX Design</span>
          </div>
        </div>
        <span className="follow">+ Follow</span>
      </div>
      <div className="statistics">
        <span>40 Task</span>
        <div className="rating">
          <div className="stars">⭐</div>
          <span>4.7 (750 Reviews)</span>
        </div>
      </div>
    </div>
  );
}
