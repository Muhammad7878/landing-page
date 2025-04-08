import React from "react";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const CallToAction = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">own AI</span> Business
            </h1>
            <Paragraph className="pt-10 ">
              Launch your own AI-powered business in minutes with tools designed
              for simplicity, scalability, and impact. From intelligent
              automation to real-time insights, NexAI gives you everything you
              need to turn ideas into smart solutions — no coding required.
            </Paragraph>

            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                <Button>Get In Touch </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
