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

export const SocialShareButton = ({ data }) => {
  const hostname = process.env.hostname;
  const fbid = process.env.fbid;
  const url = `${hostname}posts/${data.slug}`;

  return (
    <div className={`my-4 space-x-2`}>
      <FacebookShareButton url={url} quote={data.title} hashtag={"#nextshare"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton url={url} appId={fbid}>
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <WhatsappShareButton url={url} title={data.title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={url}
        title={data.title}
        summary={data.description}
        source={`${hostname}`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <LineShareButton url={url} title={data.title}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
};
