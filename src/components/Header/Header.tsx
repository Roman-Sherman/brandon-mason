import { Burger, Container, Group, Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import classes from './Header.module.css';

const links = [
    { link: '/#home', label: 'Home' },
    { link: '/#about', label: 'About' },
    { link: '/#projects', label: 'Projects' },
    { link: '/#contact', label: 'Contact' },
    { link: 'https://docs.google.com/document/d/1eLmBdKL05E2HDpKKtzlpqAieiYgKA0BGCdweTQUlebw/preview', label: 'Resume' },
  ];

const Header: React.FC = () => {
    const [opened, { open, close }] = useDisclosure();
    // const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
        key={link.label}
        href={link.link}
        className={classes.link}
        >
        {link.label}
        </a>
    ));

    return (
        <>
            <header>
                <Container size="md" className={classes.inner}>
                    <Group gap={5} visibleFrom="xs">
                    {items}
                    </Group>

                    <Burger opened={opened} onClick={(opened) ? close : open} hiddenFrom="xs" size="lg" className={classes.burger}/>

                </Container>
            </header>
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
        </>
    );
};

export default Header;