interface PatientProps {
  name: string;
  birthdate: Date;
  mother: string;
  cpf: string;
}

export default function Patient({
  name,
  birthdate,
  mother,
  cpf,
}: PatientProps): JSX.Element {
  const formattedBirthdate =
    ("0" + birthdate.getDate()).slice(-2) +
    "/" +
    ("0" + (birthdate.getMonth() + 1)).slice(-2) +
    "/" +
    birthdate.getFullYear();

  return (
    <div className="w-full gap-5 bg-slate-200 flex flex-col m-3 p-3">
      <p className=" font-semibold text-lg">{name.toUpperCase()}</p>
      <p>Mãe: {mother.toUpperCase()}</p>
      <p>Data Nasc.: {formattedBirthdate}</p>
      <p>CPF: {cpf.toUpperCase()}</p>
    </div>
  );
}
