import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const slectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          genres.map((genre) => (
            <ListItem key={genre} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText noOfLines={1} w="100px" />
              </HStack>
            </ListItem>
          ))}

        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === slectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre?.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
