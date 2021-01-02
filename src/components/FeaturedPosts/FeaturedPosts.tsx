import classnames from 'classnames';
import styles from './FeaturedPosts.module.scss';
import { ReactComponent as InternalLinkIcon } from '@/assets/internal-link.svg';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import { motion } from 'framer-motion';
import { Paths } from '@/data/paths';
import Link from 'next/link';

const visibilityVariants = {
  hovered: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

interface PostProps {
  date: string;
  title: string;
  description: string;
}

const Post: React.FC<PostProps> = ({ date, title, description }) => {
  return (
    <Link href={'/' + Paths.writings}>
      <a className={classnames('link-reset', styles.link)}>
        <motion.div whileHover='hovered' className={styles.postWrapper}>
          <div className={classnames('p-xsm', styles.postContainer)}>
            <div>
              <time dateTime={date} className={styles.time}>
                {date}
              </time>
            </div>
            <div className={classnames('space-x-md', styles.postContent)}>
              <div className={styles.postContentText}>
                <h1 className='fz-sm m-b-micro'>{title}</h1>
                <p className='fz-sm m-b-none'>{description}</p>
              </div>
              <motion.div
                initial='hidden'
                variants={visibilityVariants}
                className={styles.icon}>
                <SvgContainer svgWidth={14} svgHeight={14}>
                  <InternalLinkIcon />
                </SvgContainer>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial='hidden'
            variants={visibilityVariants}
            className={styles.hoverBg}
          />
        </motion.div>
      </a>
    </Link>
  );
};

const FeaturedPosts: React.FC = () => {
  const data: PostProps = {
    date: 'December 14, 2020',
    title: 'You must dig',
    description: `Get to the motivations behind a request. 'Something' happened for that 'something' to be acknowledged as a problem by your...`,
  };
  return (
    <section>
      <h1 className={'text-h2 m-b-lg'}>Featured posts</h1>
      <ul className='space-y-md'>
        {Array.from(new Array(3)).map((_, idx) => (
          <li key={idx}>
            <Post
              date={data.date}
              title={data.title}
              description={data.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { FeaturedPosts };
