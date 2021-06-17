const Cards: React.FC = () => (
  <div cx="cards">
    <div cx="card">
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="content">
        <h2 cx="name">Training &amp; Placement Cell</h2>
        <p cx="address">
          IIIT Kota Office
          <br />
          2nd Floor, Prabha Bhawan
          <br />
          MNIT Jaipur, RJ 302017
        </p>

        <a href="mailto:placements@iiitkota.ac.in" cx="email">
          placements@iiitkota.ac.in
        </a>
        <p cx="phone">
          <a href="tel:+911412715071">0141 271 5071</a>
        </p>
      </div>
    </div>

    <div cx="card">
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="content">
        <h2 cx="name">Dr. Ashish Sharma</h2>
        <p cx="address">
          Coordinator
          <br />
          Training &amp; Placement Cell
          <br />
          IIIT Kota
        </p>

        <a href="mailto:ashish@iiitkota.ac.in" cx="email">
          ashish@iiitkota.ac.in
        </a>
        <p cx="phone">
          <a href="tel:+919549650767">+91 95496 50767</a>
        </p>
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => (
  <section cx="sect" id="contact-us">
    <div cx="ctr">
      <h1 cx="title">Contact Information</h1>
      <Cards />
    </div>
  </section>
);

export default Contact;