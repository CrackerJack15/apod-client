// Components
import EducationalLink from "./link/EducationalLink";

// Styles
import styles from "./Education.module.scss";
import typography from "../../styles/Typography.module.scss";

const Education = () => {
  const data = [
    {
      title: "APOD in the Classroom",
      link: "http://antwrp.gsfc.nasa.gov/apod/lib/apodclass.html",
      description:
        "How Astronomy Picture of the Day (APOD) is being used as a learning tool by teachers and students.",
    },
    {
      title: "Astronomy 101 Online for Free",
      link: "http://asterisk.apod.com/viewforum.php?f=24",
      description:
        "See all the video lectures and Powerpoint slides for a real Introductory Astronomy Course taught at Michigan Technological University. The class was taught using Wikipedia and APOD instead of a textbook, so that everything is really free and online. Useful for astronomy teachers as well as students!",
    },
    {
      title: "Astronomy with a Stick",
      link: "http://www.nsta.org/publications/interactive/aws-din/aws.aspx",
      description:
        "Elementary school astronomy activities that can be done with only a stick. Brought to you by the National Science Teachers Association.",
    },
    {
      title: "Astronomy Picture of the Day Subject Sorted Archive",
      link: "https://apod.nasa.gov/apod/lib/aptree.html",
      description:
        "This archive contains Astronomy Pictures of the Day (TM) sorted by subject and is updated monthly.",
    },
    {
      title: "Bad Astronomy Blog",
      link: "http://www.blastr.com/tags/bad-astronomy",
      description:
        "Astronomer Phil Plait's popular blog focusing on popular misconceptions and hoaxes involving astronomy.",
    },
    {
      title: "Black holes and Neutron Stars",
      link: "http://antwrp.gsfc.nasa.gov/htmltest/rjn_bht.html",
      description:
        "Take a virtual trip to a black hole or neutron star. Have your MPEG movie player ready. Intended for the advanced student, but fun for everyone.",
    },
    {
      title: "CosmoQuest",
      link: "https://cosmoquest.org/",
      description:
        "Where professional scientists and the public come together to map other worlds, learn about space, and share what we are discovering.",
    },
    {
      title: "The Exploratorium",
      link: "http://www.exploratorium.edu/",
      description: "A fun way to explore science for a beginner.",
    },
    {
      title: "Great Debates in Astronomy",
      link: "http://antwrp.gsfc.nasa.gov/debate/debate.html",
      description:
        "Do leading astronomers always agree? Not always. Here are detailed accounts of several debates in astronomy starting with the famous Scale of the Universe discussion in 1920 between Curtis and Shapley.",
    },
    {
      title: "HubbleSite",
      link: "http://hubblesite.org/",
      description:
        "Detailed pictures and explanations of Hubble Space Telescope results.",
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={typography.headlineLarge}>Education</h1>
      <div className={styles.inner}>
        {data.map((item) => {
          return <EducationalLink key={item.title} {...item} />;
        })}
      </div>
    </main>
  );
};

export default Education;
