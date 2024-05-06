const AboutPage = () => {
  return (
    <>
      <h3 style={{ fontFamily: "Arial, sans-serif" }}>About Me</h3>
      <p
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          width: '60%',
          textAlign: "justify",
          lineHeight: 2,
          color: '#FFF6F4'
        }}
      >
        As a recent graduate from the{" "}
        <strong style={{ color: "#e76f51"}}>University of Virginia</strong>, I
        bring a versatile skill set in{" "}
        <span
          style={{
            
            padding: "0 4px",
          }}
        >
          finance
        </span>
        ,{" "}
        <span
          style={{
           
            padding: "0 4px",
          }}
        >
          software engineering
        </span>
        , and{" "}
        <span
          style={{
            fontWeight:'700',
            padding: "0 4px",
            color: '#F0F8FF'
          }}
        >
          technical product management
        </span>
        , blending analytical acumen with a passion for technological
        innovation. <br /> My educational journey has not only equipped me with
        technical expertise but also honed my ability to adapt and thrive in
        dynamic environments. <br /> Outside of work, I immerse myself in the vibrant
        rhythms of <span style={{ color: '#FFA07A', fontWeight:'700'}}>Latin music</span>,
        expressing creativity and joy through {' '}
        <strong style={{ color: '#F0F8FF', fontWeight:'700' }}>Salsa</strong> and{" "}
        <strong style={{ color: '#F0F8FF', fontWeight:'700' }}>Bachata</strong> dancing. Committed
        to personal growth and wellness, I also dedicate time to fitness,
        ensuring a balanced and energetic approach to both my professional and
        personal life.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
