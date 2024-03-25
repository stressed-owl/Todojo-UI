import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ContactForm from "./contactForm/ContactForm";

const About = () => {
  const aboutText = useRef(null);

  useEffect(() => {
    const typed = new Typed(aboutText.current, {
      strings: ["About Todojo"],
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mt-[175px] sm:text-center">
      <p>&#47;&#47; About</p>
      <span className="font-bold text-[54px] lg:text-[26px]" ref={aboutText}></span>
      <div>
        <hr className="mt-4 border-black" />
        <p className="mt-4 text-[13px]">
          DISCOVER OUR STORY: UNVEILING THE ESSENCE OF TODOJO
        </p>
        <hr className="mt-16 border-black" />
      </div>
      <div className="mt-6">
        <article>
          <span className="font-semibold text-[36px] lg:text-[26px]">Our Mission</span>
          <section className="mt-2">
            <p className="max-w-[800px] text-justify lg:text-[14px]">
              Welcome to Todojo, where simplicity meets productivity! Our
              mission is to empower individuals and teams to achieve their goals
              and manage their tasks efficiently. We understand the importance
              of staying organized in today's fast-paced world, and Todojo is
              here to help you streamline your daily tasks with ease.
            </p>
          </section>
        </article>

        <hr className="mt-16 border-black" />

        <article className="mt-6 flex flex-col items-end sm:items-center">
          <span className="font-semibold text-[36px] lg:text-[26px]">What is Todojo?</span>
          <section className="mt-2">
            <p className="max-w-[800px] text-justify lg:text-[14px]">
              Todojo is a versatile and user-friendly task management
              application designed to enhance your productivity and simplify
              your life. Whether you're a busy professional, a student juggling
              multiple assignments, or someone just looking to stay organized,
              Todojo provides the tools you need to stay on top of your tasks
              and accomplish more every day.
            </p>
          </section>
        </article>

        <hr className="mt-16 border-black" />

        <article className="mt-6">
          <span className="font-semibold text-[36px] lg:text-[26px]">Key Features</span>
          <section className="mt-2 lg:text-[14px]">
            <ul className="flex flex-col gap-y-4 max-w-[700px] list-disc list-inside sm:list-none sm:text-center">
              <li className="text-justify">
                Intuitive Interface: Todojo boasts a clean and intuitive design,
                making it easy for users of all levels to navigate and use the
                app seamlessly.
              </li>
              <li className="text-justify">
                Task Organization: Categorize your tasks, set due dates, and
                prioritize effortlessly. Todojo helps you keep track of
                everything on your to-do list.
              </li>
              <li className="text-justify">
                Collaboration: Share tasks and projects with colleagues,
                friends, or family members to collaborate and achieve common
                goals together.
              </li>
              <li className="text-justify">
                Reminders and Notifications: Stay on top of your tasks with
                timely reminders and notifications. Never miss an important
                deadline again!
              </li>
              <li className="text-justify">
                Cross-Platform Sync: Access your tasks from anywhere, whether
                you're using Todojo on your smartphone, tablet, or computer.
                Your tasks sync across all your devices in real-time.
              </li>
            </ul>
          </section>
        </article>

        <hr className="mt-16 border-black" />

        <article className="mt-6 flex flex-col items-center">
          <span className="font-semibold text-[36px] lg:text-[26px]">Our Team</span>
          <section className="max-w-[800px] flex flex-col mt-2">
            <p className="text-center lg:text-[14px]">
              Todojo was developed by a passionate team of individuals who
              believe in the power of organization and productivity. Meet the
              minds behind the app:
            </p>
            <div className="mt-[100px]">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-xl lg:text-[18px]">Nikolay Ponomarenko</span>
                <p className="mt-2 text-center mt-4 lg:text-[15px]">
                  Nikolay is the visionary behind Todojo, bringing his extensive
                  experience in development and business to the table. Nikolay
                  envisioned a tool that would not only simplify task management
                  but also inspire users to reach new heights of productivity.
                </p>
              </div>
              <div className="flex flex-col items-center mt-7">
                <span className="font-semibold text-xl lg:text-[18px]">Marina Koval</span>
                <p className="mt-2 text-center mt-4 lg:text-[15px]">
                  As the Lead Developer of Todojo, Marina is the technical
                  genius responsible for translating ideas into reality. With a
                  background in Full Stack development, she has played a pivotal
                  role in crafting the app's robust architecture. Marina ensures
                  that Todojo remains cutting-edge and user-friendly.
                </p>
              </div>
              <div className="flex flex-col items-center mt-7">
                <span className="font-semibold text-xl lg:text-[18px]">Nikki Avery</span>
                <p className="mt-2 text-center mt-4 lg:text-[15px]">
                  The creative force shaping Todojo's aesthetic appeal is none
                  other than Nikki. Nikki brings a keen eye for design and a
                  passion for user experience to the team. Through thoughtful
                  design choices, she has made Todojo not just a functional tool
                  but a delight to interact with.
                </p>
              </div>
            </div>
          </section>
        </article>

        <hr className="mt-16 border-black" />

        <article className="mt-6 flex flex-col items-center text-center">
          <span className="font-semibold text-[36px] lg:text-[26px]">Contact Us</span>
          <section className="max-w-[800px] mt-2 lg:text-[14px]">
            <p className="text-center">
              Have questions, feedback, or suggestions? We'd love to hear from
              you! Reach out to us at{" "}
              <span className="font-bold">[contact@todojoapp.com]</span> or
              through our contact form down below. Your input helps us improve
              and tailor Todojo to better suit your needs.
            </p>
          </section>
        </article>
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
