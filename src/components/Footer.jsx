import { Typography } from "@material-tailwind/react";
import { Link as ScrollLink } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

const SITEMAP = [
  {
    title: "Help Center",
    links: ["Facebook", "Instagram", "LinkedIn", "Contact"],
  },
  {
    title: "Company",
    links: ["About", "Services", "Clients", "Portfolio"],
  },

  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full text-primary bg-[#f4f5ff]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                className="mb-4 text-primary font-bold uppercase opacity-60"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <ScrollLink
                      to={link.toLocaleLowerCase()}
                      smooth={true}
                      duration={1200}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </ScrollLink>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 gap-6">
            <div>
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
              >
                &copy; {currentYear}{" "}
                <a
                  className="font-semibold text-primary"
                  target="_blank"
                  href="http://linkedin.com/in/yash-suthar-23140028b"
                >
                  DigiPromo
                </a>
                . All Rights Reserved.
              </Typography>
            </div>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="http://linkedin.com/in/yash-suthar-23140028b"
                target="_blank"
                className="transition-opacity hover:opacity-60"
              >
                <LinkedInIcon className="h-8 w-8" />
              </Typography>
              <Typography
                as="a"
                href="http://github.com/yashsutharCode"
                target="_blank"
                className="transition-opacity hover:opacity-60 opacity-4"
              >
                <GitHubIcon className="h-8 w-8" />
              </Typography>
              <Typography
                as="a"
                href="https://yashsuthar-portfolio.netlify.app/"
                target="_blank"
                className="transition-opacity hover:opacity-60"
              >
                <PersonOutlineIcon className="h-8 w-8" />
              </Typography>
              <Typography
                as="a"
                href="https://www.instagram.com/yashsuthar_2003/profilecard/?igsh=cTM0aThqN2Z3ZjU0"
                target="_blank"
                className="transition-opacity hover:opacity-60"
              >
                <InstagramIcon className="h-8 w-8" />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
