export function Home(props) {
        const { pageType,setPageType}= props

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex flex-column align-items-start gap-2">
        <img src="/icons/Hello.svg" alt="hello" height="72" />
        <h1 className="text-start">I'm Anish</h1>
        <p className="text-start">
          UI/UX Designer, Front-End Developer & Thinker. Based in India.
        </p>
        <div className="d-flex gap-3">
          <button type="button" className="btn btn-outline-warning">
            Download CV
          </button>
          <button type="button" className="btn btn-outline-dark">
            Get in Touch
          </button>
        </div>
      </div>
      <img src="/images/photo.jpg" alt="profile" height="300" />
    </div>
  );
}
