import { Anchor, Text, Title } from '@mantine/core';
import classes from './Home.module.css';
import { theme }  from '../../theme';

const Home: React.FC = () => {
  return (
    <div id='#home'>
      <Text c="dimmed" size="lg" maw={580} mt="xl" className={classes.text} style={{ color: theme.colors?.delftBlue?.[2] ?? 'initial' }}>
        Hi there! My name is{' '}
      </Text>
      <Text className={classes.title}>
        Brandon <br></br>Mason{' '}
      </Text>
      <Text c="dimmed" ta="center" size="lg" maw={580} mt="xl" className={classes.text} style={{ color: theme.colors?.delftBlue?.[2] ?? 'initial' }}>
        My name is Brandon Mason{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </div>
  );
}

export default Home;