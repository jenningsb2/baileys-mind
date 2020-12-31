import classnames from 'classnames';
import styles from './FeaturedPosts.module.scss';

interface PostProps {
  date: string;
  title: string;
  description: string;
}

const Post: React.FC<PostProps> = ({ date, title, description }) => {
  return (
    <div>
      <time dateTime={date} className={styles.time}>
        {date}
      </time>
      <h1 className='fz-base'>{title}</h1>
      <p className='fz-sm'>{description}</p>
    </div>
  );
};

const FeaturedPosts: React.FC = () => {
  return (
    <section>
      <h1 className={classnames('text-h2', styles.title)}>Featured posts</h1>
      <ul className={classnames(styles.list)}>
        <li>
          <Post
            date='December 14, 2020'
            title='You must dig'
            description={`Get to the motivations behind a request. 'Something' happened for that 'something' to be acknowledged as a problem by your...`}
          />
        </li>
      </ul>
    </section>
  );
};

export { FeaturedPosts };
