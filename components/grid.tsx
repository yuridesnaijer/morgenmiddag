import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import IBlogPost from "../types/IBlogPost";

interface IGridProps {
  items: IBlogPost[];
}

const Grid: React.FC<IGridProps> = (props) => {
  const { items } = props;

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="8">
        {items.map((item) => (
          <Link key={item.slug} as={`/posts/${item.slug}`} href="/posts/[slug]">
            <StyledGridItem href={`/posts/${item.slug}`}>
              <img alt={item.title} src={item.coverImage} />
            </StyledGridItem>
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Grid;

const StyledGridItem = styled.a`
  cursor: pointer;
`;
