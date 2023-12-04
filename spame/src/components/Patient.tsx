interface PatientProps {
  name: string;
  birthdate: string;
  mother: string;
  cpf: string;
}

export default function Patient({
  name,
  birthdate,
  mother,
  cpf,
}: PatientProps): JSX.Element {
  return (
    <div className="w-full gap-3 bg-slate-400 flex flex-row">
      <p>{name}</p>
      <p>{mother}</p>
      <p>{birthdate}</p>
      <p>{cpf}</p>
    </div>
  );
}
