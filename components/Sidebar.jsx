import Link from "next/link";
import { useRouter } from "next/router";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "../styles/Sidebar.module.css";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    href: "https://github.com/deflatedDbug",
    external: true,
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map((item) => {
          const { Icon, path, href, external } = item;
          const key = path || href; // Ensuring each item has a unique key

          return external ? (
            // External link
            <a
              href={href}
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconContainer}
            >
              <Icon fill={"rgb(106, 115, 125)"} className={styles.icon} />
            </a>
          ) : (
            // Internal link with single child <a> tag
            <Link href={path} key={key}>
              <a
                className={`${styles.iconContainer} ${
                  router.pathname === path ? styles.active : ""
                }`}
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                  className={styles.icon}
                />
              </a>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          // Ensure only one child <a> tag inside the <Link>
          <Link href={path} key={path}>
            <a className={styles.iconContainer}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
