

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
        <img src="/phone.svg" alt="Telefon" className="ico" />
        <span className="text">+46 8 123 122 44</span>
        <img src="/mejl.svg" alt="E-post" className="ico" />
        <span className="text">contact@domain.com</span>
      </div>
      <div className="right">
        <span className="badge"><img src="/Facebook.svg" alt="Facebook" /></span>
        <span className="badge"><img src="/x.svg" alt="X" /></span>
        <span className="badge"><img src="/Instagram.svg" alt="Instagram" /></span>
        <span className="badge"><img src="/Youtube.svg" alt="YouTube" /></span>
      </div>
    </div>
  );
}