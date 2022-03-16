import { Publication } from "../model/publication";

type Props = {
  publication: Publication;
};

export function PublicationCard(props: Props) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={`${props.publication.imageUrl}?w=500`}
        className="object-cover w-full"
      />
    </div>
  );
}
