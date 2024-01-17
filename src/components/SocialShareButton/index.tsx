'use client';

import { Link } from 'lucide-react';

export const SocialShareButton = ({ data, className = '' }) => {
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
				className="w-8 rounded-full border-none bg-gray-600 p-1 text-gray-200"
				onClick={() => navigator.clipboard.writeText(url)}
				data-tooltip-target="tooltip-click"
				data-tooltip-trigger="click"
			>
				<circle cx="32" cy="32" r="31" fill="#00b800"></circle>
				<Link />
			</button>
			<div
				id="tooltip-click"
				role="tooltip"
				className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm dark:bg-gray-700"
			>
				Copy to clipboard
				<div className="tooltip-arrow" data-popper-arrow></div>
			</div>
		</span>
	);
};
