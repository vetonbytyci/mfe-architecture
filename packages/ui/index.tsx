import React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { useStore } from "store";

export type RouteType = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export function AppShell({
  title,
  routes,
  navLinks,
  colorScheme,
}: {
  title: string;
  routes: RouteType[];
  navLinks: NavLink[];
  colorScheme?: "dark" | "light";
}) {
  const { movies } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <MantineAppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink label={link.label} path={link.path} key={link.path} />
              ))}
            </Navbar>
          }
          header={
            <Header
              height={60}
              p="xs"
              sx={{ display: "flex" }}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{movies.length} selected</Text>
            </Header>
          }
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
}
