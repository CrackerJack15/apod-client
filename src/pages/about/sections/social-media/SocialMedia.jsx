// Components
import Dropdown from "./dropdown/Dropdown";

// Styles
import styles from "./SocialMedia.module.scss";
import typography from "../../../../styles/Typography.module.scss";

// Assets
import facebook from "../../../../assets/icons/facebook.svg";
import discord from "../../../../assets/icons/discord.svg";
import twitter from "../../../../assets/icons/twitter.svg";
import instagram from "../../../../assets/icons/instagram.svg";

const SocialMedia = () => {
  const data = [
    {
      id: 1,
      img: facebook,
      title: "Facebook",
      data: [
        {
          name: "Arabic",
          link: "https://www.facebook.com/APODArabic",
          maintainers: [
            {
              name: "APOD Arabic Team",
              link: "https://apod.me/team",
            },
          ],
        },
        {
          name: "English",
          link: "http://www.facebook.com/AstronomyPictureOfTheDay",
          maintainers: [
            {
              name: "Paul Connelly",
              link: "mailto:%20Paul%20dot%20Connelly%20at%20att%20dot%20net",
            },
          ],
        },
        {
          name: "Catalan",
          link: "https://www.facebook.com/apod.cat",
          maintainers: [
            {
              name: "Xavier Berenguer",
              link: "http://www.xavierberenguer.net/",
            },
          ],
        },
        {
          name: "Portuguese",
          link: "https://www.facebook.com/apodbrasil/",
          maintainers: [
            {
              name: "Raphael Oliveira",
              link: "mailto:%20rapha_oliveira1%20at%20hotmail.com",
            },
            {
              name: "Patricia Cruz",
              link: "mailto:%20pcruz.astro%20at%20gmail.com",
            },
          ],
        },
        {
          name: "Spanish",
          link: "https://www.facebook.com/apod.es.observatorio/",
          maintainers: [
            {
              name: "Alex Dantart",
              link: "mailto:info%20at%20observatorio.info",
            },
            {
              name: "AstroRed",
              link: "http://astrored.org/",
            },
          ],
        },
        {
          name: "Taiwanese",
          link: "https://www.facebook.com/APOD.Taigi",
          maintainers: [
            {
              name: "An-Li Tsai",
              link: "mailto:%20altsai%20at%20astro.ncu.edu.tw",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      img: instagram,
      title: "Instagram",
      data: [
        {
          name: "Arabic",
          link: "https://www.instagram.com/apod.arabic/",
          maintainers: [
            {
              name: "APOD Arabic Team",
              link: "https://apod.me/team",
            },
          ],
        },
        {
          name: "English",
          link: "https://instagram.com/astronomypicturesdaily/",
          maintainers: [
            {
              name: "Sydney Petz",
              link: "mailto: worldwideyoungastronomers @at@ gmail .dot. com",
            },
          ],
        },
        {
          name: "Indonesian",
          link: "https://www.instagram.com/apod.id/",
          maintainers: [
            {
              name: "Achmad Ardani Prasha",
              link: "mailto: achmadardani7 @at@ gmail .dot. com",
            },
          ],
        },
        {
          name: "Persian",
          link: "https://www.instagram.com/avastarapod/",
          maintainers: [
            {
              name: "AvaStar Team",
              link: "mailto: mag.avastarco @at@ gmail.com",
            },
          ],
        },
        {
          name: "Portuguese",
          link: "https://www.instagram.com/apodbrasil/",
          maintainers: [
            {
              name: "Felipe Navarete",
              link: "mailto: navarete at gmail.com",
            },
            {
              name: "Joaquim Farias",
              link: "mailto: joaquim.filho56 at gmail.com",
            },
          ],
        },
        {
          name: "Taiwanese",
          link: "https://www.instagram.com/apod_taigi/",
          maintainers: [
            {
              name: "An-Li Tsai",
              link: "mailto: altsai at astro.ncu.edu.tw",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      img: twitter,
      title: "Twitter",
      data: [
        {
          name: "Arabic",
          link: "https://twitter.com/APODArabic",
          maintainers: [
            {
              name: "APOD Arabic Team",
              link: "https://apod.me/team",
            },
          ],
        },
        {
          name: "English",
          link: "https://twitter.com/apod/",
          maintainers: [
            {
              name: "Stuart Lowe",
              link: "mailto: slowe at lcogt.net",
            },
          ],
        },
        {
          name: "Portuguese",
          link: "https://twitter.com/apod_brasil",
          maintainers: [
            {
              name: "Raphael Oliveira",
              link: "mailto: rap.oliveira at usp.br",
            },
            {
              name: "Patricia Cruz",
              link: "mailto: pcruz.astro at gmail.com",
            },
          ],
        },
        {
          name: "Taiwanese",
          link: "https://twitter.com/ApodTaigi",
          maintainers: [
            {
              name: "An-Li Tsai",
              link: "mailto: altsai at astro.ncu.edu.tw",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      img: discord,
      title: "Discord",
      data: [
        {
          name: "English",
          link: "Under construction by APOD Developmental Strategist",
          maintainers: [
            {
              name: "Ogetay Kayali",
              link: "mailto: okayali@mtu.edu",
            },
          ],
        },
      ],
    },
  ];

  return (
    <section id="social-media" className={styles.section}>
      <h2
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        Social Media
      </h2>
      <div className={styles.container}>
        {data.map((item) => {
          return <Dropdown key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default SocialMedia;
