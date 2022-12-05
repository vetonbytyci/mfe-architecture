import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useStore } from "store";

export function MovieCard({
  title,
  image,
  showAddButton = true,
}: {
  title: string;
  image: string;
  showAddButton?: boolean;
}) {
  const theme = useMantineTheme();
  const { addMovie } = useStore();

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} height={320} alt={title} />
      </Card.Section>
      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{title}</Text>
      </Group>
      {showAddButton && (
        <Button
          onClick={() => addMovie({ title, image })}
          color="blue"
          variant="light"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Add To List
        </Button>
      )}
    </Card>
  );
}
