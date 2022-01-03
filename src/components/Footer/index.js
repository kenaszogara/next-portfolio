import { useRouter } from "next/router";

const styles = {
  container: `border-t-2 w-full my-10 text-center`,
  link: `block underline my-6`,
};

export const Footer = ({ config }) => {
  const { pathname } = useRouter();
  return (
    <footer className={`${styles.container}`}>
      <section className={`my-6`}>
        {pathname != "/" && (
          <a className={`${styles.link}`} href="/">
            Go back to homepage
          </a>
        )}
        <a
          className={`${styles.link}`}
          href={`mailto:${config.contact.email}`}
          target={`_blank`}
        >
          Email me
        </a>
        <a
          className={`${styles.link}`}
          href={config.contact.phone}
          target={`_blank`}
        >
          Chat me on Whatsapp
        </a>
      </section>
      <p>{config.footerContent}</p>
    </footer>
  );
};
