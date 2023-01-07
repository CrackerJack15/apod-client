import { Helmet } from "react-helmet-async";

// Components
import EducationalLink from "./link/";

// Styles
import styles from "./Education.module.scss";

function Education() {
  const content = [
    {
      title: "APOD in the Classroom",
      icon: "🔭",
      link: "http://antwrp.gsfc.nasa.gov/apod/lib/apodclass.html",
      description:
        "How Astronomy Picture of the Day (APOD) is being used as a learning tool by teachers and students.",
    },
    {
      title: "HubbleSite",
      icon: "🛰️",
      link: "http://hubblesite.org/",
      description:
        "Detailed pictures and explanations of Hubble Space Telescope results.",
    },
    {
      title: "Black holes and Neutron Stars",
      icon: "✨",
      link: "http://antwrp.gsfc.nasa.gov/htmltest/rjn_bht.html",
      description:
        "Take a virtual trip to a black hole or neutron star. Have your MPEG movie player ready. Intended for the advanced student, but fun for everyone.",
    },
    {
      title: "Astronomy Picture of the Day Subject Sorted Archive",
      icon: "🗃️",
      link: "https://apod.nasa.gov/apod/lib/aptree.html",
      description:
        "This archive contains Astronomy Pictures of the Day (TM) sorted by subject and is updated monthly.",
    },
    {
      title: "Astronomy with a Stick",
      icon: "☄️",
      link: "http://www.nsta.org/publications/interactive/aws-din/aws.aspx",
      description:
        "Elementary school astronomy activities that can be done with only a stick. Brought to you by the National Science Teachers Association.",
    },
    {
      title: "CosmoQuest",
      icon: "💬",
      link: "https://cosmoquest.org/",
      description:
        "Where professional scientists and the public come together to map other worlds, learn about space, and share what we are discovering.",
    },
    {
      title: "The Exploratorium",
      icon: "🔎",
      link: "http://www.exploratorium.edu/",
      description: "A fun way to explore science for a beginner.",
    },
    {
      title: "Great Debates in Astronomy",
      icon: "🎙️",
      link: "http://antwrp.gsfc.nasa.gov/debate/debate.html",
      description:
        "Do leading astronomers always agree? Not always. Here are detailed accounts of several debates in astronomy starting with the famous Scale of the Universe discussion in 1920 between Curtis and Shapley.",
    },
    {
      title: "Astronomy 101 Online for Free",
      icon: "📖",
      link: "http://asterisk.apod.com/viewforum.php?f=24",
      description:
        "See all the video lectures and Powerpoint slides for a real Introductory Astronomy Course taught at Michigan Technological University.",
    },
    {
      title: "Bad Astronomy Blog",
      icon: "📝",
      link: "http://www.blastr.com/tags/bad-astronomy",
      description:
        "Astronomer Phil Plait's popular blog focusing on popular misconceptions and hoaxes involving astronomy.",
    },
  ];

  return (
    <main className={styles.container}>
      <Helmet>
        <title>Education</title>
      </Helmet>
      <div>
        <h1 className={styles.title}>
          Astronomy Picture of the Day's Educational Links
        </h1>
        <div className={styles["text-container"]}>
          <p className={styles.text}>
            What follows is a list of resources that excel in astronomy
            education. Each resource is distinctly different - they have been
            chosen to highlight a wide range of interests. We believe the list
            is topologically complete in that there are no publicly advertised
            astronomy resources on the WWW that cannot be found by following the
            internal links of these resources. The list is in alphabetical
            order, and is subject to change as the WWW, and our knowledge of it,
            matures.
          </p>
        </div>
      </div>
      <div className={styles["content-container"]}>
        {content.map((item) => {
          return <EducationalLink key={item.title} {...item} />;
        })}
      </div>
    </main>
  );
}

export default Education;
