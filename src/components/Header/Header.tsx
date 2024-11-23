import { Burger, Container, Group, Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

interface Link {
    link: string;
    label: string;
    target?: string;
}

const links: Link[] = [
    { link: '/#home', label: 'Home' },
    { link: '/#about', label: 'About' },
    { link: '/#projects', label: 'Projects' },
    { link: '/#contact', label: 'Contact' },
    { link: 'https://docs.google.com/document/d/1AQZoarByG7TqT1GTa6TpMQrMAzRy5fyqJ4XqPzxWmjw/preview', label: 'Resume', target: '_blank' },
  ];

interface HeaderProps {
    scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
    const [opened, { open, close }] = useDisclosure();

    const items = links.map((link) => (
        <a
        key={link.label}
        href={link.link}
        target={link.target}
        className={classes.link}
        >
        {link.label}
        </a>
    ));

    return (
        <>
            <header id="header" style={{ boxShadow: scrolled ? 'rgba(0, 0, 0, 0.15) 0px 3px 8px 0px' : 'none' }}>
                <Container className={classes.inner} fluid >
                    <Group gap={5} visibleFrom="xs">
                    {items}
                    </Group>

                    <Burger opened={opened} onClick={(opened) ? close : open} hiddenFrom="xs" size="lg" className={classes.burger}/>

                </Container>
                <Modal opened={opened} onClose={close} withCloseButton={false} yOffset={0} closeOnClickOutside transitionProps={{transition: 'slide-left'}} 
                    className={classes.modal}
                    classNames={{
                        root: classes.modalRoot,
                        header: classes.modalHeader,
                        title: classes.modalTitle,
                        inner: classes.modalInner,
                        body: classes.modalBody,
                        content: classes.modalContent,
                    }}
                >
                    {items}
                </Modal>
            </header>
        </>
    );
};

export default Header;