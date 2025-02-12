'use client';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@components/@ui/tooltip';
import { Repeat2 } from 'lucide-react';
import { motion } from 'motion/react';

export const SocialShareButton = ({
	slug,
	className = ''
}: {
	slug: string;
	className?: string;
}) => {
	const hostname = process.env.hostname;
	const fbid = process.env.fbid;
	const url = `${hostname}/posts/${slug}`;

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

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<motion.button
							className="w-8 cursor-pointer rounded-full border border-white p-1"
							onClick={() => navigator.clipboard.writeText(url)}
							data-tooltip-target="tooltip-click"
							data-tooltip-trigger="hover"
							whileTap={{
								scale: 0.9
							}}
							initial={{
								color: 'var(--color-white)'
							}}
							whileHover={{
								borderColor: 'var(--color-secondary)',
								color: 'var(--color-secondary)'
							}}
						>
							<circle cx="32" cy="32" r="31" fill="#00b800"></circle>
							<Repeat2 />
						</motion.button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Copy to clipboard</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</span>
	);
};
