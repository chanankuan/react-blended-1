import { formatDateToNow } from 'utils/formatDate';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  Date,
  Tag,
  UserBox,
  UserInfo,
  UserName,
} from './BlogCard.styled';

export const BlogCard = ({
  avatar,
  description,
  name,
  postedAt,
  poster,
  tag,
  title,
  _id,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={title} />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{formatDateToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
