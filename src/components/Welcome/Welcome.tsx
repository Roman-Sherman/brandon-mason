import { Anchor, Text, Title, useMantineTheme } from '@mantine/core';
import classes from './Welcome.module.css';
import { theme }  from '../../theme';

const Welcome: React.FC = () => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }} className={classes.text} style={{ color: theme.colors?.delftBlue?.[2] ?? 'initial' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" className={classes.text} style={{ color: theme.colors?.delftBlue?.[2] ?? 'initial' }}>
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}

export default Welcome;