import Container from "../shared/Container";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import Info from "../cards/Info";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_1280.jpg"
              alt="About our Mission"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title>About our AI Solution</Title>
          <Paragraph>
            Our AI solution is designed to transform the way businesses operate
            by infusing intelligence into every layer of their workflows. By
            combining machine learning, data analytics, and automation, we
            empower organizations to make smarter decisions, accelerate
            processes, and uncover hidden opportunities.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl ">
          <Info
              title="Mission"
              description="Our mission is to use AI for the good of humanity and the planet."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Vision"
              description="Our vision is to drive business innovation and growth."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
