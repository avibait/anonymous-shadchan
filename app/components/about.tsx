// components/CopyText.js
// "use client";
import { useState } from "react";

const About: React.FC = () => {
  return (
    <div className="content-center">
      <p>
        We are a few young Lubavitcher couples in our community hoping to make a
        difference in the Chabad shidduch scene. How? By leveraging the
        knowledge of each individual, we aim to facilitate as many shidduchim as
        possible.
      </p>
      <p className="py-8">
        Here&apos;s how it works: Submit a shidduch suggestion anonymously by
        sharing details about a potential match. Our dedicated team will then
        reach out to both parties, informing them that someone has suggested the
        shidduch.
      </p>
      <p>
        If your suggestion leads to an engagement, submit your Shidduch ID and
        you’ll receive a $500 reward for.
      </p>
      <p className="py-8">
        Questions or comments? Email us at admin@anonymousshadchan.com
      </p>
    </div>
  );
};

export default About;
