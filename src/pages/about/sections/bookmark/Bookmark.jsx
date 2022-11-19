// Components
import Info from "../../components/info/Info";
import OuterLink from "../../../../components/links/OuterLink";

// Styles
import styles from "../../About.module.scss";
import typography from "../../../../styles/Typography.module.scss";

function Bookmark() {
  const websites = [
    {
      name: "Algeria",
      tooltip: "(in Arabic from the \nSirius Astronomy Association)",
      link: "http://www.apodar.com/",
      maintainers: [
        {
          name: "Sirius Astronomy Association",
          link: "http://siriusalgeria.net/",
        },
        {
          name: "Abdrahman Zoghbi",
          link: "mailto:%20azoghbi%20at%20astro%20dot%20umd%20dot%20edu",
        },
      ],
    },
    {
      name: "Austria",
      tooltip: "(in German)",
      link: "http://www.starobserver.org/",
      maintainers: [
        {
          name: "Maria Pflug-Hofmayr",
          link: "mailto:office%20at%20der-orion.com",
        },
      ],
    },
    {
      name: "Bulgaria",
      tooltip: "(in Bulgarian from MediaBricks.bg)",
      link: "https://mediabricks.bg/apod-bulgaria",
      maintainers: [
        {
          name: "Valkan Goranov",
          link: "mailto:%20gvalkan%20at%20mediabricks.bg",
        },
      ],
    },
    {
      name: "Canada",
      tooltip: "(in French)",
      link: "https://dpelletier.profweb.ca/index.html",
      maintainers: [
        {
          name: "Donald Pelletier",
          link: "mailto:%20pelletierdonald806@gmail.com",
        },
      ],
    },
    {
      name: "China",
      tooltip: "(in Chinese from Beijing Planetarium)",
      link: "http://www.bjp.org.cn/apod/today.html",
      maintainers: [
        {
          name: "Chen chang",
          link: "mailto:%20cc604.zj%20at%20gmail.com",
        },
      ],
    },
    {
      name: "Croatia",
      tooltip: "(in Croatian)",
      link: "http://www.apod.rs/Croatia.html",
      maintainers: [
        {
          name: "Liliana Gracanin",
          link: "http://abload.de/img/zel-prevodilaci2u5o.jpg",
        },
      ],
    },
    {
      name: "Czech Republic",
      tooltip: "(in Czech)",
      link: "http://www.astro.cz/apod/",
      maintainers: [
        {
          name: "Josef Chlachula",
          link: "mailto:apod4jch%20at%20astro.cz",
        },
      ],
    },
    {
      name: "France",
      tooltip: "(in French from Ciel des Hommes)",
      link: "http://www.cidehom.com/apod.php",
      maintainers: [
        {
          name: "Didier Jamet",
          link: "mailto:%20jamet.didier%20at%20gmail.com",
        },
      ],
    },
    {
      name: "Indonesia",
      tooltip: "(in Indonesian)",
      link: "http://apod.infoastronomy.org/",
      maintainers: [
        {
          name: "Riza Miftah Muharram",
          link: "mailto:%20riza.official%20at%20outlook.com",
        },
      ],
    },
    {
      name: "Iran",
      tooltip: "(in Farsi translated by \nSanaz Mostafazadeh)",
      link: "http://www.skypix.org/apod/",
      maintainers: [
        {
          name: "Sanaz Mostafazadeh",
          link: "https://www.instagram.com/sanaz_mosti/",
        },
        {
          name: "Mohammad Rahimi",
          link: "http://www.skypix.org/rahimi",
        },
      ],
    },
    {
      name: "Italy",
      tooltip: "(in English from Observatorio Astronomico di Brera)",
      link: "http://www.brera.mi.astro.it/apod/",
      maintainers: [
        {
          name: "Cristina Bernasconi",
          link: "mailto:%20cristina.bernasconi%20at%20brera.inaf.it",
        },
      ],
    },
    {
      name: "Israel",
      tooltip: "(in Hebrew, translated by Reshit Mada)",
      link: "http://www.astronomia2009.org.il/info/apod/apod.htm",
      maintainers: [
        {
          name: "Yair Grinberg",
          link: "mailto:%20yair%20at%20reshitmada.org",
        },
      ],
    },
    {
      name: "Japan",
      tooltip: "(in Japanese and English)",
      link: "http://home.u05.itscom.net/apodjpn/apodj/apodj0.htm",
      maintainers: [
        {
          name: "Aiichirou Niwa",
          link: "mailto:apodjpn%20at%20n08.itscom.net",
        },
      ],
    },
    {
      name: "Korea",
      tooltip: "(in Korean and English from WouldYouLike)",
      link: "http://wouldyoulike.org/apod",
      maintainers: [
        {
          name: "WouldYouLike",
          link: "http://wouldyoulike.org/",
        },
        {
          name: "Woongbae Zee",
          link: "mailto:%20wim0705%20at%20naver%20dot%20com",
        },
      ],
    },
    {
      name: "Montenegro",
      tooltip: "(in Montenegrin)",
      link: "http://www.apod.rs/Montenegro.html",
      maintainers: [
        {
          name: "Plavi and Liliana Gracanin",
          link: "http://abload.de/img/pf-prevodilacqrs57.jpg",
        },
      ],
    },
    {
      name: "Netherlands",
      tooltip: "(in Dutch)",
      link: "http://www.apod.nl/",
      maintainers: [
        {
          name: "Rolf A. Jansen",
          link: "http://www.public.asu.edu/~rjansen/",
        },
      ],
    },
    {
      name: "Poland",
      tooltip:
        "(translated to Polish within a few days \nby the Polish Astronomical Society)",
      link: "http://apod.pl/apod/",
      maintainers: [
        {
          name: "Tomasz Kundera",
          link: "mailto:kundera%20at%20oa.uj.edu.pl",
        },
      ],
    },
    {
      name: "Russia",
      tooltip: "(in Russian from Astronet.ru)",
      link: "http://www.astronet.ru/db/apod.html",
      maintainers: [
        {
          name: "Oleg Bartunov",
          link: "mailto:%20oleg%20at%20sai.msu.su",
        },
      ],
    },
    {
      name: "Serbia",
      tooltip: "(in Serbian)",
      link: "http://www.apod.rs/",
      maintainers: [
        {
          name: "Liliana Gracanin",
          link: "http://www.apod.rs/Prevodilac.html",
        },
      ],
    },
    {
      name: "Slovenia",
      tooltip: "(in Slovenian)",
      link: "http://apod.fmf.uni-lj.si/",
      maintainers: [
        {
          name: "Herman Mikuz",
          link: "mailto:herman.mikuz%20at%20fmf.uni-lj.si",
        },
      ],
    },
    {
      name: "Spain",
      tooltip: "(in Catalan)",
      link: "http://www.apod.cat/",
      maintainers: [
        {
          name: "Xavier Berenguer",
          link: "http://www.xavierberenguer.net/",
        },
      ],
    },
    {
      name: "Spain",
      tooltip: "(in Spanish)",
      link: "http://observatorio.info/",
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
      name: "Syria",
      tooltip: "(in Arabic from EtaBits Webs)",
      link: "https://apod.me/",
      maintainers: [
        {
          name: "EtaBits Webs",
          link: "https://www.etabits.com/",
        },
        {
          name: "Hasan Arous",
          link: "https://www.aularon.com/",
        },
      ],
    },
    {
      name: "Taiwan",
      tooltip: "(in Chinese)",
      link: "http://sprite.phys.ncku.edu.tw/astrolab/mirrors/apod/apod.html",
      maintainers: [
        // {
        //   name: "http://sprite.phys.ncku.edu.tw/astrolab/mirrors/apod_e/apod.html",
        //   link: "http://sprite.phys.ncku.edu.tw/astrolab/mirrors/apod_e/apod.html",
        // },
        {
          name: "Han-Tzong Su",
          link: "mailto:htsu%20at%20mail.ncku.edu.tw",
        },
      ],
    },
    {
      name: "Taiwan",
      tooltip: "(in Taiwanese from National Central University)",
      link: "https://www.apod.tw/",
      maintainers: [
        {
          name: "An-Li Tsai",
          link: "mailto:%20altsai%20at%20astro.ncu.edu.tw",
        },
      ],
    },
    {
      name: "Turkey",
      tooltip: "(in Turkish)",
      link: "https://www.uzaydanhaberler.com/category/gorsel/apod/",
      maintainers: [
        {
          name: "Alper Gokce",
          link: "mailto:%20alpergokce%20at%20uzaydanhaberler.com",
        },
      ],
    },
    {
      name: "Turkey",
      tooltip: "(in Turkish from rasyonalist.org)",
      link: "https://rasyonalist.org/apod-gunun-astronomi-gorseli/",
      maintainers: [
        {
          name: "Seda Baştürk",
          link: "mailto:%20astro.seda.basturk%20at%20gmail.com",
        },
      ],
    },
    {
      name: "Ukraine",
      tooltip: "(in Ukrainian from Odessa National Maritime University)",
      link: "http://astronomy.pp.ua/",
      maintainers: [
        {
          name: "Vitalii Breus",
          link: "mailto:%20bvv_2004%20at%20ua.fm",
        },
      ],
    },
    {
      name: "United Kingdom",
      tooltip: "(University College London)",
      link: "http://www.star.ucl.ac.uk/~apod/apod/astropix.html",
      maintainers: [
        {
          name: "Ian Howarth",
          link: "mailto:idh%20at%20star.ucl.ac.uk",
        },
      ],
    },
  ];

  return (
    <section id="bookmark" className={styles.section}>
      <h2
        className={`${typography.headlineMedium} ${typography["headlineMedium--margin"]}`}
      >
        How to Bookmark APOD
      </h2>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        <OuterLink link="http://apod.nasa.gov/" text="Link" /> to our main NASA
        site which will direct you to http://apod.nasa.gov/apod/astropix.html.
        This main site is the first to update and the most likely to be
        up-to-date. Alternatively, link to one of our mirror sites:
      </p>
      <div className={styles["info-list"]}>
        {websites.map((website) => {
          return <Info key={website.tooltip} {...website} />;
        })}
      </div>
      <p className={`${typography.body} ${typography["body--margin"]}`}>
        These addresses will bring you the most recent available Astronomy
        Picture of the Day (APOD).
      </p>
    </section>
  );
}

export default Bookmark;
