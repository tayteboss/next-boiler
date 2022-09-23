import styled from 'styled-components';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import { motion } from 'framer-motion';
import { getAllPages, getPage } from '../lib/datocms';

const PageWrapper = styled(motion.div)``;

const Page = ({ pageTransitionVariants, data }) => (
	<PageWrapper
		variants={pageTransitionVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
	>
		<Head>{renderMetaTags(data.seo)}</Head>
	</PageWrapper>
);

export const getStaticPaths = async () => {
	const allPages = await getAllPages();

	return {
		paths: allPages.allPages?.map((page) => `/${page.pageSlug}`) || [],
		fallback: false,
	};
};

export const getStaticProps = async ({ params, preview = false }) => {
	let data = await getPage(params.slug, preview);
	data = data.page;

	return {
		props: {
			preview,
			data,
		},
	};
};

export default Page;
