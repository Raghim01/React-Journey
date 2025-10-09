type NavItemProps = {
  src: string;
  label: string;
  path: string;
};

export function NavItem({ src, label }: NavItemProps) {
  return (
    <div className="nav-item">
      <img src={src} />
      <span>{label}</span>
    </div>
  );
}
