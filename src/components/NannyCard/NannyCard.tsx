import { Nanny } from "@/types/nannies";

type Props = {
  nanny: Nanny;
  isLoggedIn?: boolean;
};

export default function NannyCard({ nanny, isLoggedIn }: Props) {
  return (
    <li>
      <img src={nanny.avatar_url} alt={nanny.name} />
      <h3>{nanny.name}</h3>
      <p>{nanny.location}</p>
      <p>{nanny.price_per_hour} $/hour</p>
    </li>
  );
}

