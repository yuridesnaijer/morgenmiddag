import React from "react";
import IBlogPost from "../../../types/IBlogPost";
import { Box, Flex, Heading, HStack, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

type TProjectCardProps = {
  project: IBlogPost;
};

const ProjectCard: React.FC<TProjectCardProps> = (props: TProjectCardProps) => {
  const { project } = props;
  console.log("project", project);
  return (
    <Box marginBottom={"10rem"}>
      <Flex>
        <Box
          flexGrow={1}
          position={"relative"}
          width={450}
          _after={{
            content: '""',
            w: "full",
            h: "full",
            top: 0,
            pos: "absolute",
            backgroundImage: `url(${project.coverImage})`,
            filter: "blur(10px)",
            opacity: 0.75,
            zIndex: -1,
          }}
        >
          <Box rounded={"2xl"} overflow={"hidden"} maxHeight={"35rem"}>
            <Link as={`/posts/${project.slug}`} href="/posts/[slug]">
              <Image
                style={{ position: "relative" }}
                width={1500}
                height={1500}
                src={project.coverImage}
                alt={project.title}
              />
            </Link>
          </Box>
        </Box>
        <Flex
          direction="column"
          justifyContent="space-between"
          marginLeft={"1rem"}
          width={"20rem"}
        >
          <Box>
            <Link as={`/posts/${project.slug}`} href="/posts/[slug]">
              <Heading marginBottom={"3rem"}>{project.title}</Heading>
            </Link>
            <Text>{project.excerpt}</Text>
          </Box>
          <HStack alignSelf="flex-end">
            {project.tags?.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
