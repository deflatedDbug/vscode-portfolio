import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'subinlebow.com',
    href: 'https://subinlebow.com',
  },
  {
    social: 'email',
    link: 'subinlebow@gmail.com',
    href: 'mailto:subinlebow@gmail.com',
  },
  {
    social: 'github',
    link: 'deflatedDbug',
    href: 'https://github.com/deflatedDbug',
  },
  {
    social: 'linkedin',
    link: 'subinlebow',
    href: 'https://www.linkedin.com/in/subinlebow007/',
  },
  {
    social:'calendly',
    link: 'subinlebow',
    href: 'https://calendly.com/subinlebow/30min',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
