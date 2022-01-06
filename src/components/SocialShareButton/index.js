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

export const SocialShareButton = ({ data, className }) => {
  const hostname = process.env.hostname;
  const fbid = process.env.fbid;
  const url = `${hostname}/posts/${data.slug}`;

  return (
    <span className={className}>
      {/* <FacebookShareButton url={url} quote={data.title} hashtag={"#nextshare"}>
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
      </LineShareButton> */}

      <button
        className="rounded-full p-1 w-8 text-gray-200 bg-gray-600 border-none"
        onClick={() => navigator.clipboard.writeText(url)}
        data-tooltip-target="tooltip-click"
        data-tooltip-trigger="click"
      >
        <circle cx="32" cy="32" r="31" fill="#00b800"></circle>
        <i className="fas fa-link"></i>
      </button>
      <div
        id="tooltip-click"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Copy to clipboard
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </span>
  );
};
