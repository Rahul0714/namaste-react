import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black rounded-md">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">{title}</h3>
        <button
          onClick={() => setIsVisible()}
          className="p-1 rounded bg-violet-500 hover:bg-violet-600 border border-white text-white"
        >
          {isVisible === true ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState("about");

  return (
    <div>
      <h1 className="text-4xl font-bold p-2 m-2 text-center">Instamart</h1>
      <Section
        title="About Us"
        desc="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "about"}
        setIsVisible={() => {
          sectionConfig === "about"
            ? setSectionConfig("")
            : setSectionConfig("about");
        }}
      />
      <Section
        title="Contact Us"
        desc="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "contact"}
        setIsVisible={() =>
          sectionConfig === "contact"
            ? setSectionConfig("")
            : setSectionConfig("contact")
        }
      />
      <Section
        title="Careers"
        desc="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        isVisible={sectionConfig === "career"}
        setIsVisible={() =>
          sectionConfig === "career"
            ? setSectionConfig("")
            : setSectionConfig("career")
        }
      />
    </div>
  );
};

export default Instamart;
