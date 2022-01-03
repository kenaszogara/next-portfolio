import {
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import { useRouter } from "next/router";

export const SocialShareButton = ({ data }) => {
  const { pathname } = useRouter();
  let hostname = "";
  if (typeof window !== "undefined") {
    hostname = window.location.hostname;
  }

  return (
    <div className={`my-4 space-x-2`}>
      <FacebookShareButton
        url={`${hostname}${pathname}`}
        quote={data.title}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={`${hostname}${pathname}`} appId={""}>
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <WhatsappShareButton
        url={`${hostname}${pathname}`}
        title={data.title}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={`${hostname}${pathname}`}
        title={data.title}
        summary={data.description}
        source={`${hostname}`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <LineShareButton url={`${hostname}${pathname}`} title={data.title}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
};
