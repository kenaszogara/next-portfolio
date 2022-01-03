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
  let protocol = "https:";
  if (typeof window !== "undefined") {
    hostname = window.location.hostname;
    protocol = window.location.hostname;
  }

  return (
    <div className={`my-4 space-x-2`}>
      <FacebookShareButton
        url={`${protocol}//${hostname}${pathname}`}
        quote={data.title}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={`${hostname}${pathname}`} appId={""}>
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <WhatsappShareButton
        url={`${protocol}//${hostname}${pathname}`}
        title={data.title}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={`${protocol}//${hostname}${pathname}`}
        title={data.title}
        summary={data.description}
        source={`${protocol}//${hostname}`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <LineShareButton
        url={`${protocol}//${hostname}${pathname}`}
        title={data.title}
      >
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
};
